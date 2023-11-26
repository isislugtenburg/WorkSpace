Skip to content
Annalldc
/
WorkSpace

Type / to search

Code
Issues
Pull requests
Actions
Projects
Security
Insights
BreadcrumbsWorkSpace/JavaScript/Aula12-DOM-Parte2/ExercicioCasa
/main.js
Go to file
t
Latest commit
Annalldc
Annalldc
Add
4c36fcb
 · 
2 weeks ago
History
BreadcrumbsWorkSpace/JavaScript/Aula12-DOM-Parte2/ExercicioCasa
/main.js
File metadata and controls

Code

Blame
50 lines (40 loc) · 1.42 KB
function adicionarImagem() {
    // Criação da imagem
    const imagem = document.createElement("img");
    imagem.src = "img/umbrella.png";
  
    // imagem
    document.body.appendChild(imagem);
  
    // -cor de fundo -
    document.body.style.backgroundColor = "#262525";
  
    const botao = document.getElementById("B_01");
    botao.style.border = "2px solid #D9BC66";
    botao.style.padding = "0.5rem";
    botao.style.backgroundColor = "#BFBFBF";
    botao.style.margin = "0.7rem";
  }
  
  function solicitarNome() {
    // prompt
    const nome = prompt("Digite seu nome:");
  
    //  usuário clicou em OK
    if (nome !== null) {
      const mensagem = document.createElement("p");
      mensagem.textContent = `Olá ${nome}, bem-vindo à nossa academia`;
  
      // Inserção da mensagem
      document.body.appendChild(mensagem);
    }
  }
  
  function exibirTabuada() {
    // Solicitação do número via prompt
    const numero = prompt("Digite um número para ver a tabuada:");
  
    // Verifica se o usuário clicou em OK e exibe a tabuada
    if (numero !== null) {
      const resultado = document.createElement("p");
      resultado.textContent = `Tabuada do ${numero}:\n`;
  
      for (let i = 1; i <= 10; i++) {
        const linha = `${numero} x ${i} = ${numero * i}\n`;
        resultado.textContent += linha;
      }
  
      // Inserção da tabuada abaixo do botão
      document.body.appendChild(resultado);
    }
  }
WorkSpace/JavaScript/Aula12-DOM-Parte2/ExercicioCasa/main.js at main · Annalldc/WorkSpace
