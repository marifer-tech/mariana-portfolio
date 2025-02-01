// Exibe o modal ao carregar a página
window.onload = function() {
  const modal = document.getElementById('myModal');
  if (modal) {
    modal.style.display = 'flex';
  }
};

// Alterna o idioma do modal sem alterar o HTML
document.getElementById('toggleLanguage').addEventListener('click', function() {
  const modalTextPT = document.getElementById('modalText');
  const modalTextEN = document.getElementById('modalTextEn');

  if (modalTextPT.style.display === "none") {
    modalTextPT.style.display = "block";
    modalTextEN.style.display = "none";
    this.textContent = "English";
  } else {
    modalTextPT.style.display = "none";
    modalTextEN.style.display = "block";
    this.textContent = "Português";
  }
});

// Função para fechar o modal
document.getElementById('closeModal').addEventListener('click', function() {
  const modal = document.getElementById('myModal');
  if (modal) {
    modal.style.display = 'none';
  }
});
