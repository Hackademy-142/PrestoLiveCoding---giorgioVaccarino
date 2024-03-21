// EVETO SCROLL

let navbar = document.querySelector('.navbar')

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0){
        navbar.classList.add('nav-scrolled')
    } else {
        navbar.classList.remove('nav-scrolled')
    }
})

let numUsers = document.querySelector('#numUsers')
let numArticles = document.querySelector('#numArticles')
let numComments = document.querySelector('#numComments')



function createInterval(elementId, finalNumber, frequency){
    let counter = 0;
    let interval = setInterval(()=>{
        if(counter < finalNumber){
            counter++;
            elementId.innerHTML = counter;
        } else {
            clearInterval(interval);
        }
    }, frequency)
};

createInterval(numUsers, 500, 20)
createInterval(numArticles, 1000, 10)
createInterval(numComments, 200, 50)