import React from "react";
import Tick from "../assets/tick.png";
import not_Tick from "../assets/not_tick.png";
import Delete from "../assets/delete.png";

function todoItems() {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <img src={Tick} className="w-7" alt="" />
        <p className="text-slate-600 ml-4 text-[16px]">start coading</p>
      </div>
      <img src={Delete} alt="" className="w-3 cursor-pointer" />
    </div>
  );
}

export default todoItems;
