import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
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

        <UserClass location="eluru district" />
        <UserClass location="hello" />
      </div>
    );
  }
}
export default About;
