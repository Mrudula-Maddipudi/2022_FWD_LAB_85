let button=document.getElementById(btn)
let uname=document.getElementsByName(uname)
let pass=document.getElementsById(pwd)
let email=document.getElementsById(email)
let phonenumber=document.getElementsById(phno)
function validateForm() {
    if ((uname.value == "") && (pwd.value=="") && (email.value=="") && (phno.value=="")) {
      alert("Enter some data");
      return false;
    }
}
