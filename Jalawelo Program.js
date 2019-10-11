/*This Javascript Program will get the information from the user through a HTML form about how many math questions that should be displayed. The Program will also prompt the user for an answer and indicate to the user whether the input was correct or not. The program will go through a loop of continous questions until it reaches the desired amount of inputted*/

var n = document.getElementById("noq").value;//n will be the variable that store the number of questions the user wants
var i, j;
for (i = 1; n >= i; i++) {
    var temp1 = Math.floor(Math.random() * 99) + 1;//A random nuber from 1-99 will be generated and assigned to the variable temp1.
    var temp2 = Math.floor(Math.random() * 99) + 1;//A random nuber from 1-99 will be generated and assigned to the variable temp1.
    var t3 = temp2 + temp1;// t3 will be assigned the sum of variables temp1 and temp2.
    j = document.getElementById("catch").value;//n will be the variable that store the answer the user inputyed for the question
    if (j == t3) {
        alert = (" Correct!!!!!!!");// to alert the user that the answer inputted was correct
    }
    else {
        alert = (" Incorrect. The Answer is", t3);// to alert the user that the answer inputted was not correct
    }
    document.getElementById("math").innerHTML = " What is " + temp2" + " + temp1;// This line will display all the math questions in html 
}

