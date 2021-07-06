const qa = [
  {
    question: "How many weapons are in the game?",
    correct: "12",
    incorrect: ["13", "10", "14"],
  },
  {
    question: "How many legends are in the game as of October 2019?",
    correct: "46",
    incorrect: ["40", "42", "44"],
  },
  {
    question: "What weapons does this Yumiko use?",
    correct: "Bow and Hammer",
    incorrect: ["Orb and Bow", "Sword and Scythe", "Hammer and Rocket lance"],
  },
  {
    question: "Which character uses blaster",
    correct: "Lord Vraxx",
    incorrect: ["Mordex", "Artemis", "Jiro"],
  },
  {
    question: "Which character uses a scythe?",
    correct: "Mirage",
    incorrect: ["Ulgrim", "Dusk", "Asuri"],
  },
  {
    question: "How many attacks does each weapon have?",
    correct: "8",
    incorrect: ["2", "3", "5"],
  },
  {
    question: "What happens when you dodge while running?",
    correct: "You dash",
    incorrect: ["Dodge", "Attack", "Jump"],
  },
  {
    question: "What does dexterity mean?",
    correct:
      "The higher your dexterity, the quicker attacks start and end, also stun",
    incorrect: [
      "How fast your character moves, Affects how fast you run and how far some of your attacks move",
      "Determines how quickly you slow down after being launched by a hit",
      "The power your character hits the opponent, directly factors into how hard all of your hits are",
    ],
  },
  {
    question: "Who uses gauntlets and hammer?",
    correct: "Kor",
    incorrect: ["Mordex", "Caspian", "Wu Shang"],
  },
  {
    question: "How many people can be in one custom lobby?",
    correct: "8",
    incorrect: ["4", "6", "2"],
  },
  {
    question: "How many ranks are in Brawlhalla ranked?",
    correct: "6",
    incorrect: ["3", "10", "4"],
  },
];
const answerContainer = document.querySelector(".a");
const questionCon = document.querySelector(".q");
const question = document.querySelector(".q-item");
const bar = document.querySelector(".bar");
const barContainer = document.querySelector(".progressBar");
const progressBar = document.querySelector(".bar-w");
const next = document.querySelector(".next");
const startBtn = document.querySelector(".start-game");
const questions = [];
const player = { score: 0, answers: [] };
let cur = 0;
const holder = [];
(() => {
  loadQuestions(); // load questions immediately
})();

function loadQuestions() {
  qa.forEach((e) => {
    // loop through "qa"
    let temp = [];
    e.incorrect.forEach((ans) => {
      // loop through 'qa.incorrect' => place false on incorrect items
      let obj = {
        response: ans,
        correct: false,
      };
      temp.push(obj);
    });

    let obj = {
      // place true on correct items
      response: e.correct,
      correct: true,
    };
    temp.push(obj);
    let mainTemp = {
      question: e.question,
      options: temp, // both correct and incorrect options are stored here
      correct: e.correct, // correct answer
    };
    questions.push(mainTemp); // push into global
  });
}
function newQuestion() {
  if (cur >= questions.length) {
    next.innerHTML = "View Score";
    results();
  } else {
    next.innerHTML = "Next Question";
  }
  answerContainer.innerHTML = "";
  const el = questions[cur];
  progess();
  console.log(el);
  el.options.sort(() => {
    return 0.5 - Math.random();
  });

  const capQuestion =
    el.question.charAt(0).toUpperCase() + el.question.slice(1);
  question.textContent = `${capQuestion}?`;
  answerContainer.innerHTML = "";

  el.options.forEach((option) => {
    const divOption = document.createElement("div");
    holder.push(divOption);
    divOption.correctAnswer = el.correct;
    divOption.que = capQuestion;
    divOption.isITcorrect = option.correct;
    divOption.classList.add("a-item");
    divOption.textContent = option.response;
    answerContainer.append(divOption);

    divOption.addEventListener("click", optSelect);
  });
}

// if selected option is T || F
function optSelect(e) {
  endTurn();
  if (e.target.isITcorrect) {
    player.score++;
    let obj = {
      que: e.target.que,
      res: e.target.textContent,
      correct: true,
      qNum: cur,
    };
    player.answers.unshift(obj);
    e.target.style.color = "#008205";
    e.target.style.backgroundColor = "#dbfff3";
  } else {
    let obj = {
      que: e.target.que,
      res: e.target.textContent,
      correct: false,
      qNum: cur,
    };
    player.answers.unshift(obj);
    e.target.style.color = "#e91e63";
    e.target.style.backgroundColor = "#ffd3e2";
  }
  e.target.style.cursor = "pointer";
  // player.answers.push(temp);
}

// OPTIONS not selected have a unique style

function endTurn() {
  holder.forEach((el) => {
    el.removeEventListener("click", optSelect);
    el.style.backgroundColor = "#ffffff05";
    el.style.color = "#565656";
    el.style.cursor = "default";
  });
  cur++;
  if (cur >= questions.length) {
    next.innerHTML = "View Score";
  } else {
    next.innerHTML = "Next Question";
  }
}

function progess() {
  bar.style.width = "60%";
  next.classList.add("progressActive");
  question.style.display = "block";

  const currentQ = cur + 1;
  const progressIs = (currentQ / questions.length) * 100;

  if (progressIs === 100) {
    next.innerHTML = "View Score";
    progressBar.style.maxWidth = "100%";
  }
  progressBar.style.width = `${progressIs}%`;
}
startBtn.addEventListener("click", newQuestion);
next.addEventListener("click", () => {
  if (cur >= questions.length) {
    results();
  } else {
    newQuestion();
  }
});

// update score while answering each Q

function results() {
  console.log(player.score);
  question.style.display = "block";
  answerContainer.innerHTML = "";
  question.textContent = `Quiz Summary`;
  player.answers.forEach((ans, i) => {
    const resultsMockup = `
		<div class="result">
		<div class="result-q"><span>${ans.qNum}</span> ${ans.que}</div>
		<div>${ans.res}</div>
		<div>${ans.correct}</div>
		</div>`;
    answerContainer.insertAdjacentHTML("afterbegin", resultsMockup);
  });
  const progressIs = (player.score / questions.length) * 100;
  next.innerHTML = `${player.score} / ${questions.length} points`;

  if (progressIs <= 50) {
    bar.style.backgroundColor = `#ff8585`;
    progressBar.style.backgroundColor = `red`;
  } else if (progressIs <= 75) {
    bar.style.backgroundColor = `#ffc582`;
    progressBar.style.backgroundColor = `#ff8900`;
  } else {
    progressBar.style.backgroundColor = `#00d15e`;
    bar.style.backgroundColor = `#bcffda`;
  }

  progressBar.style.width = `${progressIs}%`;

  loadQuestions();
}
function restartGame() {
  newQuestion();
}
