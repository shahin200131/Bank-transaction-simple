document.getElementById('btn-submit').addEventListener('click',function(){
    const email = document.getElementById('email-text');
    const password = document.getElementById('password-text');
    const emailTxt = email.value;
    const passwordTxt =password.value;
    if(emailTxt === 'shahin@gmail.com' && passwordTxt === '200131')
    {
        window.location.href = 'bankHistory.html'
    }
    else
    {
        alert('invalid email and password');
    }
});

//deposit button operation
document.getElementById('deposit-btn').addEventListener('click',function(){
    const inputDeposit = document.getElementById('input-deposit');
    const depositAmount = inputDeposit.value;
    const deposit = document.getElementById('deposit');
    console.log('deposit clicked');
});
// withdraw button operation
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const inputwithdraw = document.getElementById('input-withdraw');
    const withdrawAmount = inputDeposit.value;
    const withdraw = document.getElementById('withdraw');
    console.log('clicked withdraw button');
});