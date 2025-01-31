 // Exibe o modal ao carregar a página
 window.onload = function() {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'flex';
    }
  };
  
  // Alterna o idioma do texto do modal (este toggle atua apenas no modal)
  document.getElementById('toggleLanguage').addEventListener('click', function() {
    const modalText = document.getElementById('modalText');
    if (modalText.innerText.includes("Este repositório")) {
      modalText.innerHTML = "<p style='font-style: italic;'>This repository showcases my professional and academic experiences that have shaped my journey. Each experience highlights the knowledge, skills, and challenges I’ve encountered and overcome.</p>";
      this.textContent = "Português";
    } else {
      modalText.innerHTML = "<p style='font-weight: bold;'>Este repositório apresenta as experiências profissionais e acadêmicas que marcaram minha trajetória. Cada experiência reflete meu aprendizado, habilidades adquiridas e desafios superados.</p>";
      this.textContent = "English";
    }
  });
  
  // Função para fechar o modal
  document.getElementById('closeModal').addEventListener('click', function() {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'none';
    }
  });