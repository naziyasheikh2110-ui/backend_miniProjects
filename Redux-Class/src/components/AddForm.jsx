import { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../features/todo/todoSlice';
import "./AddForm.css";
 

export default function AddForm() {
  let [task, setTask] = useState("");
  const dispatch = useDispatch()

  let taskHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(task))
   
  };
  return (
    <>
      <form className="form" onSubmit={taskHandler}>
        <input
        className="input"
          type="text"
          placeholder="Write your Task "
          onChange={(e) => {
            setTask (e.target.value.toLocaleUpperCase());
          }}
        />
        <button className="add-btn">Add</button>
      </form>
    </>
  );
}
