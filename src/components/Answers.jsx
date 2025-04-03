import { useRef } from "react";
export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffeldAnswers = useRef();

  if (!shuffeldAnswers.current) {
    shuffeldAnswers.current = [...answers];
    shuffeldAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffeldAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";
        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        if (answer)
          return (
            <li key={answer} className="answer">
              <button
                onClick={() => onSelect(answer)}
                className={cssClass}
                disabled={answerState !== ""}
              >
                {answer}
              </button>
            </li>
          );
      })}
    </ul>
  );
}
