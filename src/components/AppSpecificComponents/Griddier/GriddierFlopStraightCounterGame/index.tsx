import { useEffect, useState } from "react";
import rawData from "./data/Questions.json";
import type { Question } from "./types/Question";
import { answerMap, colorMap } from "./data/answerMap";

type Answer = 0 | 1 | 2 | 3 | 4 | 5;

const data = rawData as Question[];
const PR_KEY = "griddier-flop-counter-pr";

function getRandomIndex() {
  return Math.floor(Math.random() * data.length);
}

function getSavedPR(): number {
  return Number(localStorage.getItem(PR_KEY) || 0);
}

function savePR(score: number) {
  localStorage.setItem(PR_KEY, String(score));
}

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [started, setStarted] = useState(false);
  const [lost, setLost] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [personalRecord, setPersonalRecord] = useState(() => getSavedPR());

  const [wrongQuestion, setWrongQuestion] = useState<Question | null>(null);
  const [wrongAnswer, setWrongAnswer] = useState<Answer | null>(null);

  const finished = started && (lost || timeLeft <= 0);
  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (!started || finished) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [started, finished]);

  function updatePRIfNeeded(score: number) {
    if (score > personalRecord) {
      setPersonalRecord(score);
      savePR(score);
    }
  }

  function startGame() {
    setQuestions(data);
    setCurrentIndex(getRandomIndex());
    setTimeLeft(60);
    setCorrectCount(0);
    setLost(false);
    setWrongQuestion(null);
    setWrongAnswer(null);
    setStarted(true);
  }

  function submitAnswer(answer: Answer) {
    if (!currentQuestion || finished) return;

    if (answer !== currentQuestion.correctAnswer) {
      updatePRIfNeeded(correctCount);
      setWrongQuestion(currentQuestion);
      setWrongAnswer(answer);
      setLost(true);
      return;
    }

    const newScore = correctCount + 1;

    setCorrectCount(newScore);
    updatePRIfNeeded(newScore);
    setCurrentIndex(getRandomIndex());
  }

  const displayedPR = Math.max(personalRecord, correctCount);
  const isNewPR = finished && correctCount > personalRecord;

  if (!started) {
    return (
      <div className="flex w-full flex-1 items-center justify-center p-5 py-20 text-white">
        <div
          className="inner-container flex flex-col items-center gap-6 rounded-[30px] bg-[color-mix(in_srgb,var(--secondary)_60%,transparent)] p-8"
          style={{ boxShadow: "0 0 10px 0 var(--contrast-c)" }}
        >
          <h1 className="text-3xl font-bold">Griddier Flop Counter</h1>

          <div className="text-xl font-bold">🏆 PR: {personalRecord}</div>

          <p>
            Answer as many as possible in 60 seconds. One wrong answer ends the
            round.
          </p>

          <button
            onClick={startGame}
            className="rounded-xl bg-[var(--primary)] px-6 py-3 font-bold text-white"
          >
            Start
          </button>
        </div>
      </div>
    );
  }

  if (finished) {
    const difference = personalRecord - correctCount;
    const missedFlop = wrongQuestion?.cards.slice(0, 3);
    const missedHand = wrongQuestion?.cards.slice(3);

    return (
      <div className="flex w-full flex-1 items-center justify-center p-5 py-20 text-white">
        <div
          className="inner-container flex flex-col items-center gap-4 rounded-[30px] bg-[color-mix(in_srgb,var(--secondary)_60%,transparent)] p-8"
          style={{ boxShadow: "0 0 10px 0 var(--contrast-c)" }}
        >
          <h1 className="text-3xl font-bold">
            {lost ? "Wrong Answer" : "Time's Up!"}
          </h1>

          {lost && wrongQuestion && wrongAnswer !== null && (
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-1">
                {missedFlop?.map((card) => (
                  <img
                    key={card}
                    src={`/app-specific/griddier/cards/${card + 1}.png`}
                    alt={`Card ${card + 1}`}
                    className="h-16 w-auto"
                    draggable={false}
                  />
                ))}
              </div>

              <div className="flex gap-1">
                {missedHand?.map((card) => (
                  <img
                    key={card}
                    src={`/app-specific/griddier/cards/${card + 1}.png`}
                    alt={`Card ${card + 1}`}
                    className="h-16 w-auto"
                    draggable={false}
                  />
                ))}
              </div>

              <div className="flex flex-col gap-2 text-xl font-bold">
                <div className="text-red-400">
                  ❌ Your answer: {answerMap[wrongAnswer]}
                </div>

                <div className="text-green-400">
                  ✅ Correct answer: {answerMap[wrongQuestion.correctAnswer]}
                </div>
              </div>
            </div>
          )}

          <div className="text-2xl font-bold">Score: {correctCount}</div>
          <div className="text-xl font-bold">🏆 PR: {displayedPR}</div>

          {isNewPR ? (
            <div className="font-bold">New personal record!</div>
          ) : difference > 0 ? (
            <div>{difference} away from the PR.</div>
          ) : (
            <div>Matched the PR.</div>
          )}

          <button
            onClick={startGame}
            className="rounded-xl bg-[var(--primary)] px-6 py-3 font-bold text-white"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  const flop = currentQuestion.cards.slice(0, 3);
  const hand = currentQuestion.cards.slice(3);
  const answers: Answer[] = [0, 1, 2, 3, 4, 5];

  return (
    <div className="flex w-full flex-1 items-center justify-center p-5 py-20 text-white">
      <div
        className="inner-container flex flex-col items-center gap-6 rounded-[30px] bg-[#1f1f1f] p-8"
        style={{ boxShadow: "0 0 10px 0 var(--contrast-c)" }}
      >
        <div className="flex w-full justify-between gap-6 text-xl font-bold">
          <span>⏱ {timeLeft}</span>
          <span>Score: {correctCount}</span>
          <span>🏆 {displayedPR}</span>
        </div>

        <div className="flex gap-1">
          {flop.map((card) => (
            <img
              key={card}
              src={`/app-specific/griddier/cards/${card + 1}.png`}
              alt={`Card ${card + 1}`}
              className="h-16 w-auto"
              draggable={false}
            />
          ))}
        </div>

        <div className="flex gap-1">
          {hand.map((card) => (
            <img
              key={card}
              src={`/app-specific/griddier/cards/${card + 1}.png`}
              alt={`Card ${card + 1}`}
              className="h-16 w-auto"
              draggable={false}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3">
          {answers.map((answer) => (
            <button
              key={answer}
              onClick={() => submitAnswer(answer)}
              className="h-16 w-40 rounded-xl text-2xl font-bold text-white shadow-[0_0_5px_rgba(255,255,255,0.8)]"
              style={{ backgroundColor: colorMap[answer] }}
            >
              {answerMap[answer]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}