let Validate=()=>{
    let UName = document.getElementById("name").value;
    let E_mail = document.getElementById("email").value;
    let Pass = document.getElementById("password").value;

    if (UName===''){
        // alert("Please Enter Your Name");
        document.getElementById("unMsg").innerHTML="pls Enter Name"
        document.getElementById("unMsg").style.backgroundColor="red"
    }
    else if (E_mail===''){
        // alert("Please Enter Your Email");
        document.getElementById("E-mail").innerHTML="pls Enter EMAIL"
        document.getElementById("E-mail").style.backgroundColor="red"
    }
        else if (Pass===''){
            // alert("Please Enter Your Password");
            document.getElementById("PASS").innerHTML="pls Enter Password"
            document.getElementById("PASS").style.backgroundColor="red"
            }
            else{
                alert("Registration Successfull");
                alert(JSON.stringify(UName,E_mail,Pass));
                }
return false;
}