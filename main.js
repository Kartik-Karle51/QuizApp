const questions = [
    {
        question: "What is full Form HTML?",
        options: ["Hyper Text Markup Language", "HTTP Markup Language", "Hyper Text Machine Learning", "Hyper Text Programming Language"],
        answer: 0
    },
    {
        question: "Which HTML tag is used to define a hyperlink?",
        options: ["&lt;a>", "&lt;link>", "&lt;button>", "&lt;href>"],
        answer: 0
    },
    {
        question: "Which of the following is the correct way to link an external CSS file in HTML?",
        options: ['&lt;style src="style.css"&gt;', '&lt;link rel="stylesheet" href="style.css"&gt;', '&lt;css src="style.css"&gt;', '&lt;script src="style.css"&gt;&lt;/script&gt;'],
        answer: 1
    },
    {
        question: "Which HTML tag is used to define the largest heading?",
        options: ["&lt;h6>", "&lt;h5>", "&lt;h1>", "&lt;p>"],
        answer: 2
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["String", "Number", "Boolean", "Character"],
        answer: 3
    },
    {
        question: " Which method is used to find an element in JavaScript by its ID?",
        options: ["document.getElementById()", "document.querySelector()", "document.getElementByClassName()", "document.getElementsByTagName()"],
        answer: 0
    }
    ,
    {
        question: "Which of the following is used to add a comment in JavaScript?",
        options: ["&lt;!-- comment --&gt;", "/* comment */", "// comment", "# comment"],
        answer: 2
    },
    {
        question: "Which of the following is true about the box-sizing property in CSS?",
        options: ["It defines the width of the border box.", " It changes the default box model.", "It adds padding and margin to the width", "It only applies to block elements."],
        answer: 1
    },
    {
        question: "What is the default HTTP method used by a form when it is submitted?",
        options: ["GET", "POST", "PUT", "DELETE"],
        answer: 0
    },
    {
        question: "Which of the following is NOT a valid JavaScript loop?",
        options: ["for", "while", "repeat", "do-while"],
        answer: 2
    },
  
]
var current = 0;
var score = 0;
var timer = 30;


function start() {
    current = 0;
    score = 0;
    timer = 30;

    document.getElementById("beforeStart").style.display = "none";
    document.getElementById("afterstart").style.display = "block";
    document.getElementById("afterEnd").style.display = "none";
    changeQuestion();


    startTimer();
}


const allOptions = document.querySelectorAll(".option");
const nextBtn=document.getElementById("next");



function changeQuestion() {
    if (current < questions.length) {
        document.getElementById("question").innerHTML = questions[current].question;
        
        for (let i = 0; i < allOptions.length; i++) {
            allOptions[i].innerHTML = questions[current].options[i];
        }
        timer = 30
      
    }
    //When all questions will get end
    else {
        document.getElementById("beforeStart").style.display = "none";
        document.getElementById("afterstart").style.display = "none";
        document.getElementById("afterEnd").style.display = "block";
        if(score>5){
        document.getElementById("score").innerHTML = `Congratulations!!!Your final score is :${score}`;}
        else{
            document.getElementById("score").innerHTML = `OOP's!!!Your final score is :${score}`;
        }
    }
}
allOptions.forEach((option,index)=>{
    option.addEventListener("click",()=>{
        allOptions.forEach(opt=>opt.classList.remove("selected"));
        option.classList.add("selected");
        nextBtn.style.display="block";
        if(index == questions[current].answer){
            score++;
           }
    });
    });
    nextBtn.addEventListener("click",()=>{
       
      
        current++;
        nextBtn.style.display="none";
        allOptions.forEach(opt=>opt.classList.remove("selected"));
        changeQuestion();
    });




function startTimer() {
    let interval = setInterval(() => {
        timer -= 1;
        if (timer == 0) {
            document.getElementById("timer").innerHTML = 30;
            clearInterval(interval);
            current += 1;
            changeQuestion();
            startTimer();
        } else {

            document.getElementById("timer").innerHTML = timer;
        }
    }, 1000)
}


