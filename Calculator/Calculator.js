var scr = document.getElementById("scr");
scr="";
var str;

function calc(value){
    str=value
    scr=scr+str;
    document.getElementById("scr").innerHTML=scr;
    
}

function answer(){
    var result=eval(scr);
    document.getElementById("scr").innerHTML=result;
}

function clearscr(){
    str="";
    scr="";
    document.getElementById("scr").innerHTML="";
}

function delscr(){
    var t=scr.length;
    
    scr=scr.substring(0,t-1);
    
    document.getElementById("scr").innerHTML=scr;
}

function percentscr(){
    var t = scr.indexOf("/");

    if(t!=-1)
    {
        var result=(eval(scr))*100;
        document.getElementById("scr").innerHTML=result;
        scr="";
    }
    else
    {
        document.getElementById("scr").innerHTML="Error";
        scr="";
    }
}