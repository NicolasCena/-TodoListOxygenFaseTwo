import React,{  useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from "../context/AppProvider";
import error404 from '../assets/notfound.png'
import { Loading } from "../components/Loading";

export const NotFound = () => {
  const {  state,dispatch } = useContext(AppContext);
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
    <>
    {
      state.flag ? <Loading /> : 
      (
      <div className='d-flex justify-content-center h-100 w-100 align-items-center'>
        <img src={error404} alt="Error 404" className='w-50 h-50 d-flex' />
        <button className='btn btn-primary'><Link to="/" className=' text-dark'>Volver</Link></button>
      </div>
      )
    }

    </>
  )
}
