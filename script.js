const develop = document.getElementById('develop');
const texto = 'Full Stack Web Developer';
let index = 0;

setInterval(()=>{
    index++;
    develop.textContent = texto.slice(0, index);
    if(index === texto.length){
        index = 0;
    }
}, 100)