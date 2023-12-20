function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Footer total={course.parts} />
    </div>
  );
}

function Header(props) {
  return <h1>Course Name:{props.name}</h1>;
}

function Content(props) {
  return (
    <div>
      <Part
        name={props.parts[0].name}
        excercise={props.parts[0].excercises}
      ></Part>
      <Part
        name={props.parts[1].name}
        excercise={props.parts[1].excercises}
      ></Part>
      <Part
        name={props.parts[2].name}
        excercise={props.parts[2].excercises}
      ></Part>
    </div>
  );
}
function Part(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.excercise}</p>
    </div>
  );
}
function Footer(props) {
  const total = props.total.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of excercises {total}</p>;
}

export default App;
