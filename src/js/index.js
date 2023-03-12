/* 
	OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar o elemento HTML dos botões

	- passo 2 - dar um jeito de identificar o clique do usuário no botão

	- passo 3 - desmarcar o botão selecionado anterior

	- passo 4 - marcar o botão clicado como se estivesse selecionada

	- passo 5 - esconder a imagem de fundo anterior

	- passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/
// passo 1 - dar um jeito de pegar o elemento HTML dos botões
const btnRotacao = document.querySelectorAll('.btn');
const imagens = document.querySelectorAll('.imagem');

// passo 2 - dar um jeito de identificar o clique do usuário no botão

btnRotacao.forEach((btn, indice) => {
    btn.addEventListener('click', () =>{
        // passo 3 - desmarcar o botão selecionado anterior  
        desativarBotaoSelecionado();
        // passo 4 - marcar o botão clicado como se estivesse selecionado
        selecioarBotao(btn);
        // passo 5 - esconder a imagem ativa de fundo
        sumirImagem();
        // passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        mostrarImagem(indice);
    })
})
function mostrarImagem(indice){
    imagens[indice].classList.add('ativa');
}

function selecioarBotao(btn){
    btn.classList.add('selecionado');
}

function desativarBotaoSelecionado(){

    const btnSelecionado = document.querySelector('.selecionado');
    btnSelecionado.classList.remove('selecionado');
}

function sumirImagem(){
    const imagemSumida = document.querySelector('.ativa');
    imagemSumida.classList.remove('ativa');
}

