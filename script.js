let etapas = [
    {
        titulo: 'VEREADOR',
        numeros: 5,
        candidato: [
            {
                numeros: 38111,
                nome: 'Fulano de Tal',
                partido: 'ABC',
                fotos: [
                    {url: '38111.png', legenda: 'Vereador', small: false}
                ]
            },
            {   
                numeros: 77222,
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
                numero: 99,
                nome: 'Ciclano',
                partido: 'ABC',
                vice: 'Cic',
                fotos: [
                    {url: '99.png', legenda: 'Prefeito'},
                    {url: '99_2.png', legenda: 'Vice-Prefeito', small: true}
                ]
            },
            {   
                numero: 84,
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
// let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0
let numero = ''

function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for(let i=0;i<etapa.numeros; i++) {
        numeroHtml += '<div class="numero"></div>';
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;

    console.log(etapas[etapaAtual]);
}

function atulizaInterface() {
    
}

function clicou(n) {
    alert("Clicou em " + n);
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