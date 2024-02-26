import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center bg-white px-2 py-2 rounded-3xl gap-3 shadow-xl">
          <button
            className=" shadow-lg outline-none px-5 py-1 rounded-full text-white"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className=" shadow-lg outline-none px-5 py-1 rounded-full text-white"
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className=" shadow-lg outline-none px-5 py-1 rounded-full text-white"
            style={{ backgroundColor: "orange" }}
            onClick={() => {
              setColor("orange");
            }}
          >
            Orange
          </button>
          <button
            className=" shadow-lg outline-none px-5 py-1 rounded-full text-white"
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className=" shadow-lg outline-none px-5 py-1 rounded-full text-white"
            style={{ backgroundColor: "yellow" }}
            onClick={() => {
              setColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className=" shadow-lg outline-none px-5 py-1 rounded-full text-white"
            style={{ backgroundColor: "blueviolet" }}
            onClick={() => {
              setColor("blueviolet");
            }}
          >
            Violet
          </button>
          <button
            className=" shadow-lg outline-none px-5 py-1 rounded-full text-white"
            style={{ backgroundColor: "pink" }}
            onClick={() => {
              setColor("pink");
            }}
          >
            Pink
          </button>
          <button
            className=" shadow-lg outline-none px-5 py-1 rounded-full text-white"
            style={{ backgroundColor: "purple" }}
            onClick={() => {
              setColor("purple");
            }}
          >
            Purple
          </button>
          <button
            className=" shadow-lg outline-none px-5 py-1 rounded-full text-white"
            style={{ backgroundColor: "grey" }}
            onClick={() => {
              setColor("grey");
            }}
          >
            Grey
          </button>
          <button
            className=" shadow-lg outline-none px-5 py-1 rounded-full text-white"
            style={{ backgroundColor: "lavender" }}
            onClick={() => {
              setColor("lavender");
            }}
          >
            Lavender
          </button>
          <button
            className=" shadow-lg outline-none px-5 py-1 rounded-full text-black"
            style={{ backgroundColor: "white" }}
            onClick={() => {
              setColor("white");
            }}
          >
            White
          </button>
          <button
            className=" shadow-lg outline-none px-5 py-1 rounded-full text-white"
            style={{ backgroundColor: "black" }}
            onClick={() => {
              setColor("black");
            }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
