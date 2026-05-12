const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrarModal");

document.querySelectorAll(".ritual-card").forEach(card=>{
    card.addEventListener("click",()=>{
        document.getElementById("modalTitulo").innerText =
        card.querySelector("h3").innerText;

        document.getElementById("modalPrecio").innerText =
        card.querySelector("p").innerText;

        document.getElementById("modalTexto").innerHTML =
        "Consultá por WhatsApp para recibir toda la información completa sobre este ritual.";

        modal.classList.add("active");
    });
});

cerrarModal.addEventListener("click",()=>{
    modal.classList.remove("active");
});

modal.addEventListener("click",(e)=>{
    if(e.target === modal){
        modal.classList.remove("active");
    }
});
