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