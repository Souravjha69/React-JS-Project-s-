import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItem from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import "./App.css";
function App() {
  return (
    <div>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo />
        <div className = "item-container">
        <TodoItem></TodoItem>
        <TodoItem2></TodoItem2>
        </div>
      </center>
    </div>
  );
}

export default App;
