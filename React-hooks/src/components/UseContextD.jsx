import { useContext } from "react";
import { UserContext, UserContextTwo } from "../App";
import UseContextE from "./UseContextE";

function UseContextD() {
  const UserOne = useContext(UserContext);
  const Usertwo = useContext(UserContextTwo);

  return (
    <div>
      {UserOne} - {Usertwo}
    </div>
  );
}
export default UseContextD;
