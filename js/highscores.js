



const listHighScore = document.getElementById('listHighScore');


const listHighScoreLocal = JSON.parse(localStorage.getItem('listScore'));
console.log(listHighScoreLocal);



if(listHighScoreLocal) {
    listHighScoreLocal.forEach(highScoreLocal => {
        if(highScoreLocal.score >= 700) {
            const li = document.createElement('li');
            li.innerHTML = `
                <span id="name" style = "text-transform: capitalize;">${highScoreLocal.name}</span>
                <span>-</span>
                <span id="score">${highScoreLocal.score}</span>`;
            listHighScore.appendChild(li);
        }
        
    });
} else {
    const haveHighScore =  document.querySelectorAll('listHighScore li');


    if(haveHighScore.length == 0) {
        document.querySelector('#h1').textContent = 'No one has a high score!'
    } else {
        document.querySelector('#h1').textContent = 'Highscore List'
    }
}

