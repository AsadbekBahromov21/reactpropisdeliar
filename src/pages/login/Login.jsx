import React from "react";
import { useNavigate } from "react-router-dom";
const mainLogin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container mx-auto">
        <p className="text-[28px] font-[600] text-center mb-5 mt-10">
          Shaxsiy Hisob
        </p>
        <div className="w-[350px] h-[350px] border shadow m-auto p-4 mb-10 ">
          <form className="flex flex-col gap-5" action="">
            <p className="font-medium text-center text-[#198f51] mb-3">
              login in!
            </p>
            <input
              className="w-full border pl-2 py-[7px] rounded-full shadow-sm outline-none"
              type="text"
              required
              placeholder="Email"
            />
            <input
              className="w-full border pl-2 py-[7px] rounded-full shadow-sm outline-none"
              type="password"
              placeholder="password"
            />
            <button
              onClick={() => navigate(`/Admin`)}
              className="w-full border-none bg-[#ff8a1e] text-[#fff] cursor-pointr pl-2 py-[7px] rounded-full shadow-sm outline-none"
            >
              {" "}
              Coxraint
            </button>
            <button
              onClick={() => navigate(`/`)}
              className="w-[60px] border text-[14px] text-[#0009] mb-4"
            >
              Orqaga
            </button>
            <p className="font-[600] text-center">
              Biz ijtimoiy tarmoqlardamiz!
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default mainLogin;
