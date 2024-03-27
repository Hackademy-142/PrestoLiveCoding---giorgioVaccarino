// EVETO SCROLL

let navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('nav-scrolled')
    } else {
        navbar.classList.remove('nav-scrolled')
    }
})


fetch("./annunci.JSON").then( (response)=>response.json() ).then( (data)=>{
    
    let articlesWrapper = document.querySelector("#articlesWrapper");

    function createCards(array){
        articlesWrapper.innerHTML = '';
        array.forEach( (articolo, i) => {
            let col = document.createElement("div");
            col.classList.add("col-11", "col-md-3", "my-3", "mx-1");
            col.innerHTML = `
                                    <div class="card podition-relative h-100">
                                    <div class="overflow-hidden ">
                                        <img src="https://picsum.photos/20${i}" class="card-img-top img-card" alt="...">
                                    </div>
                                    <div class="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <h3 class="card-title text-center fw-bold mb-3 text-truncate">${articolo.nome}</h3>
                                        <p class="card-text">Categoria: <span class="fs-4">${articolo.categoria}</span></p>
                                        <p class="card-text">Prezzo: <span class="fs-4">${articolo.prezzo}</span></p>
                                    </div>    
                                        <div class="d-flex justify-content-between">
                                            <i class="bi bi-heart fs-3"></i>
                                            <a href="#" class="btn btn-danger">compra</a>
                                        </div>
                                    </div>
                                    </div>
                            `
            articlesWrapper.appendChild(col)
        });
    };
    createCards(data);

    let radioWrapper = document.querySelector("#radioWrapper");

    function setCategories(){
        let categories = data.map((el)=>el.categoria);
        let uniqueCategories = [];
        categories.forEach(category=> {
            if(!uniqueCategories.includes(category)){
                uniqueCategories.push(category);
            };
        });

        uniqueCategories.sort().forEach((categoria)=>{
            let div = document.createElement("div");
            div.classList.add("form-check");
            div.innerHTML = `
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="${categoria}">
                                <label class="form-check-label" for="flexRadioDefault1">
                                ${categoria}
                                </label>
                            `
            radioWrapper.appendChild(div);
        })
    };
    setCategories();

    let checksInput = document.querySelectorAll(".form-check-input");

    function filterByCategory(){
        let radioButtons = Array.from(checksInput);
        let checked = radioButtons.find(el=>el.checked);
        if(checked.id == "all"){
            createCards(data)
        }else{
            let filtered = data.filter(el=>el.categoria == checked.id );
            createCards(filtered);
        }       
    };
    

    checksInput.forEach((input)=>{
        input.addEventListener("click", ()=>{
            filterByCategory();
        });
    })
    


} )