
/*
    Program name: Homework 1 HTML Form
    Author: sydneyguico.github.io
    Date created: 02/10/2026
    Date last edited: 02/25/2026
    Version: 1.0
    By: Sydney Guico
    Description: Working Functions to Website Form
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//dynamic date js code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function() {output.innerHTML = this.value;};
