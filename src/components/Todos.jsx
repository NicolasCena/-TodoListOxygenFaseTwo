import React,{useContext} from 'react';
import { DONE_TODO } from '../context/actions';
import { AppContext } from "../context/AppProvider";


//STYLES
import "../styles/todo.css";
export const Todos = ({info}) => {

  const { dispatch } = useContext(AppContext);

  return (
    <div className="card text-white bg-primary mb-3 w-75 shadow" >
      <div className="card-header text-dark text-center fs-2 fw-bold">{info.title}</div>
      <div className="card-body">
      <div className="todo__tag-container">
          {
            info.tag.map((tag, index) => 
              <p key={index} className="todo__tag" style={{backgroundColor: tag.colorTag}}>{tag.titleTag}</p>
            )
          }
        </div>
        <p className="card-text text-dark">Description: {info.description}</p>
      </div>
      <div className='text-center my-2'>        
          <button onClick={() => dispatch({type: DONE_TODO, payload: info})} className="btn btn-dark">Done</button>
      </div>
    </div>
    
  )
}
