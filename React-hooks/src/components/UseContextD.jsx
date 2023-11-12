import UseContextE from "./UseContextE";
import { UserContext, UserPlayer } from "../App";
import { useContext } from "react";

function UseContextD() {
  const User = useContext(UserContext);
  const Player = useContext(UserPlayer);

  return (
    <div>
      <UseContextE />
      <div>
        <h2>This is use context</h2>
        {User} and {Player}
      </div>
    </div>
  );
}
export default UseContextD;
