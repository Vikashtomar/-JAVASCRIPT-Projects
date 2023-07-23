/** @format */

const startQuiz = document.querySelector("#start button");
const quizDiv = document.querySelector("#quiz");
const timerDiv = document.querySelector(".timer");
const questionDiv = document.querySelector(".question");
const options = document.querySelectorAll(".options p");

let timer = 5;
let currentQuestion = 0;

const questions = [
  {
    question: "2+2",
    answer: 4,
    options: [1, 2, 4, 5],
  },
  {
    question: "2+2+2",
    answer: 6,
    options: [2, 8, 6, 4],
  },
  {
    question: "2+2-2",
    answer: 4,
    options: [0, 2, 1, 4],
  },
  {
    question: "2+2+4",
    answer: 8,
    options: [8, 0, 4, 22],
  },
  {
    question: "2+2-4",
    answer: 0,
    options: [2, 4, 0, 22],
  },
];



startQuiz.addEventListener("click", () => {
  quiz = setInterval(() => {
    document.write("Start the quiz");
  }, 2000);

  console.log("click");
});
