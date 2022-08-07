const btnFirst = document.getElementById('btn-first');
const btnSecond = document.getElementById('btn-second');

const inputFirst =  document.getElementById('input-first');
const inputSecond = document.getElementById('input-second');

const errorOne = document.getElementById('error-msg-first');
const errorTwo = document.getElementById('error-msg-second')

btnFirst.addEventListener('click',function() {

    const emailCheck=isValidEmail(inputFirst.value)
    if (!emailCheck) {
        inputFirst.setAttribute('state','error');
        errorOne.style.display = 'block' ;
        // btnFirst.style.marginTop ='1.5rem';
        btnFirst.setAttribute('state','error');
    } else {
        inputFirst.setAttribute('state','no-error');
        errorOne.style.display = 'none' ;
        // btnFirst.style.marginTop ='.8rem';
        btnFirst.setAttribute('state','no-error');
    }
})

btnSecond.addEventListener('click',function() {

    const emailCheck=isValidEmail(inputSecond);
    if (!emailCheck) {
        inputSecond.setAttribute('state','error');
        errorTwo.style.display = 'block' ;
        // btnSecond.style.marginTop ='1.5rem';
    } else {
        inputSecond.setAttribute('state','no-error');
        errorTwo.style.display = 'none' ;
        // btnSecond.style.marginTop ='1.5rem';
    }
})





function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }