// ABRIR E FECHAR CONTEÚDOS
document.addEventListener('click', function(event) {

    const titulo = event.target.closest('.accordion .titulo');

    if (!titulo) return;

    const accordion = titulo.closest('.accordion');

    accordion.classList.toggle('aberto');
    accordion.classList.toggle('hover');

});