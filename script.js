// Função para formatar o tempo
function formatTime(timeInSeconds) {
    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds % 3600) / 60);
    let seconds = timeInSeconds % 60;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
  }

  // Função para iniciar o temporizador
  function startTimer() {
    let totalTimeInSeconds = 14 * 3600 + 59 * 60 + 59;
    let temporizadorElement = document.getElementById('temporizador');

    function updateTimer() {
      temporizadorElement.textContent = formatTime(totalTimeInSeconds);

      if (totalTimeInSeconds > 0) {
        totalTimeInSeconds--;
      } else {
        clearInterval(timerInterval);
        temporizadorElement.textContent = "Tempo esgotado!";
      }
    }

    // Atualizar o temporizador a cada segundo
    let timerInterval = setInterval(updateTimer, 1000);
  }

  // Iniciar o temporizador quando a página carregar
  document.addEventListener('DOMContentLoaded', startTimer);
