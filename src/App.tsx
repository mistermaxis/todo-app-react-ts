import { TodoList } from "./components/TodoList";
import "./App.css";

const todos = [
  {
    id: '1',
    title: 'acostarme a las 10 pm',
    completed: false,
  },

  {
    id: '2',
    title: 'levantarme a las 7 am',
    completed: false,
  }
]

const App = () : JSX.Element => {
  return (
    <div>
      <header>Todo App React Typescript</header>
      <TodoList todos={todos}></TodoList>
    </div>
  )
}

export default App;
