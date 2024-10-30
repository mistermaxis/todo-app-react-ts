import { TodoType } from "../types"

type Props = TodoType

export const Todo: React.FC<Props> = ({id, title, completed}) => {
  return (
    <div>
      <input type="checkbox" name={title} id={id} checked={completed}/>
      <label htmlFor={title}>{title}</label>
    </div>
  )
}
