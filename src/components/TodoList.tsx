import { Todos } from "../types"
import { Todo } from "./Todo"

interface Props {
  todos: Todos
}

export const TodoList: React.FC<Props> = ({todos}) => {
  return (
    <ul>
      {todos.map((t) => {return <li key={t.id}>
        <Todo
          key={t.id}
          id={t.id}
          title={t.title}
          completed={t.completed}
        />
      </li>})}
    </ul>
  )
}
