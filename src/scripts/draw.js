const getWinnerComment = (selector) => {
  const $players =document.querySelectorAll(selector),
    ramdon = Math.floor(Math.random()*$players.length),
    winner = $players[ramdon];

    return winner.textContent
    
    /*'El ganador es: {winner.textContent}';*/
};

getWinnerComment("")