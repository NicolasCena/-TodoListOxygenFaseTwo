import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "../context/AppProvider";


//Components
import { Header } from "../components/Header";
import { NotFound } from "../components/NotFound";
import { Home } from "./Home";
import { SectionTodo } from "./SectionTodo";

export const Navigation = () => {

  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    const todosLocal = localStorage.getItem("todosLocal");
    const todosDoneLocal = localStorage.getItem("todosDoneLocal");

    dispatch({
      type: "SET_TODOS",
      payload: todosLocal ? JSON.parse(todosLocal) : [],
    });
    dispatch({
      type: "SET_TODOSDONE",
      payload: todosDoneLocal ? JSON.parse(todosDoneLocal) : [],
    });
  }, []);

  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<SectionTodo />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}
