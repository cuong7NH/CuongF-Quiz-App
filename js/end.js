


const finalScore = document.getElementById('finalScore');
const userName = document.getElementById('userName');
const saveScoreBtn = document.getElementById('saveScoreBtn');
let listScore = [];
let scoreInfo;
let listScoreLocal = JSON.parse(localStorage.getItem('listScore'));
if(listScoreLocal) {
    listScoreLocal.forEach(ScoreLocal => {
        listScore.push(ScoreLocal);
    });
}

console.log(listScore);



const yourFinalScore =  JSON.parse(localStorage.getItem('score'));

finalScore.innerText = `Score: ${yourFinalScore}`;

userName.addEventListener('keyup', () => {
    if(userName.value.trim() !== '') {
        saveScoreBtn.removeAttribute('disabled');
    }
});

saveScoreBtn.addEventListener('click', e => {
    e.preventDefault();
    if(userName.value.trim() == '') {
        alert('Enter your name!');
    } else {
        const scoreInfo = {
            name: userName.value,
            score: yourFinalScore
        }

        listScore.push(scoreInfo);
        console.log(listScore);
        localStorage.setItem('listScore', JSON.stringify(listScore));
        window.location.assign('index.html');

    }

    

});

console.log(listScore);
