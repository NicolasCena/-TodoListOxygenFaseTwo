import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const AppContext = createContext();

//STATEINITIAL

export const initialState = {
  todo: [],
  todoDone: [],
  flag: false,
  
};


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

