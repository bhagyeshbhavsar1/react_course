import { useState } from "react";
import Background_img from "./components/Background_img";

const App = () => {
  const [title, setTitle] = useState(" ");
  const [notes, setNotes] = useState(" ");
  const [task, setTask] = useState([]);

  const eventHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, notes });

    setTask(copyTask);
    console.log(copyTask);

    setTitle(" ");
    setNotes(" ");
  };

  return (
    <div className="relative min-h-screen">
      <Background_img />

      <form
        onSubmit={(e) => {
          eventHandler(e);
        }}
        className="relative z-10"
      >
        <div className="item-center flex flex-col gap-8 p-5 w-1/2">
          <h1 className="text-4xl font-bold text-center pt-0 mb-0 text-black">
            Notes App
          </h1>
          <input
            className="border border-red-500 bg-transparent text-black px-3 py-2 rounded-full"
            type="text"
            placeholder="Enter Notes Heading"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="border border-red-500 bg-transparent text-black px-3 py-2 rounded-full"
            type="text"
            placeholder="Write Notes Content"
            value={notes}
            onChange={(e) => {
              setNotes(e.target.value);
            }}
          />
          <button className="bg-red-500 border active:bg-red-300 border-white text-white px-4 py-2 rounded-full">
            Add Note
          </button>
        </div>
      </form>

      <div className="ml-10 mb-9">
        <h1 className="text-3xl">Your Notes: </h1>
        <br />
        <div id="right" className=" h-80 w-250 rounded-2xl p-4  overflow-auto">
          <div className="flex gap-4 w-max">
            {task.map(function (elem, index) {
              const deleteTask = () => {
                /*i is the index position */
                const updatedList = task.filter((elem, i) => i !== index);
                setTask(updatedList);
              };

              return (
                <div className="bg-red-500 h-70 w-80 rounded-2xl shrink-0 p-5 text-white overflow-auto flex flex-col justify-between">
                  <h3 className="text-4xl wrap-break-word">{elem.title}</h3>

                  <p className="leading-tight wrap-break-word">{elem.notes}</p>
                  <button
                    onClick={deleteTask}
                    className="bg-black active:bg-white active:text-black rounded text-white p-2 "
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
