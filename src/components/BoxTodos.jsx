import { Todos } from './Todos.jsx';

export const BoxTodos = ({ todos, setTodos, todosDone, setTodosDone}) => {
  return (
    <div>
        <h1>BoxTodos</h1>
        {
            todos.map((info,index) => (
                <Todos info={info} key={index} setTodos={setTodos} todosDone={todosDone} setTodosDone={setTodosDone} todos={todos}  />
            ))
        }
    </div>
  )
}
