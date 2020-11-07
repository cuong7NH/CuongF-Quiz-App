
const question = document.querySelector('#question');

const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');




let questions = [
    {
        question: 'App này viết bằng ngôn ngữ lập trình gì?',
        choice1: 'C#',
        choice2: 'PHP',
        choice3: 'Javascript',
        choice4: 'Java',
        answer: 3
    },
    {
        question: 'Tổng thống thứ 46 của nước Mỹ là ai?',
        choice1: 'Joe Biden',
        choice2: 'Donald Trump',
        choice3: 'Vladimir Vladimirovich Putin',
        choice4: 'Tập Cận Bình',
        answer: 1
    },
    {
        question: 'Người đẹp Monalisa không có thứ gì?',
        choice1: 'Tiền',
        choice2: 'Chồng',
        choice3: 'Lông chân',
        choice4: 'Lông mày',
        answer: 4
    },
    {
        question: 'Bệnh gì bác sỹ bó tay?',
        choice1: 'HIV',
        choice2: 'Gãy tay',
        choice3: 'Si đa',
        choice4: 'Bệnh sĩ',
        answer: 2
    },
    {
        question: 'Làm thế nào để qua được câu này?',
        choice1: 'Bỏ cuộc',
        choice2: 'Cho tôi qua đi mà',
        choice3: '200K!',
        choice4: 'Không thể qua',
        answer: 3
    },
    {
        question: '1 + 1 bằng mấy?',
        choice1: '2',
        choice2: '0',
        choice3: '1',
        choice4: '11',
        answer: 1
    },
    {
        question: 'Ở Việt Nam, rồng bay ở đâu và đáp ở đâu?',
        choice1: 'Hà Nội và Long An',
        choice2: 'Hà nội và Quảng Ninh',
        choice3: 'Thăng Long và Hạ Long',
        choice4: 'Quảng Ninh và Long An',
        answer: 3
    },
    {
        question: 'Có 1 đàn chim đậu trên cành, người thợ săn bắn cái rằm. Hỏi chết mấy con?',
        choice1: '0',
        choice2: '1',
        choice3: '10',
        choice4: '15',
        answer: 1
    },
   
    {
        question: 'Loài thú nào sau đây ăn cơm:',
        choice1: 'Báo',
        choice2: 'Sư tử',
        choice3: 'Voi',
        choice4: 'Cá sấu',
        answer: 2
    },
    {
        question: 'Con cua đỏ dài 10 cm chạy đua với con cua xanh dài 15cm. Con nào về đích trước?',
        choice1: 'Cả 2 cùng về đích',
        choice2: 'Con cua Đỏ',
        choice3: 'Cả 2 cùng không về đích',
        choice4: 'Con cua xanh',
        answer: 4
    },
    {
        question: 'Lương của Front-end developer 1 tháng?',
        choice1: '2 tỉ',
        choice2: '2 củ',
        choice3: '2 trục tỉ',
        choice4: '2 trục củ',
        answer: 3
    },
   
    
];





let indexQuestion, score;



startGame = () => {
    score = 0;
    indexQuestion = 0;
    setNextQuestion();
    choiceAnswer();
}

setNextQuestion = () => {

    question.innerText = `${indexQuestion + 1}. ${questions[indexQuestion].question}`;
    choices.forEach(choice => {
        const choiceNumber = choice.getAttribute('data-number');
        if(choiceNumber == 1) {
            choice.innerText = `${questions[indexQuestion].choice1}`;
        }
        if(choiceNumber == 2) {
            choice.innerText = `${questions[indexQuestion].choice2}`;
        }
        if(choiceNumber == 3) {
            choice.innerText = `${questions[indexQuestion].choice3}`;
        }
        if(choiceNumber == 4) {
            choice.innerText = `${questions[indexQuestion].choice4}`;
        }
    });


    progressText.innerText = `Question ${indexQuestion +1} of ${questions.length}`;
    const progressBarWidth = ((indexQuestion + 1) / questions.length)*100;
    progressBarFull.style.width = `${progressBarWidth}%`;

    

}

choiceAnswer = () => {
    
    choices.forEach(choice => {
        
        choice.addEventListener('click', () => {
            const correctChoice =  questions[indexQuestion].answer;
            if(choice.getAttribute('data-number') == correctChoice) {
                choice.parentElement.style.backgroundColor = 'rgb(11, 223, 36)';
                score += 100;

            } else {
                choice.parentElement.style.backgroundColor = '#e74c3c';
            }
            scoreText.innerText = `${score}`;

            indexQuestion++;
            setTimeout(() => {
                setNextQuestion();
                resetChoice();

            }, 500)

            if(indexQuestion >= questions.length) {
                location.assign("end.html");

                window.localStorage.setItem('score', JSON.stringify(score));
            }
            

        })
    })
}


resetChoice  = () =>{
    choices.forEach(choice => {
        choice.parentElement.style.backgroundColor = 'rgb(18, 93, 255)';
    })
}


startGame();


