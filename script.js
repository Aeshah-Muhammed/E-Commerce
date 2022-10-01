let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}
function decrement() {
    if (count > 0) {
        count -= 1
        countEl.textContent = count

    }
}
let barSolid = document.getElementById("bar-solid")
let sideSolid = document.getElementById("side-solid")
let closeSolid = document.getElementById("index-icon")

function navckick() {
 
barSolid.style.display = 'none'
sideSolid.style.display = 'block'
closeSolid.style.display = 'block'

}

function closenavckick() {
   closeSolid.style.display = 'none' 
barSolid.style.display = 'block'
sideSolid.style.display = 'none'
}
// contact 

 const subbnitBtn = document.querySelector('.submit');
 const username = document.querySelector(".text");
const mail = document.querySelector(".mail");
const message = document.querySelector(".message");
 const subject = document.querySelector(".subject");

const success = document.querySelector(".alert-success");
const danger = document.querySelector(".alert-danger");
const names = document.querySelector(".hide-names");
const mails = document.querySelector(".hide-mails");
const subjects = document.querySelector(".hide-subjects");
const messages = document.querySelector(".hide-messages");

function submitBtnfunction()  {
    if ( username.value === "" ) {
        names.style.display = 'block' 
        mails.style.display = 'none'
        messages.style.display = 'none'
        subject.style.display = 'none'
        success.style.display = 'none'
        timeout()
    } 
    else if (mail.value === "") {
        mails.style.display = 'block'
        names.style.display = 'none' 
        success.style.display = 'none' 
        messages.style.display = 'none'
        subject.style.display = 'none'
        timeout()
    } else if (message.value === "") {
        messages.style.display = 'block'
        mails.style.display = 'none'
        success.style.display = 'none' 
        names.style.display = 'none'
        subject.style.display = 'none'
        timeout()
    } else if (subject.value === "") {
        subjects.style.display = 'block'
        messages.style.display = 'none'
        mails.style.display = 'none'
        success.style.display = 'none' 
        names.style.display = 'none'
        timeout()
    } else {
        danger.style.display = 'none'
        success.style.display = 'block'
        mails.style.display = 'none'
        names.style.display = 'none' 
        messages.style.display = 'none'
       username.value = ''
        mail.value = ''
         message.value = ''
         subject.value = ''
        timeout()
    }
    
    
    }
   

 // remove alert 


 function timeout() {
    setTimeout(function(){
        success.style.display = 'none' 
        danger.style.display = 'none'
        mails.style.display = 'none'
        names.style.display = 'none'
        subjects.style.display = 'none' 
        messages.style.display = 'none'
        

    }, 3000 );
 }




