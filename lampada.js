var lamp = window.document.getElementById('lampada')

function estaQuebrada(){
    return lamp.src.indexOf('lampadaQuebrada') > -1
}

function Ligar(){
    if(!estaQuebrada()){
    lamp.src = 'lampadaLigada.svg'}
}

function Desligar(){
    if(!estaQuebrada()){
    lamp.src = 'lampadaDesligada.svg'}
}

lamp.addEventListener('click', Quebrar)
function Quebrar(){
    lamp.src = 'lampadaQuebrada.svg'
    obs.innerHTML = `Você quebrou a lampada, renicie a página!`
}