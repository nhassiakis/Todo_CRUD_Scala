import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");

  const createDate = new Date();

  const navigate = useNavigate();
  const data = {
    completedAt: "null",
    createdAt: createDate,
    isComplete: false,
    name: name,
  };

  function submitForm(e) {
    e.preventDefault();
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.post("http://localhost:9000/api/todos/add", data).then(navigate("/"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">ADD USER</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Todo"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          ADD TODO
        </button>
      </form>
    </div>
  );
}

export default Add;
