const quemSomos = document.querySelector('.quemSomos');
const missao = document.querySelector('.missao');
const objetivos = document.querySelector('.objetivo');
const excelencia = document.querySelector('.excelencia');
const colaboracao = document.querySelector('.colaboracao');
const transparencia = document.querySelector('.transparencia');
const inovacao = document.querySelector('.inovacao');
const cuidado = document.querySelector('.cuidado');

if(window.innerWidth >= 1200) {

    quemSomos.setAttribute('src', '../img/desktop/Quem somos_.png');
    missao.setAttribute('src', '../img/desktop/Missão.png');
    objetivos.setAttribute('src', '../img/desktop/Objetivos.png');
    excelencia.setAttribute('src', '../img/desktop/Excelência.png');
    colaboracao.setAttribute('src', '../img/desktop/Colaboração.png');
    transparencia.setAttribute('src', '../img/desktop/Transparencia.png')
    inovacao.setAttribute('src', '../img/desktop/Inovação.png');
    cuidado.setAttribute('src', '../img/desktop/Cuidado.png');

} else {
    quemSomos.setAttribute('src', '../img/mobile/Quem somos_.png');
    missao.setAttribute('src', '../img/mobile/Missão.png');
    objetivos.setAttribute('src', '../img/mobile/Objetivos.png');
    excelencia.setAttribute('src', '../img/mobile/Excelência.png');
    colaboracao.setAttribute('src', '../img/mobile/Colaboração.png');
    transparencia.setAttribute('src', '../img/mobile/Transparencia.png')
    inovacao.setAttribute('src', '../img/mobile/Inovação.png');
    cuidado.setAttribute('src', '../img/mobile/Cuidado.png');

}