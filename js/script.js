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
  
  // Criação do gráfico
  document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('totalHoursChart').getContext('2d');

    // Definição dos cursos e suas respectivas horas
    const courses = [
        { name: "Oratória e Comunicação", hours: 6.5 },
        { name: "IA Generativa com Copilot", hours: 39 },
        { name: "Frontend (HTML, CSS, JS)", hours: 112.5 },
        { name: "Pacote Office + Power BI", hours: 217.5 },
        { name: "Bancos de Dados SQL e NoSQL", hours: 52 },
        { name: "Curso Completo de JavaScript", hours: 38.5 },
        { name: "Banco de Dados 1 - Fundamentos", hours: 20 }
    ];

    const totalHours = courses.reduce((sum, course) => sum + course.hours, 0); // Soma total das horas
    const labels = courses.map(course => `${course.name} (${course.hours}h)`);
    const data = courses.map(course => course.hours);

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    '#7F00FF', '#FF5733', '#FFC300', '#36A2EB', '#4CAF50', '#E91E63', '#9C27B0'
                ],
                borderColor: '#fff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: `Distribuição das ${totalHours} horas certificadas`,
                    font: {
                        size: 16
                    },
                    color: '#fff'
                },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        color: '#fff',
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });
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
  
 
  
 
  