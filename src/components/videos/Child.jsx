import React from "react";
import ReactDOM from "react-dom";
// import {Fa} from "react-icons/fa"

const Child = () => {
  return ReactDOM.createPortal(
    <section className="w-[40%] bg-slate-200 h-[60vh] absolute left-1/2 top-28 -translate-x-2/4 rounded-md">
      <h2 className="text-black pt-8 font-extrabold">Login</h2>
      <form className="flex-auto mt-[30px]">
        <div className="p-2">
          <label htmlFor="" className="ml-2 space-x-3">
            Email:
          </label>
          <input type="text" className="mt-2" placeholder="enter email" />
        </div>

        <div className="p-2">
          <label htmlFor="">Password:</label>
          <input type="text" placeholder="Password" />
        </div>

        <div>
          <button className="button2 bg-blue-500 text-white mt-2 p-2 rounded-lg">
            Login
          </button>
        </div>
      </form>
    </section>,
    document.getElementById("childRoot")
  );
};

export default Child;
