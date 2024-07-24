document.addEventListener('DOMContentLoaded', () => {
    const teclas = document.querySelectorAll('.tecla');

    teclas.forEach(tecla => {
        tecla.addEventListener('click', () => {
            const sonido = document.querySelector(`#sonido_${tecla.dataset.sound}`);
            if (sonido) {
                sonido.currentTime = 0; // Reinicia el tiempo del audio
                sonido.play(); // Reproduce el sonido
            }
        });

        tecla.addEventListener('keydown', (evento) => {
            if (evento.code === 'Space' || evento.code === 'Enter') {
                tecla.classList.add('activa');
            }
        });

        tecla.addEventListener('keyup', () => {
            tecla.classList.remove('activa');
        });
    });
});
