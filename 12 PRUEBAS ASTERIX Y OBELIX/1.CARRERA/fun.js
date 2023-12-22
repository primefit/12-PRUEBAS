const runButton = document.querySelector('.run-btn button');
const progressBar = document.querySelector('.progress-bar__in');
const image = document.querySelector('.foto-asterix img');
const superada = document.querySelector('.superada');
const increment = 5;
let progressBarValue = 0;
let firstClick = true;

runButton.addEventListener('click',function(){
   
    if(firstClick) {
       
        const tiempo = setTimeout(() => {
        progressBarValue=0;
        progressBar.style.width = 0;
        window.clearTimeout(tiempo);
        firstClick = true
    }, 3000);
    }
    firstClick = false;
    progressBarValue += increment;

    if (progressBarValue >100) {
        success();
        return;
    }
    progressBar.style.width = progressBarValue +'%';
});

function success() {
    image.setAttribute('src', 'end.png');
    progressBar.style.width = '100%';
    superada.style.display= "flex";
}