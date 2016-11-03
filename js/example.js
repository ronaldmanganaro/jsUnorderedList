/*
Ronald Manganaro(c) copyright 2016
Email: ronald_manganaro@student.uml.edu
COMP 3010 - 201 GUI Programming I
In class 5
Ronald Manganaro, Umass Lowell Computer Science
Date: November 2, 2016

Description:
In this assignment I was able to find elements inside
the DOM. I was then able to add to the list that was
already apart of the html using only javascript. Some
of the most useful tools that I used were 
getElementsByTagName, and appendChild. In order to make
the number look correct it was neccesarry to create a 
new span and then append it to the h2. Addin the class
cool made the color of the list items change over to green.
*/

//find the unordered list and its children 
var list = document.getElementsByTagName("ul");
var listItems = document.getElementsByTagName("li");

// ADD NEW ITEM TO END OF LIST
var li = document.createElement("li");
li.appendChild(document.createTextNode("cream"));
list[0].appendChild(li);

// ADD NEW ITEM START OF LIST
var li2 = document.createElement("li");
li2.appendChild(document.createTextNode("kale"));
list[0].insertBefore(li2,listItems[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
for(var i = 0; i < listItems.length;i++) {
    listItems[i].className = "cool";
    //add id to the new items that were added
    if(listItems[i].id == "")
        listItems[i].id = "new item";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var h2arr = document.getElementsByTagName("h2");
var newSpan = document.createElement('span');

//after creating the span I append it and change the text
h2arr[0].appendChild(newSpan);
newSpan.innerHTML = listItems.length;