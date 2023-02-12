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




document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit');
    const depositString = depositField.value ;
    const deposit = parseFloat(depositString );


    const depositTotalElement =document.getElementById("deposit-total") ;
    const preDepositTotalString=depositTotalElement.innerText;
    const preDepositTotal = parseFloat(preDepositTotalString);


    const depositTotal = deposit + preDepositTotal ;

    depositTotalElement.innerText=depositTotal;
    

    const balanceTotal = document.getElementById("balance-total")
    const perBalanceTotalString = balanceTotal.innerText ;
    const preBalanceTotal = parseFloat(perBalanceTotalString );

    const currentBalanceTotal = preBalanceTotal + deposit ;

    balanceTotal.innerText=currentBalanceTotal ;

   



    depositField.value = '';



})




document .getElementById ('btn-withdraw').addEventListener('click',function(){
    const withdrawField= document.getElementById('withdraw');
    const withdrawString = withdrawField.value;
    const withdraw =parseFloat(withdrawString);


     const withdrawTotal = document.getElementById("withdraw-total")
     const withdrawTotalString = withdrawTotal.innerText ;
     const withdrawBalance = parseFloat(withdrawTotalString);


     const currentBallance = withdraw + withdrawBalance ;
     withdrawTotal.innerText = currentBallance ;



     
    const balanceTotal = document.getElementById("balance-total")
    const perBalanceTotalString = balanceTotal.innerText ;
    const preBalanceTotal = parseFloat(perBalanceTotalString );

    const currentBalanceTotal = preBalanceTotal - currentBallance ;

    balanceTotal.innerText=currentBalanceTotal ;


     withdrawField.value ='';

     

})