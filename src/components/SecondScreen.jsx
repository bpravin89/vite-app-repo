import React from "react";
import Question from "./Question";

export default function SecondScreen(props) {
  const [questions, setQuestions] = React.useState([]);
  const [displayResult, setDisplayResult] = React.useState(false);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  function checkAnswersFn() {
    setDisplayResult(true);
  }

  const questionElements = questions.map((question, index) => {
    return (
      <Question
        key={index}
        question={question.question}
        incorrectAns={question.incorrect_answers}
        correctAns={question.correct_answer}
        displayResult={displayResult}
      />
    );
  });

  return (
    <>
      {questionElements}
      {!displayResult && (
        <button onClick={checkAnswersFn}>Check Answers</button>
      )}
      {displayResult && <button onClick={props.toggleQuiz}>Play Again </button>}
    </>
  );
}
