import React from "react";
import img1 from "../assets/todo_icon.png";
import TodoItems from "./todoItems";

function Todo() {
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* title */}
      <div className="flex items-center mt-7 gap-2">
        <img className="w-9" src={img1} alt="" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>
      {/* input */}
      <div className="flex items-center my-7 bg-gray-300 rounded-full">
        <input
          type="text"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-400"
          placeholder="Add Task"
        />
        <button className="border-none rounded-full bg-orange-400 w-32 h-14 text-white text-lg font-medium cursor-pointer hover:bg-orange-700">
          ADD +
        </button>
      </div>
      {/* Todo list */}
      <div>
        <TodoItems />
        <TodoItems />
        <TodoItems />
        <TodoItems />
        <TodoItems />
      </div>
    </div>
  );
}

export default Todo;
