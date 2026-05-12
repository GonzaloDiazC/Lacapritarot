document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    
    // Si usas el sistema de modal:
    document.querySelectorAll(".ritual-card").forEach(card => {
        card.addEventListener("click", () => {
            const titulo = card.querySelector("h4").innerText;
            const precio = card.querySelector(".price").innerText;
            
            // Aquí puedes disparar un modal o redirigir directamente a WA con el texto:
            const mensaje = `Hola! Me interesa el ritual de ${titulo} que vi en la web.`;
            window.open(`https://wa.me/5493813462047?text=${encodeURIComponent(mensaje)}`, '_blank');
        });
    });
});
