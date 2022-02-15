import React,{ useState } from 'react';

//STYLES
import "../styles/formTodos.css";

export const FormTodos = ({ todos, setTodos}) => {

    const [DescriptionTodo, setDescriptionTodo] = useState('');
    const [TagTodo, setTagTodo] = useState('');
    const [TitleTodo, setTitleTodo] = useState('');
    

    
    const onSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: new Date().getTime(), //genera un id unico
            title: TitleTodo,
            description: DescriptionTodo,
            tag: TagTodo,
        }
        setTodos([...todos, newTodo])
        localStorage.setItem('todosLocal', JSON.stringify([...todos, newTodo]))
        //SETEO DE LOS INPUTS
        setTitleTodo('')
        setDescriptionTodo('')
        setTagTodo('')
    }

  return (
    <div>
        <form onSubmit={(e) => onSubmit(e)} className="form__container">

            <div className="form__container-items">
            <label htmlFor="TitleTodo" className='input__title'>Titulo
                <input type="text" id="TitleTodo" placeholder="Titulo TODO" onChange={e => setTitleTodo(e.target.value)} />
            </label>

            <label htmlFor="TagTodo" className='input__tag'>Tags
                <input type="text" id="TagTodo" placeholder="Tag TODO" onChange={e => setTagTodo(e.target.value)} />
                <button type='text'>
                    Agregar Tag
                </button>
            </label>

            <label htmlFor="DescriptionTodo" className='input__description'>Description
                <textarea type="text" id="DescriptionTodo" placeholder="Description TODO" rows={5} cols={20} onChange={e => setDescriptionTodo(e.target.value)} />
            </label>

            <div className='form__button'>
                <button type="submit" disabled={ (TagTodo && TitleTodo && DescriptionTodo) === '' ? true : false}>
                    Crear
                </button>
                <button type="reset">
                    Resetear
                </button>
            </div>
            </div>
        </form>
    </div>
  )
}
