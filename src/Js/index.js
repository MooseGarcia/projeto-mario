

const botaoTrailer = document.querySelector('.botao-trailer');
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkVideo = video.src;
const fecharModal = document.querySelector('.fechar-modal')

function alternarModal(){
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkVideo);
})

fecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});


