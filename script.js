// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");


const frases = [
  "A persistência é o caminho do êxito.",
  "A vida é 10% o que acontece e 90% como você reage.",
  "O sucesso nasce do querer, da determinação e da persistência.",
  "Só erra quem tenta.",
  "Acredite em si mesmo e vá em frente."
];

const changeFrase = document.getElementById("btn-mudar-frases");
const frasesClass = document.getElementsByClassName("mensagem2");



// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

changeFrase.addEventListener("click", function () {

  for (let index = 0; index < 3; index++) {
    
    frasesClass[index].textContent = frases[index];
    
  }
  
  
});
