import { UserContext, UserPlayer, UserStadium } from "../App";

function UseContextE() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <UserPlayer.Consumer>
              {(player) => {
                return (
                  <UserStadium.Consumer>
                    {(stadium) => {
                      return (
                        <div>
                          The best club is {user}, and the best ever player is
                          {player}, and finally the best stadium is {stadium}
                        </div>
                      );
                    }}
                  </UserStadium.Consumer>
                );
              }}
            </UserPlayer.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
export default UseContextE;
