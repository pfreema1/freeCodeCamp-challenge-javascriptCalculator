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
var activeInputEl = document.getElementById("activeInput");
var inputHistoryEl = document.getElementById("inputHistory");

var activeInputStr = "0";
var inputHistoryStr = "0";

//object that relates button id to string
var buttonIdToString = {
    buttonDivide: "/",
    buttonMultiply: "*",
    button7: "7",
    button8: "8",
    button9: "9",
    buttonSubtract: "-",
    button4: "4",
    button5: "5",
    button6: "6",
    buttonPlus: "+",
    button1: "1",
    button2: "2",
    button3: "3",
    buttonEqual: "=",
    button0: "0",
    buttonDecimal: ".",
    buttonAc: function() {
        activeInputStr = "0";
        inputHistoryStr = "0";
        updateScreenText();
    },
    buttonCe: function() {
        
        //if the last thing inputted was an operator then just take off the operator, 
        //otherwise run the for loop to get the whole number and then take it off
        var lastChar = inputHistoryStr[inputHistoryStr.length-1];
        //console.log("lastChar:  " + lastChar);
        if(lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/") {
            inputHistoryStr = inputHistoryStr.slice(0, inputHistoryStr.length - 1);
            activeInputStr = "0";
            updateScreenText();
        } else {  //get the last number in full and take it off

            //if we arent on the last number
            if(inputHistoryStr.indexOf("+") != -1 ||
                inputHistoryStr.indexOf("-") != -1 ||
                inputHistoryStr.indexOf("*") != -1 ||
                inputHistoryStr.indexOf("/") != -1) {

                for(var i = inputHistoryStr.length - 1; i >= 0; i--) {
                    if(inputHistoryStr[i] == "+" || inputHistoryStr[i] == "-" || inputHistoryStr[i] == "*" || inputHistoryStr[i] == "/") {
                        inputHistoryStr = inputHistoryStr.slice(0, i+1);
                        activeInputStr = "0";
                        var i = -1; //kick out of for loop
                    } 
                    
                }
            } else { //case: we are on the last number, just clear everything
                console.log("clearing all!");
                this.buttonAc();
            }
            

            updateScreenText();
        }

        //take off the last part of inputHistoryStr
        //inputHistoryStr = inputHistoryStr.slice(0, inputHistoryStr - 1);
        //reset activeInputStr to "0"
        //activeInputStr = "0";
    }
}

function handleDecimalInput() {
    //activeInputStr += buttonIdToString[ev.target.id];
    console.log("handling decimal input!");
}

function clickHandler(ev) {
    //console.log("ev.target.id:  " + ev.target.id);

    if(buttonIdToString[ev.target.id] != null) {
    
        //if anything but Ac and Ce were pressed
        if(ev.target.id != "buttonAc" && ev.target.id != "buttonCe") {
            //if the button pressed was a number (or decimal), then add to the activeInputStr, otherwise
            //replace the activeInputStr with the operator (+, -, etc)
            if(!isNaN(ev.target.id[ev.target.id.length - 1])) {
                //if inputHistoryStr is 0, we dont want to add the input to "0"  (ie: 09)
                if(inputHistoryStr == "0") {
                    activeInputStr = buttonIdToString[ev.target.id];
                } else if(isNaN(parseInt(inputHistoryStr[inputHistoryStr.length - 1])) && inputHistoryStr[inputHistoryStr.length - 1] != ".") { //if input history was an operator and NOT a decimal
                    console.log("hello");
                    activeInputStr = buttonIdToString[ev.target.id];
                } else {
                    activeInputStr += buttonIdToString[ev.target.id];
                    
                }
            } else if(ev.target.id == "buttonDecimal") { 
                handleDecimalInput();
            } else {
                activeInputStr = buttonIdToString[ev.target.id];
            }
            
            //THIS MIGHT TURN INTO A PROBLEM LATER
            if(inputHistoryStr == "0") {
                inputHistoryStr = buttonIdToString[ev.target.id];
            } else {
                inputHistoryStr += buttonIdToString[ev.target.id];
            }
            updateScreenText();
        } else {
            if(ev.target.id == "buttonAc") {
                buttonIdToString.buttonAc();
            } else if(ev.target.id == "buttonCe") {
                buttonIdToString.buttonCe();
            }
            //updateScreenText();
        }
    }
}

function updateScreenText() {
    activeInputEl.innerHTML = activeInputStr;
    inputHistoryEl.innerHTML = inputHistoryStr;
}

function compute() {

}




document.addEventListener("DOMContentLoaded", function() {
    updateScreenText();
});

document.getElementById("container").addEventListener('click', clickHandler);
