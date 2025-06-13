let cobra = [{x:19, y:9}];
let comida = gerarComida();
let direcao = 'DIREITA';
let velocidade = 150;
let pontos = 0;
let intervalo;

function iniciar() {
    criarTabuleiro()
    document.addEventListener('keydown', mudarDirecao);
    intervalo = setInterval(moverCobra, velocidade);
}

function criarTabuleiro() {
    const tabuleiro = document.getElementById('game-board');
    tabuleiro.innerHTML = '';

    cobra.forEach(segmento => {
        const elemento = document.createElement('div');
        elemento.style.gridRowStart = segmento.y;
        elemento.style.gridColumnStart = segmento.x;
        elemento.classList.add('snake');
        tabuleiro.appendChild(elemento);
        
    } );
}