import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const { points, highscore, dispatch, maxPossiblePoints } = useQuiz();
  const persentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (persentage === 100) emoji = "🥇";
  if (persentage >= 80 && persentage < 100) emoji = "🎉";
  if (persentage >= 50 && persentage < 80) emoji = "🙃";
  if (persentage >= 0 && persentage < 50) emoji = "🤔";
  if (persentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(persentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
