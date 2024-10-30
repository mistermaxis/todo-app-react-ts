import { TodoList } from "./components/TodoList";
import "./App.css";
import { useState } from "react";

const testTodos = [
  {
    id: '1',
    title: 'acostarme a las 10 pm',
    completed: false,
  },

  {
    id: '2',
    title: 'levantarme a las 7 am',
    completed: true,
  }
]

const App = () : JSX.Element => {
  const [todos] = useState(testTodos)

  return (
    <div>
      <header>Todo App React Typescript</header>
      <TodoList todos={todos}></TodoList>
    </div>
  )
}

export default App;
