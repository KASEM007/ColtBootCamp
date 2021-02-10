"use strict";

var myP = document.createElement('p'),
    myPText = document.createTextNode('This Paragraph created with JS');
myP.appendChild(myPText);
document.body.appendChild(myP);