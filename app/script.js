//setup button element id's
var buttonAcEl = document.getElementById("buttonAc");
var buttonCeEl = document.getElementById("buttonCe");
var buttonDivideEl = document.getElementById("buttonDivide");
var buttonMultiplyEl = document.getElementById("buttonMultiply");
var button7El = document.getElementById("button7");
var button8El = document.getElementById("button8");
var button9El = document.getElementById("button9");
var buttonSubtractEl = document.getElementById("buttonSubtract");
var button4El = document.getElementById("button4");
var button5El = document.getElementById("button5");
var button6El = document.getElementById("button6");
var buttonPlusEl = document.getElementById("buttonPlus");
var button1El = document.getElementById("button1");
var button2El = document.getElementById("button2");
var button3El = document.getElementById("button3");
var buttonEqualEl = document.getElementById("buttonEqual");
var button0El = document.getElementById("button0");
var buttonDecimalEl = document.getElementById("buttonDecimal");

document.getElementById("container").addEventListener('click', clickHandler);

function clickHandler(ev) {
    //console.log("something was clicked");
    //console.log("ev:  " + ev);
    console.log("ev.target.id:  " + ev.target.id);
}