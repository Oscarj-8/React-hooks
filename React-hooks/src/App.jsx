import React from "react";
import "./App.css";
import UseEffect from "./components/UseEffect";
import UseContextC from "./components/UseContextC";

export const UserContext = React.createContext();
export const UserContextTwo = React.createContext();

function App() {
  return (
    <>
      <UseEffect />
      <UserContext.Provider value={"Oscar Junior"}>
        <UserContextTwo.Provider value={"Another One"}>
          <UseContextC />
        </UserContextTwo.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
