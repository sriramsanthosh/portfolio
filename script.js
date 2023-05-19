/* ================================================|| Loads immediately when website opens ||=================================================================== */

/* ========================|| For Profile Pic (dp) ||================================= */
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


// Hide and seek function of nav-bar for small screen devices
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