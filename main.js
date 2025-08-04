const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [

    {
        enunciado: "Voçe pegou um avião que iria para a Colômbia porém desviou de sua rota e foi para o Peru, oque voçe faria?",
        alternativas: [
            {
                texto: "Voçe fica desesperado e vai até a policia.",
                afirmacao: "A policia conversa com a compania aéria e eles arranjam um novo vôo para voçe."
            },

            {
                texto: "Voçe aproveita que está ali e vai fazer algumas compras.",
                afirmacao: "Voçe perde o vôo."
            }
        ]
    },
    {
        enunciado: "Voçe está no Peru",
        alternativas: [
            {
                texto: "Remanejar o vôo para aproveitar e conhecer o país",
                afirmacao: "Voçe ficara no pais até o dia de sua volta."
            },

            {
                texto: "Voçe vai até o guiche da compania aéria e embarca no próximo vôo para Colômbia.",
                afirmacao: "Voçe fica esperando durante 4 horas seguidas. "
            }
        ]
    },

    {
        enunciado: "Aparece uma oportunidade para voçe ganhar muito dinheiro lá",
        alternativas: [
            {
                texto: "Voçe aceita porém, o trabalho é ilegal.",
                afirmacao: "Voçe aceitou o trabalho, e foi pego."
            },

            {
                texto: "Voçe aceita porém, o trabalho é ilegal",
                afirmacao: "Voçe aceitou o trabalho, e conseguiu passar pela segurança."
            }
        ]
    },

    {
        enunciado: "Voçe conseguiu sair",
        alternativas: [
            {
                texto: "Voçe pagou sua fiança.",
                afirmacao: "Voçe é deportado e liberto no Brasil novamente."
            },

            {
                texto: "Voçe voltou ao Brasil",
                afirmacao: "Voçe conseguiu passar pela segurança e concluiu a missão, agora voçe tem 10 mil reais e agora terá que limpa-lo."
            }
        ]
    }
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostreResultado();
        return;
    }
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    caixaAlternativas.textContent= ""
    mostraAlternativas();
}

function mostraAlternativas(){
    for( const alternativa of perguntaAtual.alternativas ){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " "
    atual++
    mostraPergunta();
}

function mostreResultado(){
    caixaPerguntas.textContent = " Tudo começou... ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

console.log(perguntas)