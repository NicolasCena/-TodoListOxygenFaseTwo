import { TodosDone } from './TodosDone.jsx';

export const BoxDone = ({setTodos, setTodosDone, todosDone, todos}) => {
  return (
    <div>
        <h1>Box Done</h1>
        {
            todosDone.map((info,index) => (
                <TodosDone 
                info={info} 
                key={index} 
                setTodos={setTodos} 
                todosDone={todosDone} 
                setTodosDone={setTodosDone}  
                todos={todos}/>
            ))
        }
    </div>
  )
}
