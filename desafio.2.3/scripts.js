const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modalWin = document.querySelectorAll('.modal')

for (let card of cards) {
    
    card.addEventListener("click", function () {
        const idBlog = card.getAttribute("id");
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("iframe").src =`https://blog.rocketseat.com.br/${idBlog}`;
        modalOverlay.classList.contains('maximize');
    })
}

document.querySelector('.close-modal').addEventListener("click",
function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src =" ";
})

