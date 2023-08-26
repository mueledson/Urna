let etapas = [
    {
        titulo: 'VEREADOR',
        numeros: 5,
        candidatos: [
            {
                numeros: '38111',
                nome: 'Fulano de Tal',
                partido: 'ABC',
                fotos: [
                    {url: '38111.png', legenda: 'Vereador', small: false}
                ]
            },
            {   
                numeros: '77222',
                nome: 'Beltrana da Silva',
                partido: 'DEFG',
                fotos: [
                    {url: '77222.png', legenda: 'Vereador'}
                ]
            },
        ]
    },
    {
        titulo: 'PREFEITO',
        numeros: 2,
        candidatos: [
            {
                numero: '99',
                nome: 'Ciclano',
                partido: 'ABC',
                vice: 'Cic',
                fotos: [
                    {url: '99.png', legenda: 'Prefeito'},
                    {url: '99_2.png', legenda: 'Vice-Prefeito', small: true}
                ]
            },
            {   
                numero: '84',
                nome: 'Zulano',
                partido: 'QWERTY',
                vice: 'Zul',
                fotos: [
                    {url: '84.png', legenda: 'Prefeito'},
                    {url: '84_2.png', legenda: 'Vice-Prefeito', small: true}    
                ]
            },
        ]
    }
]

let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.tela .d-1 .d-1-right')
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0
let numero = ''

function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for(let i=0;i<etapa.numeros; i++) {
        if (i === 0) {
            numeroHtml += '<div class="numero pisca"></div>';            
        }else{
            numeroHtml += '<div class="numero"></div>';   
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atulizaInterface() {
    let etapa = etapas[etapaAtual]
    let candidato = etapa.candidatos.filter((item)=>{
        if (item.numero === numero) {
            return true
        } else {
            return false
        }
    })
    if (candidato.length > 0) {
        candidato = candidato[0]
        seuVotoPara.style.display = 'flex'
        aviso.style.display = 'flex'
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`
        
        let fotosHtml = ''
        for (let i in candidato.fotos) {
            fotosHtml.innerHTML += `<div class='d-1-image'> <img src='images/${etapas.candidatos.fotos[i].url}' /> ${etapas.candidatos.fotos[i].legenda} </div>`
        }

        lateral.innerHTML = fotosHtml
    }
}

function clicou(n) {
   let elNumero = document.querySelector('.numero.pisca')
   if (elNumero !== null) {
        elNumero.innerHTML = n
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca')
        if (elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca')   
        } else {
            atulizaInterface()
        }
   }
}
function branco() {
    alert("Clicou em BRANCO");
}
function corrige() {
    alert("Clicou em CORRIGE");
}
function confirma() {
    alert("Clicou em CONFIRMA");
}

comecarEtapa();