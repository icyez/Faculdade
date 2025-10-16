// --- LÓGICA DA CALCULADORA ---

function somar() {
  const n1 = document.getElementById("n1").value;
  const n2 = document.getElementById("n2").value;
  const soma = Number(n1) + Number(n2);
  document.getElementById("resultado").innerText =
    "Você tem " + soma + " gatinhos!";
}

function subtrair() {
  const n1 = document.getElementById("n1").value;
  const n2 = document.getElementById("n2").value;
  const subtracao = Number(n1) - Number(n2);
  document.getElementById("resultado").innerText =
    "Você tem " + subtracao + " gatinhos!";
}

function multiplicar() {
  const n1 = document.getElementById("n1").value;
  const n2 = document.getElementById("n2").value;
  const multiplicacao = Number(n1) * Number(n2);
  document.getElementById("resultado").innerText =
    "Você tem " + multiplicacao + " gatinhos!";
}

function dividir() {
  const n1 = document.getElementById("n1").value;
  const n2 = document.getElementById("n2").value;
  if (Number(n2) === 0) {
    document.getElementById("resultado").innerText =
      "Não se pode dividir por zero gatinhos!";
    return;
  }
  const divisao = Number(n1) / Number(n2);
  document.getElementById("resultado").innerText =
    "Você tem " + divisao + " gatinhos!";
}

// --- LÓGICA DO TEMA ESCURO ---

const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Função para aplicar o tema salvo e mudar o ícone
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark-mode") {
    body.classList.add("dark-mode");
    themeToggleButton.innerText = "☀️"; // Sol no modo escuro
  } else {
    themeToggleButton.innerText = "🌙"; // Lua no modo claro
  }
}

// Função para alternar o tema, salvar e mudar o ícone
function toggleTheme() {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
    themeToggleButton.innerText = "☀️"; // Mudar para sol
  } else {
    localStorage.removeItem("theme");
    themeToggleButton.innerText = "🌙"; // Mudar para lua
  }
}

// Adiciona o evento de clique ao botão
themeToggleButton.addEventListener("click", toggleTheme);

// Aplica o tema salvo assim que a página é carregada
document.addEventListener("DOMContentLoaded", applySavedTheme);
