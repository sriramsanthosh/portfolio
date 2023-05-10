// ================================================ Starters ===================================================================
var getphoto = document.querySelector('.dp');

var colors = ['gold', 'violet', 'green', 'red']

let i = 0;
var temp = setInterval(function(){
    switch(i){
        case 0:
            getphoto.style.boxShadow = '1px 1px 10px 5px gold';
            i++; break;
        case 1:
            getphoto.style.boxShadow = '1px 1px 10px 5px violet';
            i++; break;
        case 2:
            getphoto.style.boxShadow = '1px 1px 10px 5px lightcoral';
            i++; break;
        case 3:
            getphoto.style.boxShadow = '1px 1px 10px 5px lightgreen';
            i++; break;
        case 4:
            i = 0;
            getphoto.style.boxShadow = '1px 1px 10px 5px hotpink';
            break;
    }
}, 1000);

