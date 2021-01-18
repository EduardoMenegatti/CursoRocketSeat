const modalOverlay = document.querySelector('.modal-overlay')
const menu = document.querySelectorAll('.cardR')

for(let card of menu){
    card.addEventListener("click", function(){
        const idR = card.getAttribute("id");
        const tituloR = card.getAttribute("card-info p.titulo")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `imagens/${idR}`
        modalOverlay.querySelector('p.titulo') = tituloR
        

    })
}

document.querySelector('.close-modal').addEventListener("click",
function(){
    modalOverlay.classList.remove('active')
})

