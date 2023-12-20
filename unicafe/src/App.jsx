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
      <Button text={"good"} onClick={() => setGood(good + 1)} />
      <Button text={"neutral"} onClick={() => setNeutral(neutral + 1)} />
      <Button text={"bad"} onClick={() => setBad(bad + 1)} />
      {good + neutral + bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <Statistics text="good" stats={good} />
          <Statistics text="neutral" stats={neutral} />
          <Statistics text="bad" stats={bad} />
          <Statistics text={"all"} stats={good + bad + neutral} />
          <Statistics text={"positive"} stats={positive()} />
          <Statistics text={"average"} stats={average()} />
        </>
      )}
    </div>
  );
}
function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}
function Statistics({ text, stats }) {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{stats}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default App;
