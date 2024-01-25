const scoresDiv = document.querySelector(".scores");
const resultDiv = document.querySelector(".result");

async function getScores() {
  let resultTally = 0;
  try {
    const response = await fetch("../data.json");
    const scores = await response.json();

    //create a div for each score in the scores.json file
    scores.forEach((score) => {
      const newScore = document.createElement("div");
      newScore.innerHTML = `
    <div class="score ${score.category.toLowerCase()}">
        <div class="score-title">
            <img src=.${score.icon} />
            <span>${score.category}</span>
        </div>
        <div class="score-number"><span>${score.score}</span>  / 100</div>
    </div>`;
    // add score to running tally 
    resultTally += score.score;
    scoresDiv.appendChild(newScore);
    });
    
    resultDiv.innerHTML = Math.floor(resultTally / scores.length);
  } catch (error) {
    console.log(error);
  }
}

getScores();
