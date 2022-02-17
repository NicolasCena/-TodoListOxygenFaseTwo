import React,{useContext} from 'react';
import { DELETE_TODO, RETURN_TODO } from '../context/actions';
import { AppContext } from "../context/AppProvider";


//STYLES
import "../styles/todoDone.css";

export const TodosDone = ({info}) => {

  const { dispatch } = useContext(AppContext);

  return (
    <div className="card text-white bg-light mb-3 w-75 shadow" >
      <div className="card-header text-dark text-center fs-2 fw-bold">{info.title}</div>
      <div className="card-body">
      <div className="card-title todo__tag-container">
          {
            info.tag.map((tag, index) => 
              <p key={index} className="todo__tag" style={{backgroundColor: tag.colorTag}}>{tag.titleTag}</p>
            )
          }
        </div>
        <p className="card-text text-dark">Description: {info.description}</p>
      </div>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-danger text-dark m-2" onClick={() => dispatch({type: DELETE_TODO, payload: info})} >Eliminar</button>
          <button className="btn btn-success text-dark m-2" onClick={() => dispatch({ type: RETURN_TODO, payload: info })}>Return</button>
        </div>
    </div>
  )
}
