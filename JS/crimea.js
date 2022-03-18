window.addEventListener("load", function() {
const questionarreContent = document.getElementById("formSpace");
const quizButton = document.getElementById("quizButton");

answersObj = {
  answers1: ["42", "to die"],
  answers2: ["soviet russia", "eastern europe"]
};
const questions = ["What is the meaning of life?", "Where is ukraine located?"];
let answerInput = [null];

let questionCount = 0;
let questionCreated = false;

quizButton.onclick = function click(){
  questionCreated = false;
  try{//check if question exists then create or direct to catch statement
    answersObj['answers' + (questionCount + 1)][0].prop
    console.log("NEXT!");
    formSpace.innerHTML =
    "<h1>" + questions[questionCount] + "</h1>" +
    "<form>" +
    "</form>" ;
    let answerCount = 0;
    const form = document.querySelector("form");
    while(questionCreated == false){
    try{answersObj['answers' + (questionCount + 1)][answerCount].prop

    //input creation and definition
      input = document.createElement("input");
      input.type = "radio";
      input.name = "question";
      input.id = "q1"
      input.value = answersObj['answers' + (questionCount + 1)][questionCount];
    //label creation and definition
      label = document.createElement("label");
      label.for = answersObj['answers' + (questionCount + 1)][answerCount];
      label.innerHTML = answersObj['answers' + (questionCount + 1)][answerCount];
    //appending of new elements
      form.appendChild(input);
      form.appendChild(label);
      console.log("questionCount = " + questionCount);
      console.log("answerCount = " + answerCount);
      answerCount++;
    }catch {//finished creating answer buttons
      alert("Done!");
      questionCreated = true;
    }}

    questionCount++;
    console.log(questionCount);
  } catch {//when there is no more questions, show ending message!
    formSpace.innerHTML =
    "<h1> Wow! you did so good! </h1>" +
    "<img src='images/coatOfArms.png' width='25%'/> ";
    quizButton.remove();
  }
};
/*
setInterval(function(){
  let formAnswer = new FormData(form);
  let output = "";
  for (const entry of formAnswers) {
    output = output + entry[0] + "=" + entry[1] + "\r";
  };
  console.log(output);
  console.log(document.querySelector('input[name="rate"]:checked').value);

}, 1000);*/
});
