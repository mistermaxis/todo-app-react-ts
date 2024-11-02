import { TodoType } from "../types"

interface Props extends TodoType {
  onRemoveTodo: (id: string) => void,
}

export const Todo: React.FC<Props> = ({id, title, completed, onRemoveTodo}) => {
  return (
    <div>
      <input type="checkbox" name={title} id={id} checked={completed}/>
      <label htmlFor={title}>{title}</label>
      <button onClick={() => onRemoveTodo(id)}>Remove</button>
    </div>
  )
}
