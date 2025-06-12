const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas:[ 
        "Alternativa 01",
        "Alternativa 02"
         ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas:[ 
        "Alternativa 03",
        "Alternativa 04"
         ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas:[ 
        "Alternativa 05",
        "Alternativa 06"
         ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas:[ 
        "Alternativa 07",
        "Alternativa 08"
         ]
    }
]

let atual= 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
}

mostraPergunta();

console.log(caixaPrincipal)