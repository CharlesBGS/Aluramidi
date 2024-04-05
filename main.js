alert('Bem vindo ao Alura Midi!')

function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < ListaDeTeclas.length) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    // Template String
    const idAudio = `#som_${instrumento}`;

    // console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador++;
    
    // console.log(contador);
}