"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author:  Patrick M. Capuano
   Date:    4.23.19
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

// Event listener was added to trigger an annoymous function when the window loads. 
window.addEventListener("load", function () {

      // That annoymous function starting out with it calling the calcCart function, to be declared later.
      calcCart();

      // The submit buttons are set to trigger the sessionTest function when clicked (also to be declared later).
      document.getElementById("regSubmit").onclick.sessionTest();

      // The elements with the following IDs are made so when they are put out of focus, they trigger the calcCart function again.
      document.getElementById("fnBox", "lnBox", "groupBox", "mailBox", "phoneBox", "banquetBox").onblur.calcCart();

      // The element with the mediaCB ID when clicked is also taught to call the calcCart function.
      document.getElementById("mediaCB").onclick.calcCart();

});

// The sessionTest function is now initiallized here with all of its commands. 
function sessionTest() {

      // IF any item of the sessionBox collection are equal to negative one...
      if (sessionBox[i] = -1) {

            // Then the sessionBox will prompt the user a message telling them to select a package.
            sessionBox.setCustomValidity("Select a Session Package.");

      } else {

            // Otherwise, the custom validity message will be set to an ampty string.
            sessionBox.setCustomValidity("");

      }

};

// The calcCart function is then also created with it's following commands to follow suit.
function calcCart() {

      // The local variable (which you'll start to see a lot of) confName is made and is set to equal the value of the first and last names entered within the fields.
      var confName = firstName + lastName;

      // A flurry of local variables are now added here and consist of the fields within the form as each of their correspending values.
      var confGroup = document.getElementById("groupBox");
      var confMail = document.getElementById("mailBox");
      var confPhone = document.getElementById("phoneBox");
      var confBanquet = document.getElementById("banquetBox");


      // The cost of the entered banquet field is created here by taking whatever option of the user put in and multiplying it by fifty five.
      var confBanquetCost = confBanquet * 55;

      // sessionBox as a local variable is then made and records the index that the user selected out of the form.
      var sessionBox = regForm.elements.select.selectedIndex;

      // In that case, whatever the user picked is checked to see if it is not equal to negative one.
      if (sessionBox != -1) {

            // Where if that is the case, then the local varaibles of confSession and confSessionCost are set to sessionBox's text and value respectively.
            var confSession = sessionBox;

            var confSessionCost = sessionBox.value;

      } else {

            // However, if the index is equal to negative one, then they will be set to an empty string and zero respectively.
            confSession = "";

            confSessionCost = 0;

      };


      // A conditonal statement is made that under the conditions of the element of the mediaCB ID is clicked...
      if (document.getElementById("mediaCB").click) {

            // Then new, local variables of confPack and confPackCost would be set to "yes" and 115 respectively.
            var confPack = "yes";

            var confPackCost = 115;

      } else {

            // Where if it is not clicked, then they would be set instead to "no" and zero respectively.
            confPack = "no";

            confPackCost = 0;

      };

      // Through the parseFloat method, confTotal is then created and set to the session, banquet and pack costs put together.
      var confTotal = parseFloat(confSessionCost + confBanquetCost + confPackCost);

      // Then, the writeSessionValues would be called, which will be established...
      writeSessionValues();

}

// ...right here!... with the following commands...
function writeSessionValues() {


      // All of the "conf" variables made before now have their values set to be the text of the coresponding fields for each one.
      confName = document.getElementById("regName");
      confGroup = document.getElementById("regGroup");
      confMail = document.getElementById("regEmail");
      confPhone = document.getElementById("regPhone");
      confSession = document.getElementById("regSession");
      confBanquet = document.getElementById("regBanquet");
      confPack = document.getElementById("regPack");

      // The total of all of this is then put into the regTotal element with the confTotal variable's value with a dollar sign preseding it.
      document.getElementById("regTotal").innerHTML = "$" + confTotal;

};