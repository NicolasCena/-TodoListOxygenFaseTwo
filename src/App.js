import React from "react";
import AppProvider from "./context/AppProvider";
import { Navigation } from "./containers/Navigation";

function App() {
  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
}

export default App;
