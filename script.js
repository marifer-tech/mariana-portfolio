// JavaScript para animações de rolagem
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

    // Verificar ao carregar a página
    checkScroll();
});

//função para total de horas de certificação
const ctx = document.getElementById('totalHoursChart').getContext('2d');
        const totalHours = 6.5 + 39 + 112.5 + 217.5 + 52 + 38.5 + 20; // Soma das horas
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [''],
                datasets: [{
                    label: 'Horas de Certificação:' + [totalHours],
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
                            text: 'total de horas de certificação'
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

//audio
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

