// EVETO SCROLL

let navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('nav-scrolled')
    } else {
        navbar.classList.remove('nav-scrolled')
    }
})

let numUsers = document.querySelector('#numUsers')
let numArticles = document.querySelector('#numArticles')
let numComments = document.querySelector('#numComments')



function createInterval(elementId, finalNumber, frequency) {
    let counter = 0;
    let interval = setInterval(() => {
        if (counter < finalNumber) {
            counter++;
            elementId.innerHTML = counter;
        } else {
            clearInterval(interval);
        }
    }, frequency)
};

let isIntersected = false;


const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((enrty) => {
        if (enrty.isIntersecting && !isIntersected) {
            createInterval(numUsers, 1000, 10);
            createInterval(numArticles, 500, 20);
            createInterval(numComments, 200, 50);
            isIntersected = true;
            setTimeout(() => {
                isIntersected = false;
            }, 10000);
        }
    })
})

intersectionObserver.observe(numArticles)


let announcements = [
    { name: "Katana di Hattori Hanzo", categoria: "Accessori", prezzo: 500, img: "https://picsum.photos/200" },
    { name: "Vaso Ming", categoria: "Arredamento", prezzo: 700, img: "https://picsum.photos/201" },
    { name: "Statua di terracotta", categoria: "Arredamento", prezzo: 650, img: "https://picsum.photos/202" },
    { name: "Quadro di Buddha", categoria: "Arredamento", prezzo: 350, img: "https://picsum.photos/203" },
    { name: "Guqin", categoria: "Musica", prezzo: 1000, img: "https://picsum.photos/204" },
];

let cardsWrapper = document.querySelector("#cardsWrapper");

announcements.forEach((annuncio, i) => {
    if (i >= announcements.length - 3) {
        let col = document.createElement("div");
        col.classList.add("col-11", "col-md-3");
        col.innerHTML = `
                        <div class="card podition-relative h-100">
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger z-2">
                            new
                        </span>
                        <div class="overflow-hidden ">
                            <img src=${annuncio.img} class="card-img-top img-card" alt="...">
                        </div>
                        <div class="card-body d-flex flex-column justify-content-between">
                        <div>
                            <h3 class="card-title text-center fw-bold mb-3 text-truncate">${annuncio.name}</h3>
                            <p class="card-text">Categoria: <span class="fs-4">${annuncio.categoria}</span></p>
                            <p class="card-text">Prezzo: <span class="fs-4">${annuncio.prezzo}</span></p>
                        </div>    
                            <div class="d-flex justify-content-between">
                                <i class="bi bi-heart fs-3"></i>
                                <a href="#" class="btn btn-danger">compra</a>
                            </div>
                        </div>
                        </div>
                `
        cardsWrapper.appendChild(col)
    }
})