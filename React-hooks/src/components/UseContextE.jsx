import { UserContext, UserContextTwo } from "../App";

function UseContextE() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <UserContextTwo.Consumer>
              {(usertwo) => {
                return (
                  <div>
                    User context one {user}, User context two {usertwo}
                  </div>
                );
              }}
            </UserContextTwo.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
export default UseContextE;
