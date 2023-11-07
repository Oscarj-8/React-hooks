import React from "react";
import "./App.css";
import UseEffect from "./components/UseEffect";
import UseContextC from "./components/UseContextC";
import UseReducer from "./components/UseReducer";

export const UserContext = React.createContext();
export const UserPlayer = React.createContext();
export const UserStadium = React.createContext();

function App() {
  return (
    <>
      <UseEffect />
      <UserContext.Provider value={"Chelsea Fc"}>
        <UserPlayer.Provider value={"Lionel Messi"}>
          <UserStadium.Provider value={"Stamford Bridge"}>
            <UseContextC />
          </UserStadium.Provider>
        </UserPlayer.Provider>
      </UserContext.Provider>
      <UseReducer />
    </>
  );
}

export default App;
