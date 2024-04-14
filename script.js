const input = document.querySelector(".input-bar");
const button = document.querySelector(".send-button");
const container = document.querySelector(".ball-container");
const shakeSound = new Audio("src/assets/shake.mp3");
const resultSound = new Audio("src/assets/result.mp3");

document.addEventListener('DOMContentLoaded', () => {
  input.focus();
});
const answers = [
  // Positive Answers
  ["Yes",
    "Certainly",
    "Yes, definitely",
    "Of course",
    "Definitely",
    "It is bound to happen",
    "It is very likely",
    "It is likely",
    "There is a good chance of it",
    "It isn't impossible",
    "It is possible",
    "Signs point to yes",
    "It looks like yes",
  ],
  // Neutral Answers
  [
    "Ask again later",
    "Concentrate, and try asking again",
    "I can't quite tell",
    "My visions are quite foggy",
    "I'm not sure",
  ],
  // Negative Answers
  [
    "No",
    "Nope",
    "Definitely not",
    "I don't think so",
    "There's not a very high chance of it",
    "I'm very doubtful",
    "My sources say no",
    "Probably not",
    "Don't count on it",
    "Improbable",
    "Signs point to no",
    "It looks like no",
  ]
];
const response = document.querySelector(".quote");
button.addEventListener("click", handleClick);

const moveBall = (count = 0, hasPlayed) => {
  if (count <= 2) {
    hasPlayed = true;
    container.classList.add("left");
    shakeSound.play();
    setTimeout(() => {
      container.classList.remove("left");
      container.classList.add("right");
      setTimeout(() => {
        container.classList.remove("right");
        moveBall(count + 1);
      }, 200);
    }, 200);
  }
};



function handleClick() {
  response.classList.remove("active");
  response.classList.add("inactive");
  button.removeEventListener("click", handleClick);
  const positiveness = Math.floor(Math.random() * 3);
  let answer = answers[positiveness][Math.floor(Math.random() * answers[positiveness].length)];
  
  moveBall();
  setTimeout(() => {
    console.log(input);
    console.log(input.value.toLowerCase().split(" ").join(""));
    if(input.value.toLowerCase().split(" ").join("") === "tobeornottobe" || input.value.toLowerCase().split(" ").join("") === "tobeornottobe") response.textContent = "That is the question.";
    else response.textContent = answer;
    console.log(response.textContent);
    response.classList.remove("inactive");
    response.classList.add("active");
    resultSound.play();
    resultSound.currentTime = 0;
    setTimeout(() => {
      button.addEventListener("click", handleClick);
    }, 500)
  }, 1600);
}