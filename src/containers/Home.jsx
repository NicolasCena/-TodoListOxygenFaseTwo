import React, { useContext, useEffect} from 'react';
import { AppContext } from '../context/AppProvider';

//COMPONENTS
import { FormTodos } from "../components/FormTodos";
import { Footer } from "../components/Footer";
import { Loading } from "../components/Loading";


export const Home = () => {

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
    <>
    {
      state.flag ? <Loading /> :
      (
      <>
        <FormTodos />
        <Footer/>
      </>
      )
    }
    </>
  )
}
