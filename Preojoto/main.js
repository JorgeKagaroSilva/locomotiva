function tocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    console.log(idAudio);

    tecla.onclick = function () {
        tocaSomPom('#som_tecla_pom');
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');  
        }
  
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}