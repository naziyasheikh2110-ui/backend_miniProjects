import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
import "./Todo.css"

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  let deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  let markAsDoneHandler = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <>
    <div className="todo-container">
      <h2>Todo Task App</h2>
      <AddForm />
      <ul>
        {todos.map((todo) => (
          <li
          className={`task ${todo.isDone ? "completed" : ""}`}
          key={todo.id}
          >
            {todo.task}
            <input
              type="checkbox"
              checked={todo.isDone}
              id="TaskDone"
              onChange={() => markAsDoneHandler(todo.id)}
              />
            
            <button className="delete-btn" onClick={() => deleteHandler(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    <p style={{ textAlign: "center", marginTop: "20px" }}>
      Made with <span style={{ color: "red" }}>&hearts;</span>
    </p>
        </>
  );
}
