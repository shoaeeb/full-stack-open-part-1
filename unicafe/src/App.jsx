import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  function average() {
    if (good + neutral + bad === 0) return 0;
    return ((good - bad) / (good + neutral + bad)) * 100;
  }

  function positive() {
    if (good + neutral + bad === 0) return 0;
    return (good / (good + neutral + bad)) * 100;
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      {good + neutral + bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics
          average={average()}
          positive={positive()}
          good={good}
          bad={bad}
          neutral={neutral}
        />
      )}
    </div>
  );
}

function Statistics({ average, positive, good, neutral, bad }) {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + bad + neutral}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
  );
}

export default App;
