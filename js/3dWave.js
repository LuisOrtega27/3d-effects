const waveCards = document.querySelectorAll(".cardW");

let currentCardPos = 0;

let waveInterval;

const stopWave = () => {
  clearInterval(waveInterval);

  currentCardPos = 0;
  setTimeout(() => startWave(), 1000);
};

const startWave = () => {
  waveInterval = setInterval(() => {
    waveCards.forEach((card) => {
      card.classList.remove("isHover");
    });

    if (currentCardPos == waveCards.length) return stopWave();

    waveCards[currentCardPos].classList.add("isHover");
    currentCardPos += 1;
  }, 300);
};

startWave();
