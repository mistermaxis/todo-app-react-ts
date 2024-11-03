import { TodoId, Todos } from "../types"
import { Todo } from "./Todo"

interface Props {
  todos: Todos,
  onRemoveTodo: (id: TodoId) => void
}

export const TodoList: React.FC<Props> = ({todos, onRemoveTodo}) => {
  return (
    <ul>
      {todos.map((t) => {return <li key={t.id}>
        <Todo
          key={t.id}
          id={t.id}
          title={t.title}
          completed={t.completed}
          onRemoveTodo={onRemoveTodo}
        />
      </li>})}
    </ul>
  )
}
