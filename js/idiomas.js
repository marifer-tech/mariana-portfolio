 // Alterna o idioma dos cards
 document.getElementById('toggleCardsLanguage').addEventListener('click', function() {
    // Seleciona todos os elementos de texto dos cards
    const textsPT = document.querySelectorAll('.card .pt');
    const textsEN = document.querySelectorAll('.card .en');
    
    // Verifica se os textos em português estão visíveis (display diferente de "none")
    const ptVisible = window.getComputedStyle(textsPT[0]).display !== 'none';
    
    if (ptVisible) {
      // Oculta o português e exibe o inglês
      textsPT.forEach(el => el.style.display = 'none');
      textsEN.forEach(el => el.style.display = 'block');
      this.textContent = 'Português';
    } else {
      // Exibe o português e oculta o inglês
      textsPT.forEach(el => el.style.display = 'block');
      textsEN.forEach(el => el.style.display = 'none');
      this.textContent = 'English';
    }
  });