function Question() {
  const Questions = [
    {
      question: "What is JavaScript?",
      options: [
        { id: "q1a", text: "JavaScript is a scripting language used to make the website interactive" },
        { id: "q1b", text: "JavaScript is an assembly language used to make the website interactive" },
        { id: "q1c", text: "JavaScript is a compiled language used to make the website interactive" },
        { id: "q1d", text: "None of the mentioned" }
      ]
    },
    {
      question: "Which of the following is correct about JavaScript?",
      options: [
        { id: "q1a", text: "JavaScript is an Object-Based language" },
        { id: "q1b", text: "JavaScript is Assembly-language" },
        { id: "q1c", text: "JavaScript is an Object-Oriented language" },
        { id: "q1d", text: " JavaScript is a High-level language" }
      ]
    },
    {
      question: "Among the given statements, which statement defines closures in JavaScript?",
      options: [
        { id: "q1a", text: " JavaScript is a function that is enclosed with references to its inner function scope" },
        { id: "q1b", text: "JavaScript is a function that is enclosed with references to its lexical environment" },
        { id: "q1c", text: "JavaScript is a function that is enclosed with the object to its inner function scope" },
        { id: "q1d", text: " None of the mentioned" }
      ]
    },
    {
      question: "Which of the following is not javascript data types?",
      options: [
        { id: "q1a", text: "Null type" },
        { id: "q1b", text: "Undefined type" },
        { id: "q1c", text: "Number type" },
        { id: "q1d", text: " All of the mentioned" }
      ]
    },
    {
      question: "Where is Client-side JavaScript code is embedded within HTML documents?",
      options: [
        { id: "q1a", text: "A URL that uses the special javascript:code" },
        { id: "q1b", text: "A URL that uses the special javascript:protocol" },
        { id: "q1c", text: "A URL that uses the special javascript:encoding" },
        { id: "q1d", text: " A URL that uses the special javascript:stack" }
      ]
    },
    {
      question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
      options: [
        { id: "q1a", text: "Position" },
        { id: "q1b", text: "Window" },
        { id: "q1c", text: "Standard" },
        { id: "q1d", text: " Location" }
      ]
    },
    {
      question: " Which of the following can be used to call a JavaScript Code Snippet?",
      options: [
        { id: "q1a", text: "Function/Method" },
        { id: "q1b", text: "Preprocessor" },
        { id: "q1c", text: "Triggering Event" },
        { id: "q1d", text: " RMI" }
      ]
    },
    {
      question: "Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",
      options: [
        { id: "q1a", text: "will work perfectly well on a Windows Machine" },
        { id: "q1b", text: " will be displayed as JavaScript text on the browser" },
        { id: "q1c", text: "will throw errors and exceptions" },
        { id: "q1d", text: "must be restricted to a Unix Machine only" }
      ]
    }
    
  ];

  return (
    <>
      {Questions.map((questionObj, index) => (
        <div key={index}>
          <p>{questionObj.question}</p>
          <form>
            {questionObj.options.map((option) => (
              <div key={option.id}>
                <input type="radio" id={option.id} name={questionObj.question} value={option.text} />
                <label htmlFor={option.id}>{option.text}</label>
              </div>
            ))}
          </form>
        </div>
      ))}
    </>
  );
}

export default Question;
