const modalOverlay = document.querySelector(".modal-overlay");
const receita = document.querySelectorAll(".menu");

for(let imagem of receita){
    imagem.addEventListener("click",function(){
        const imagemID = imagem.getAttribute("id");
        modalOverlay.classList.add("active");
        //modalOverlay.querySelector("id").
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active");
});



