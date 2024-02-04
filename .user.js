// ==UserScript==
// @name         Criar Div com Position Absolute
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Cria uma nova div com position absolute e a adiciona ao corpo da página
// @author       You
// @match        https://entregas.mottu.cloud/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Crie um elemento div externa
    var novaDiv = document.createElement('div');

    // Defina a posição para absolute
    novaDiv.style.position = 'absolute';
    novaDiv.style.top = '0';
    novaDiv.style.width = '40%';
    novaDiv.style.backgroundColor = '#fff';
    novaDiv.style.borderBottom = '1px solid #cacaca';
    novaDiv.style.gap = '10px';
    novaDiv.style.height = '64px';
    novaDiv.style.justifyContent = 'space-between';
    novaDiv.style.padding = '0 24px';
    novaDiv.style.maxWidth = '100%';
    novaDiv.style.zIndex = '9999';
    novaDiv.style.marginLeft = '80px';

    // Adicione classes, atributos ou conteúdo à div externa se necessário
    novaDiv.className = 'minha-nova-div';

    // Crie uma imagem para o ícone padrão
    var minhaImagem = document.createElement('img');
    minhaImagem.src = 'https://mottu-entregas-imagens.s3.sa-east-1.amazonaws.com/icones-header/dynamics-default.svg';
    minhaImagem.alt = 'Ícone Padrão';
    minhaImagem.style.position = 'absolute';
    minhaImagem.style.transform = 'translate(-50%, -50%)';
    minhaImagem.style.top = '50%';
    minhaImagem.style.left = '47.97px';
    novaDiv.appendChild(minhaImagem);

    // Crie uma imagem para o saldo
    var saldoImagem = document.createElement('img');
    saldoImagem.src = 'https://github.com/biodental/imagembio/blob/main/sack-dollar.png?raw=true';
    saldoImagem.style.position = 'absolute';
    saldoImagem.style.transform = 'translate(-50%, -50%)';
    saldoImagem.style.top = '50%';
    saldoImagem.style.left = '100px';
    saldoImagem.style.width = '18.01px';
    saldoImagem.style.height = '18.75px';
    novaDiv.appendChild(saldoImagem);

    // Crie um parágrafo para o saldo
    var saldo = document.createElement('p');
    saldo.textContent = 'R$ 2.216,00';
    saldo.style.position = 'absolute';
    saldo.style.top="40%";
    saldo.style.fontSize="14px";
    saldo.style.fontWeight="900";
    saldo.style.color="#00b131";
    saldo.style.fontFamily="arial";
    saldo.style.left = '125px';
    novaDiv.appendChild(saldo);
    //
    var divlateral = document.createElement('div');

    // Defina a posição para absolute
    divlateral.style.position = 'absolute';
    divlateral.style.left="0";
    divlateral.style.top = '120.97px';
    divlateral.style.width="80px";
    divlateral.style.height="80px";
    divlateral.style.zIndex = '9999';
    //divlateral.style.backgroundColor="blue";
    document.body.appendChild(divlateral);
    //
    var divlateral1 = document.createElement('div');

    // Defina a posição para absolute
    divlateral1.style.position = 'absolute';
    divlateral1.style.left="0";
    divlateral1.style.top = '320px';
    divlateral1.style.width="80px";
    divlateral1.style.height="80px";
    divlateral1.style.zIndex = '9999';
    //divlateral1.style.backgroundColor="blue";
    document.body.appendChild(divlateral1);
    // Adicione a nova div ao corpo do documento
    document.body.appendChild(novaDiv);
})();
