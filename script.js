var getphoto = document.querySelector('.dp');
var headerbg = document.querySelector('#header-image');
let i = 0;
getphoto.style.transition = '0.9s';
headerbg.style.transition = '0.9s';

var temp = setInterval(function(){
    switch(i){
        case 0:
            getphoto.style.boxShadow = '1px 1px 100px 5px gold';
            headerbg.style.boxShadow = '1px 1px 100px 5px purple';
            i++; break;
            case 1:
                getphoto.style.boxShadow = '1px 1px 100px 5px white';
                headerbg.style.boxShadow = '1px 1px 100px 5px green';
                i++; break;
            case 2:
                getphoto.style.boxShadow = '1px 1px 100px 5px aqua';
                headerbg.style.boxShadow = '1px 1px 100px 5px gold';
                i++; break;
            case 3:
                getphoto.style.boxShadow = '1px 1px 100px 5px green';
                headerbg.style.boxShadow = '1px 1px 100px 5px violet';
                i++; break;
            case 4:
                i = 0;
                getphoto.style.boxShadow = '1px 1px 100px 5px pink';
                headerbg.style.boxShadow = '1px 1px 100px 5px orange';
            break;
    }
}, 800);


var flag = false;
var temp3 = document.querySelector('.nav-list');
var temp4 = document.querySelectorAll('.nav-link');
for(let k = 0; k<temp4.length; k++){
    temp4[k].addEventListener('click', function(){
        if(flag){
            temp3.style.left = '-100%';
        }
        else{
            temp3.style.left = '0';
        }
        flag = !flag;
    });
}



var skillContainer = document.querySelector("#skills");
var educationContainer = document.querySelector("#education");

var animationDone = false;


var progressBars = document.querySelectorAll(".progress-bar");


window.addEventListener('scroll', function(){
    checkScroll();
});




function fillBars(){

    for(let bars of progressBars){
        let targetWidth = bars.getAttribute('container-width');
        let currentWidth  = 0;
        let interval = setInterval(() => {
            if(currentWidth> targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bars.style.width = currentWidth+'%';
        }, 10);
    }
}
let educationHeight = educationContainer.getBoundingClientRect().y;
let skillHeight = skillContainer.getBoundingClientRect().y;

function checkScroll(){
    if(!animationDone && skillHeight < window.scrollY){
        animationDone = true;
        fillBars();
    }
    if(animationDone && skillHeight>window.scrollY){
        animationDone = false;
    }
}


// g tag
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-0FHG91R1PY');

// 

const firebaseConfig = {
    apiKey: "AIzaSyCFAEuV9cG_O3uVCRJExIUk7wJZSoYGrIE",
    authDomain: "sriram-site.firebaseapp.com",
    databaseURL: "https://sriram-site-default-rtdb.firebaseio.com",
    projectId: "sriram-site",
    storageBucket: "sriram-site.appspot.com",
    messagingSenderId: "168607893293",
    appId: "1:168607893293:web:ff86bc5c8fceaaf2b535a4",
    measurementId: "G-0FHG91R1PY"
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");

document.querySelector('.input-form').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var msgcontent = document.querySelector('#message').value;
    let date = new Date().toJSON();
    saveContent(name, email, msgcontent, date);
    window.alert("Thank you!! We will get back to you soon!");
}

const saveContent = (name, email, msgcontent, currentDate)=>{
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name : name,
        email : email,
        msgcontent : msgcontent,
        date : currentDate
    });
}