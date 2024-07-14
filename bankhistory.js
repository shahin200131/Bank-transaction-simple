//deposit button operation
document.getElementById('deposit-btn').addEventListener('click',function(){
    const inputDeposit = document.getElementById('input-deposit');
    const depositAmount = inputDeposit.value;
    const deposit = document.getElementById('deposit');
    const previousDepositTotal = deposit.innerText;
    const currentMoney = document.getElementById('current-money');
    const currentAmount = currentMoney.innerText;
    deposit.innerText = parseFloat(previousDepositTotal) + parseFloat(depositAmount);
    currentMoney.innerText = parseFloat(currentAmount) + parseFloat(depositAmount);
    inputDeposit.value = '';
});
// withdraw button operation
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const inputwithdraw = document.getElementById('input-withdraw');
    const withdrawAmount = inputwithdraw.value;
    const withdraw = document.getElementById('withdraw');
    const previousWithdrawTotal = withdraw.innerText;
    const currentMoney = document.getElementById('current-money');
    const currentAmount = currentMoney.innerText;
    withdraw.innerText = parseFloat(previousWithdrawTotal) + parseFloat(withdrawAmount);
    currentMoney.innerText = parseFloat(currentAmount) - parseFloat(withdrawAmount);


    inputwithdraw.value = '';
});