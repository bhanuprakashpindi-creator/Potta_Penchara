import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("This Is Parent Constructor");
  }
  componentDidMount() {
    console.log("This is parent ConstructorDidMount");
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is About Page...</h2>
        <div>
          <UserContext.Consumer>
            {({ loggedinUser }) => <h1>{loggedinUser}</h1>}
          </UserContext.Consumer>
        </div>

        <UserClass location="eluru district" />
        <UserClass location="hello" />
      </div>
    );
  }
}
export default About;
