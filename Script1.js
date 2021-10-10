let Username=document.getElementById("txtUserName");
let email=document.getElementById("txtEmail");
let pwd=document.getElementById("txtPwd");
let conPwd=document.getElementById("txtConPwd");
let form=document.querySelector("form");

function vaildateInput(){
 // chech if username is empty

 if(Username.value.trim()==="")
 {
      error(Username,"User Name cannot be empty");
 }
 else
 {
   sucessfull(Username);
 }
 if(email.value.trim()==="")
 {
    error(email,"email cannot be empty");
 }
 
 else{
      if(!isValidEmail(email.value.trim()))
     {
       error(email,"email not  valid");
     }
     else
     {
      sucessfull(email);
     }
   }

   // password

   if(pwd.value.trim()==="")
 {
      error(pwd,"password cannot be empty");
 }
 else
 {
   sucessfull(pwd);
 }
 if(conPwd.value.trim()==="")
 {
      error(conPwd,"password cannot be empty");
 }
 else
 if(pwd.value.trim()!==conPwd.value.trim())
 {
   error(conPwd,"password donot match");
 }
   else{
   sucessfull(conPwd);
   }
 
}
document.querySelector("button").addEventListener
("click",(event)=>{
event.preventDefault();
vaildateInput();



});

function sucessfull(input)
{
   let parent=input.parentElement;
   let messageEle= parent.querySelector("small");
   messageEle.style.visibility ="hidden";
   parent.classList.add("success");
   parent.classList.remove("error");
  
}
function error(input,message)
{
   let parent=input.parentElement;
   let messageEle= parent.querySelector("small");
   messageEle.style.visibility ="visible";
   messageEle.innerText =message;
    parent.classList.add("error");
   parent.classList.remove("success");
}

function isValidEmail(emailtext)
{
var regularExpression = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))){2,6}$/i;
  return regularExpression.test(emailtext);
}