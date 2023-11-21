let schet=0;
let name=document.querySelector('#name');
let email=document.querySelector('#email');
let password=document.querySelector('#password');
names=/^[a-zA-Z]{1,20}$/;
emails=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
passwords=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
