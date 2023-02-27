import React from "react";
import { nanoid } from "nanoid";

export default function Question(props) {
  const [answers, setAnswers] = React.useState([]);

  React.useEffect(() => {
    let allAns = [];

    for (let i = 0; i < props.incorrectAns.length; i++) {
      allAns.push({
        id: nanoid(),
        answer: props.incorrectAns[i],
        isSelected: false,
        isCorrect: false,
      });
    }
    allAns.push({
      id: nanoid(),
      answer: props.correctAns,
      isSelected: false,
      isCorrect: true,
    });

    setAnswers(allAns);
    console.log("Question rendered");
  }, []);

  function handleClick(event) {
    setAnswers((prevAnswers) =>
      prevAnswers.map((answer) => {
        return answer.id === event.target.id
          ? { ...answer, isSelected: !answer.isSelected }
          : answer;
      })
    );
  }
  const listElements = answers.map((answer, index) => (
    <li
      id={answer.id}
      key={index}
      onClick={handleClick}
      className={answer.isSelected ? "selected" : ""}
    >
      {answer.answer}
    </li>
  ));
  return (
    <>
      <div className="question">{props.question}</div>
      <ul>{listElements}</ul>
    </>
  );
}
