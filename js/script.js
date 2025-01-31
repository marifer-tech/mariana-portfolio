// Animações de rolagem para os cards
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
  
    function checkScroll() {
      const triggerBottom = window.innerHeight * 0.8;
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
          card.classList.add("show");
        } else {
          card.classList.remove("show");
        }
      });
    }
  
    window.addEventListener("scroll", checkScroll);
    // Verifica ao carregar a página
    checkScroll();
  });
  
  // Criação do gráfico com Chart.js
  const ctx = document.getElementById('totalHoursChart').getContext('2d');
  const totalHours = 6.5 + 39 + 112.5 + 217.5 + 52 + 38.5 + 20; // Soma das horas
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [''],
      datasets: [{
        label: 'Horas de Certificação: ' + totalHours,
        data: [totalHours],
        backgroundColor: ['#7f00ff'],
        borderColor: '#fff',
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y', // Gráfico horizontal
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Total de horas de certificação'
          },
          beginAtZero: true
        },
        y: {
          title: {
            display: true,
            text: ''
          }
        }
      },
      plugins: {
        legend: {
          display: true
        }
      }
    }
  });
  
  // Função para reproduzir áudio (caso haja um elemento com id "audio-player")
  function playAudio(audioSrc) {
    const audioPlayer = document.getElementById('audio-player');
    
    if (audioPlayer.src !== location.origin + '/' + audioSrc) {
      // Define a nova fonte de áudio e inicia a reprodução
      audioPlayer.src = audioSrc;
      audioPlayer.play();
    } else {
      // Alterna entre reproduzir e pausar
      if (audioPlayer.paused) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
    }
  }
  
 
  
 
  