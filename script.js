/* ================================================|| Loads immediately when website opens ||=================================================================== */

/* ========================|| For Profile Pic (dp) ||================================= */
var getphoto = document.querySelector('.dp');
var headerbg = document.querySelector('#header-image');
let i = 0;
var temp = setInterval(function(){
    switch(i){
        case 0:
            getphoto.style.boxShadow = '1px 1px 100px 5px gold';
            headerbg.style.boxShadow = '1px 1px 100px 5px purple';
            i++; break;
        case 1:
            getphoto.style.boxShadow = '1px 1px 100px 5px skyblue';
            headerbg.style.boxShadow = '1px 1px 100px 5px green';
            i++; break;
        case 2:
            getphoto.style.boxShadow = '1px 1px 100px 5px red';
            headerbg.style.boxShadow = '1px 1px 100px 5px pink';
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

