let skillA = "Web Development";
document.getElementById("skilla").innerHTML = skillA;

let skillB = "Language";
document.getElementById("skillb").innerHTML = skillB;

let skillC = "TBD";
document.getElementById("skillc").innerHTML = skillC;

let skillD = "TBD";
document.getElementById("skilld").innerHTML = skillD;

function ValidateEmail(inputText)
{
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}
