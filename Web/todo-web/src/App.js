import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import Add from "./components/Todos/Add";
import Edit from "./components/Todos/Edit";
import Todos from "./components/Todos/Todos";
import Analytics from "./components/Todos/Analytics";
import "./App.css";

//import axios from "axios";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Todo />} />
        <Route path="/home" exact element={<Todo />} />
        <Route path="/todos/:id" exact element={<Todos />} />
        <Route path="/add-user" exact element={<Add />} />
        <Route path="/edit-todo/:id" exact element={<Edit />} />
        <Route path="/analytics" exact element={<Analytics />} />
      </Routes>
    </div>
  );
}

export default App;
