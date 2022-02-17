import React,{ useContext, useEffect } from 'react';
import { AppContext } from "../context/AppProvider";
//Components
import { BoxTodos } from "../components/BoxTodos";
import { BoxDone } from "../components/BoxDone";
import { Loading } from "../components/Loading";
import notask from '../assets/notask.png'


export const SectionTodo = () => {
    const { state, dispatch } = useContext(AppContext);
    useEffect(() => {
      dispatch({
        type: 'LOADING',
        payload: true
      })

      setTimeout(() => {
        dispatch({
          type: 'LOADING',
          payload: false
        })
      } , 2000);
    } , [])

  return (
    <>d
    {
      state.flag ? <Loading /> :
      (<>
        {
          
          ((state.todo.length || state.todoDone.length) > 0) ?
          (
          <div className="container">
            <div className="row">
              <BoxTodos/>
              <BoxDone/>
            </div>
          </div>
          ) 
          :
          (
          <div className='d-flex justify-content-center h-100 w-100 align-items-center'>
            <img src={notask} alt="Sin tareas" className='w-25 h-25 d-flex' />
            <h1 className='text-light'>No homeworks</h1>
          </div>
          )
          
        }
        </>
      )
    }
    </>
  )
}
