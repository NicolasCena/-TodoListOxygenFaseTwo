import React,{ useState, useContext } from 'react';
import { ADD_TODO } from '../context/actions';
import { AppContext } from "../context/AppProvider";

//Components
import { Tag } from './Tag'


export const FormTodos = () => {
    const {  dispatch } = useContext(AppContext);


    const [DescriptionTodo, setDescriptionTodo] = useState('');
    const [TagTodoList, setTagTodoList] = useState([]);
    const [TagTodo, setTagTodo] = useState('');
    const [TitleTodo, setTitleTodo] = useState('');
    const [TagColor, setTagColor] = useState('');

    
    const onSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: new Date().getTime(), //genera un id unico
            title: TitleTodo,
            description: DescriptionTodo,
            tag: TagTodoList,
        }
        dispatch({
            type: ADD_TODO,
            payload: newTodo
        })
        //SETEO DE LOS INPUTS
        setTitleTodo('')
        setDescriptionTodo('')
        setTagTodo('')
        setTagTodoList([])
    }

    const onReset = () => {
        setTitleTodo('')
        setDescriptionTodo('')
        setTagTodo('')
        setTagTodoList([])
    }

    const addTag = () => {
        const newTag = {
            titleTag: TagTodo,
            colorTag: TagColor,
        }
        setTagTodoList([...TagTodoList, newTag ])
        setTagTodo('')

    }

  return (
    <div className='d-flex justify-content-center align-items-center'>
        
        <form onSubmit={e => onSubmit(e)} className='container' >
        <div className='row m-auto' >

            <div className='text-center col-12'>
                <h1 className='text-light'>Crear To-Do</h1>
            </div>
            <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center flex-column'>
                <label className='text-light mx-2 d-flex justify-content-start w-100'> Titulo </label>
                <input placeholder="Title" value={TitleTodo}  className="form-control mx-2" onChange={e => setTitleTodo(e.target.value)}/>
      
            </div>

            <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center flex-column '>
                <label className='text-light mx-2 d-flex justify-content-start w-100'> Tag </label>
                <div className=" mx-2 text-center justify-content-center align-items-center d-flex bg-light form-control">
                    <input value={TagTodo} placeholder="Tag"  className="mx-2 form-control" onChange={e => setTagTodo(e.target.value)} />
                    <input type="color" placeholder="Color"  className="mx-2 form-control" onChange={e => setTagColor(e.target.value)}/>
                </div>
            
                <p className="form-control btn btn-info" onClick={addTag}>Agregar Tag</p>

                <div className='container'>
                    <div className='row'>
                    { TagTodoList.map((tag, index) => (
                        <Tag  tag={tag} key={index} index={index} />
                    ))}
                    </div>
                </div>
            </div>

            <div className='col-12 my-2 d-flex justify-content-center align-items-center flex-column'>
                <label className='text-light mx-2 d-flex justify-content-start w-100'> Description </label>
                <textarea value={DescriptionTodo} placeholder="Description" className="form-control mx-2" onChange={e => setDescriptionTodo(e.target.value)}/>
            </div>

            <div className='d-flex justify-content-center align-items-center my-4'>
                <button className='btn btn-success mx-2' type="submit" >
                    Crear
                </button>
                <button className='btn btn-danger mx-2'  onClick={onReset} >
                    Resetear
                </button>
            </div>
        </div>
        </form>
        
    </div>
  )
}
