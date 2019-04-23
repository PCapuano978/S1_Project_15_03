"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_reg2.js

   Author:  Patrick M. Capuano
   Date:    4.23.19 


   Function List
   =============
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

// An event listener is added to the top to run the "writeSessionValues" when the window loads.
window.addEventListener("load", writeSessionValues());

// The whole writeSessionValues itself being copy and pasted here for the same use as in the other JavaScript file.
function writeSessionValues() {


      confName = document.getElementById("regName");
      confGroup = document.getElementById("regGroup");
      confMail = document.getElementById("regEmail");
      confPhone = document.getElementById("regPhone");
      confSession = document.getElementById("regSession");
      confBanquet = document.getElementById("regBanquet");
      confPack = document.getElementById("regPack");


      document.getElementById("regTotal").innerHTML = "$" + confTotal;

};