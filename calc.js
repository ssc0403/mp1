let one=document.getElementById('one');
let two= document.getElementById('two');
let output = document.getElementById('output');
let negoutput = document.getElementById('negoutput');

function clearCalc() {
    one.value="";
    two.value="";
    output.innerHTML='';
    negoutput.innerHTML='';
}

function doAdd(){
    let val = Number(one.value)+Number(two.value);
    if(val<0) {
        output.innerHTML="";
        negoutput.innerHTML=String(val);
    } else {
        negoutput.innerHTML="";
        output.innerHTML=String(val);
    }
}

function doSubtract(){
    let val = Number(one.value)-Number(two.value);
    if(val<0) {
        output.innerHTML="";
        negoutput.innerHTML=String(val);
    } else {
        negoutput.innerHTML="";
        output.innerHTML=String(val);
    }
}

function doMultiply(){
    let val = Number(one.value)*Number(two.value);
    if(val<0) {
        output.innerHTML="";
        negoutput.innerHTML=String(val);
    } else {
        negoutput.innerHTML="";
        output.innerHTML=String(val);
    }
}

function doDivision(){
    let val = Number(one.value)/Number(two.value);
    if(val<0) {
        output.innerHTML="";
        negoutput.innerHTML=String(val);
    } else {
        negoutput.innerHTML="";
        output.innerHTML=String(val);
    }
}

function doPower() {
    let val = 1;
    for(let i =0; i < Number(two.value); i++) {
        val*= Number(one.value);
    }

    if(val<0) {
        output.innerHTML="";
        negoutput.innerHTML=String(val);
    } else {
        negoutput.innerHTML="";
        output.innerHTML=String(val);
    }
}
