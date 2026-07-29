import { useState } from "react";
import Background_img from "./components/Background_img";

const App = () => {
  const [title, setTitle] = useState(" ");
  const [notes, setNotes] = useState(" ");

  const eventHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(notes);

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
        <div className="item-center flex flex-col gap-10 p-11 w-1/2">
          <input
            className="border border-black bg-transparent text-black px-3 py-2 rounded-full"
            type="text"
            placeholder="Enter Notes Heading"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="border border-black bg-transparent text-black px-3 py-2 rounded-full"
            type="text"
            placeholder="Write Notes Content"
            value={notes}
            onChange={(e) => {
              setNotes(e.target.value);
            }}
          />
          <button className="bg-red-500 border border-white text-white px-4 py-2 rounded-full">
            Add Note
          </button>
        </div>
      </form>

      <div className="ml-10 mb-9">
        <h2>Your Notes: </h2>
        <br />
        <div
          id="right"
          className="bg-gray-300 h-80 w-250 rounded-2xl p-4  overflow-x-auto"
        >
          <div className="flex gap-4 w-max">
            <div className="bg-red-500 h-70 w-80 rounded-2xl shrink-0"></div>
            <div className="bg-red-500 h-70 w-80 rounded-2xl shrink-0"></div>
            <div className="bg-red-500 h-70 w-80 rounded-2xl shrink-0"></div>
            <div className="bg-red-500 h-70 w-80 rounded-2xl shrink-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
