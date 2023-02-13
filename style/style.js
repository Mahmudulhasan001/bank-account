document.getElementById('btn-submit').addEventListener("click",function(){
   
    const emailField= document.getElementById("email");
    const email =emailField.value;
   

    const passwordField=document.getElementById('password');
    const password =passwordField.value ;
    console.log (email,password);
    
    if (email === "mh@gmail.com" && password === "mahmudul"){
        window.location.href = "bank.html";

    }
    else{
        alert ("are you hacker ") ;
    }
})