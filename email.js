function ValidateEmail( InputText)
{
    var mail  = document.getElementById("email").value;

var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(InputText.value.match(mail)){
    alert("correct");
    document.form1.text1.focus();
    return true;
}else{
    alert("wrong");
    document.form1.text1.focus();
    return false;
}
}