import React from "react";
import { useReducer } from "react";
const inittialState = {
  son: 0,
  str: "Salom Asadbek",
  data: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, son: state.son + 1 };
    case "DEC":
      return { ...state, son: state.son - 1 };
    case "SAL":
      return { ...state, str: (state.str = "Salom Dunyo") };
    case "lAS":
      return { ...state, str: (state.str = "Hello Word ") };
    default:
      return state;
  }
};
const mainGrandchild = () => {
  let [state, dispatch] = useReducer(reducer, inittialState);
  return (
    <div>
      <div className=" flex flex-col gap-4 items-center justify-center mt-12">
        <h2 className="text-[28px]">{state.str}</h2>
        <button
          className="border px-4 py-2 rounded-lg  hover:bg-slate-300 hover:text-white"
          onClick={() => dispatch({ type: "SAL" })}
        >
          Change
        </button>
        <button
          className="border px-4 py-2 rounded-lg  hover:bg-slate-300 hover:text-white"
          onClick={() => dispatch({ type: "lAS" })}
        >
          Change
        </button>
      </div>
      <div className=" flex flex-col gap-4 items-center justify-center mt-7">
        <h2 className="text-[30px] font-[600]">{state.son}</h2>
        <div className="flex gap-2">
          <button
            className="border px-5 py-2 rounded-lg  hover:bg-black hover:text-white"
            onClick={() => dispatch({ type: "INC" })}
          >
            increment
          </button>
          <button
            className="border px-5 py-2 rounded-lg  hover:bg-black hover:text-white"
            disabled={state.son <= 0}
            onClick={() => dispatch({ type: "DEC" })}
          >
            dicrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default mainGrandchild;
