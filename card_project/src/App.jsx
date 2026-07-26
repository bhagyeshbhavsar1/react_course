import Card from "./components/Card";

function App(props) {
  return (
    <Card
      pfp={props.pfp}
      name={props.name}
      role={props.role}
      skills={props.skills}
      rating={props.rating}
      earned={props.earned}
      rate={props.rate}
    />
  );
}

export default App;