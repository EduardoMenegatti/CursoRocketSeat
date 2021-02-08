const modalOverlay = document.querySelector('.modal_overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    const videoID = card.getAttribute("id");
    card.addEventListener("click", function () {
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoID}`;
    })
}

document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src = " ";

})

