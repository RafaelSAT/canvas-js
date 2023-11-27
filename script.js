let corAtual = 'black';

let tela = document.querySelector('#tela');
let contexto = tela.getContext('2d');

let podeDesenhar = false;

let mouseX = 0;
let mouseY = 0;

tela.addEventListener('mousedown', mouseDownEvent);
tela.addEventListener('mousemove', mouseMoveEvent);
tela.addEventListener('mouseup', mouseUpEvent);

document.querySelector('.clear').addEventListener('click', limparTela);

document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', escolherCor);
});

function escolherCor(e){
    let cor = e.target.getAttribute('data-color');
    corAtual = cor;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

function mouseDownEvent(e){
    podeDesenhar = true;
    mouseX = e.pageX - tela.offsetLeft;
    mouseY = e.pageY - tela.offsetTop;
}
function mouseMoveEvent(e){
    if(podeDesenhar){
        desenhar(e.pageX, e.pageY);
    }
}
function mouseUpEvent(){
    podeDesenhar = false;
}

function desenhar(x, y){
    let pointX = x - tela.offsetLeft;
    let pointY = y - tela.offsetTop;

    contexto.beginPath();
    contexto.lineWidth = 5;
    contexto.lineJoin = 'round';
    contexto.moveTo(mouseX, mouseY);
    contexto.lineTo(pointX, pointY);
    contexto.closePath();
    contexto.strokeStyle = corAtual;
    contexto.stroke();

    mouseX = pointX;
    mouseY = pointY;
}

function limparTela(){
    contexto.setTransform(1,0,0,1,0,0);
    contexto.clearRect(0,0,contexto.canvas.width, contexto.canvas.height);
}