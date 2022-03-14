window.addEventListener("load", function() {
const questionarreContent = document.getElementById("crimeaQuestionarre");
const quizButton = document.getElementById("quizButton");


answersObj = {
  answers1: ["42", "to die"],
  answers2: ["soviet russia", "eastern europe"]
};
const questions = ["What is the meaning of life?", "Where is ukraine located?"];

const answerInput = [null];

let questionCount = 0;


quizButton.onclick = function(){
  crimeaQuestionarre.innerHTML =
  "<h1>" + questions[questionCount] + "</h1>" +
  "<form>" +
  "<input type='radio' name='question1' value=" + answersObj['answers' + (questionCount + 1)][0] + ">" +
  "<label for=" + answersObj['answers' + (questionCount + 1)][0] + ">" + answersObj['answers' + (questionCount + 1)][0] + "</label><br>" +

  "<input type='radio' name='question1' value=" + answersObj['answers' + (questionCount + 1)][1] + ">" +
  "<label for=" + answersObj['answers' + (questionCount + 1)][1] + ">" + answersObj['answers' + (questionCount + 1)][1] + "</label><br>" +
  "</form>" +

  "<button id='quizButton' onclick='function()'> Submit </button>";

    const form = document.querySelector("form");
    let formAnswer = new FormData(form);
};

});
