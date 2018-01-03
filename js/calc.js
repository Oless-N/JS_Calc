// ////////////////////////////////////////////////////////////
var firstBuffer = "";
var secondBuffer = "";
var operator_in= "";
var A=0.0;
var B=0.0;
var nextOperand= false;
var outStr="";var res=0;



// /////////////////////////////////////////////////////////////
function setF_Bufer(butStr)
{
    if (nextOperand==false){
        firstBuffer+=butStr;
        outStr=firstBuffer;}



else if (nextOperand==true) {
        secondBuffer += butStr;
        outStr += secondBuffer;
    }

    printout(outStr);
}
function refresh() {
    A=0;
    B=0;
    firstBuffer='';
    secondBuffer='';
    operator_in="";
    nextOperand=false;
    outStr="";
    printout("0");
}
function setOperator(op){
    A=parseFloat(firstBuffer);
    operator_in=op.toString();
    outStr+=operator_in;
    nextOperand=true
    printout(outStr);


    }
function printout(str) {
    document.getElementById("output_text").innerText=str.toString();


}
function result() {
    B=parseFloat(secondBuffer);
switch (operator_in) {
    case "+": {
        res= A + B;
        break;
    }
    case "-": {
        res= A - B;
        break;
    }
    case "x": {
        res= A * B;
        break;
    }
    case "/": {
        res= A / B;
        break;
    }
    default: {
        res="error input";
        break;
    }
}  outStr+="="+res;
    nextOperand=false;
    printout(outStr);

}
