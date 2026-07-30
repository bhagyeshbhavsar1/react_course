const App = () => {
  const user = {
    name: "bhagyesh",
    age: 19,
    city: "bhopal",
  };

  localStorage.setItem("user", JSON.stringify(user));
  const data = JSON.parse(localStorage.getItem("user"));
  console.log(data);
  // localStorage.clear();
  return <div>hello</div>;
};

export default App;
