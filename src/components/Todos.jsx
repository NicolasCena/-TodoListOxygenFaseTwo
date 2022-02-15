//STYLES
import "../styles/Todo.css";
export const Todos = ({info, setTodos, setTodosDone, todosDone, todos}) => {
  const sendDone = (e) => {
    const newTodos = todos.filter(todo => todo.id !== e.id);
    setTodos(newTodos);
    setTodosDone([...todosDone, e]);
    localStorage.setItem('todosLocal', JSON.stringify(newTodos))
    localStorage.setItem('todosDoneLocal', JSON.stringify([...todosDone, e]))
  }
  return (
    <div className='todo__container'>
        <h2>Title:{info.title}</h2>
        <p>Tags: {info.tag}</p>
        <p>Description: {info.description}</p>
        <button onClick={() => sendDone(info)}>
          Done
        </button>
    </div>
  )
}
