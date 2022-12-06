import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [isComplete, setComplete] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [completedAt, setCompleteAt] = useState("");

  const { id } = useParams();
  const oldName = "hej";

  useEffect(() => {
    axios.get(`http://localhost:9000/api/todos/${id}`).then((res) => {
      setCreatedAt(res.data.createdAt);
      setName(res.data.name);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    name: name,
    isComplete: isComplete,
    createdAt: createdAt,
    completedAt: completedAt,
  };

  function Update(e) {
    if (isComplete) {
      data.completedAt = new Date();
    } else {
      data.completedAt = null;
    }

    e.preventDefault();
    axios
      .put(`http://localhost:9000/api/todos/update/${id}`, data)
      .then(navigate("/"));
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">User Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder={name}
        />
        <label className="flex justify-center text-1.5xl font-semibold">
          <input
            className="w-10 h-7 top"
            type="checkbox"
            name="completed"
            checked={isComplete}
            onChange={(e) => setComplete(e.target.checked)}
          />
          Completed
        </label>
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          UPDATE USER
        </button>
      </form>
    </div>
  );
}

export default Add;
