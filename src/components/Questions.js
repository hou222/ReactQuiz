import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Questions() {
  const { answer, questions, index, dispatch } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h4>{question.question}</h4>

      <Options question={question} />
    </div>
  );
}

export default Questions;
