import React, { useContext} from 'react';
import { AppContext } from "../context/AppProvider";

//Components
import { Todos } from './Todos.jsx';

export const BoxTodos = () => {

  const { state } = useContext(AppContext);
 
  return (
    <div className='container  my-3'>
      <div className='row  d-flex justify-content-center align-items-center'>
    { state.todo.length > 0  ? 
      (
        <>
      
          <h1 className='text-light text-center badge bg-secondary w-50 fs-2'>To-Do</h1>
          {
            state.todo.map((info,index) => (
                <Todos 
                info={info} 
                key={index}  
                />
            ))
          }
        </>
      ) 
      :
      (
      <></>
      )
    }
        </div>
    </div>
  )
}
