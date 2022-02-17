import React,{useContext} from 'react';
import { AppContext } from "../context/AppProvider";

//Components
import { TodosDone } from './TodosDone';

export const BoxDone = () => {

  const { state } = useContext(AppContext);
  return (
    <div className='container h-100 w-100'>
      <div className='row d-flex justify-content-center align-items-center'>
    { state.todoDone.length > 0  ? 
      (
        <>
          <h1 className='text-light text-center badge bg-secondary w-50 fs-2'>To-Do Done</h1>
          {
            state.todoDone.map((info,index) => (
                <TodosDone 
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
