const logregBox=document.querySelector('.logreg-box');
const loginLink=document.querySelector('.login-Link');
const RegisterLink=document.querySelector('.register-Link');

RegisterLink.addEventListener('click',() => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click',() => {
    logregBox.classList.remove('active');
});