//STYLES
import "../styles/TodoDone.css";
export const TodosDone = ({info, setTodosDone, todosDone, todos, setTodos}) => {
  const deleteTodo = (e) => {
    const newDoneList = todosDone.filter( todo => todo.id !== e.id);
    setTodosDone(newDoneList);
    localStorage.setItem('todosDoneLocal', JSON.stringify(newDoneList))

  }

  const returnTodo = (e) => {
    const newDoneList = todosDone.filter( todo => todo.id !== e.id);
    setTodosDone(newDoneList);
    setTodos([...todos, e]);
    localStorage.setItem('todosLocal', JSON.stringify([...todos, e]));
    localStorage.setItem('todosDoneLocal', JSON.stringify(newDoneList))


  }

  return (
    <div className='todo__container'>
        <h2>Title:{info.title}</h2>
        <p>Tags: {info.tag}</p>
        <p>Description: {info.description}</p>
        <button onClick={() => deleteTodo(info)}>Eliminar Todo</button>
        <button onClick={() => returnTodo(info)}>Return Todo</button>

    </div>
  )
}
