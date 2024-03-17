import{ useState } from "react";

function Conditions() {
  const [currentQuestion, setCurrentQuestion] = useState(0); // State to track current question index

  const Questions = [
    // Your question objects here
  ];

  // Function to handle moving to the previous question
  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Function to handle moving to the next question
  const goToNextQuestion = () => {
    if (currentQuestion < Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <>
      <div>
        <p>{Questions[currentQuestion].question}</p>
        <form>
          {Questions[currentQuestion].options.map((option) => (
            <div key={option.id}>
              <input
                type="radio"
                id={option.id}
                name={Questions[currentQuestion].question}
                value={option.text}
              />
              <label htmlFor={option.id}>{option.text}</label>
            </div>
          ))}
        </form>
      </div>
      {/* Navigation buttons */}
      <div>
        <button onClick={goToPreviousQuestion}>Previous</button>
        <button onClick={goToNextQuestion}>Next</button>
      </div>
    </>
  );
}

export default Conditions;
