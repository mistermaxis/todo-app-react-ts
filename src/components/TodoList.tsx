interface Todo {
  id: string,
  title: string,
  completed: boolean
}

type Todos = Array<Todo>

interface Props {
  todos: Todos
}

export const TodoList: React.FC<Props> = ({todos}) => {
  return (
    <ul>
      {todos.map((e) => {return <li key={e.id}>{e.title}</li>})}
    </ul>
  )
}
