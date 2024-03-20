let title = document.querySelector('#title')

let giphyEmbed = document.querySelectorAll('#giphy-embed')

// EVENTO SCROLL

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0){
        title.classList.remove('gigaTitle')
        giphyEmbed.forEach((el)=>{
            el.classList.add('d-md-block')
        })
    } else {
        title.classList.add('gigaTitle')
        giphyEmbed.forEach((el)=>{
            el.classList.remove('d-md-block')
        })
    }
})