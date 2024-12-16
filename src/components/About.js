import React from "react";
import UserClass from "./UserClass";
import UserFunction from "./UserFunction";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>This is About Page</h1>
        <hr></hr>
        <UserClass name="Gautam Madiratta - 1"></UserClass>
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>This is About Page</h1>
//       <hr></hr>
//       <UserFunction name="Gautam Madiratta - 1"></UserFunction>
//       <hr></hr>
//       <UserClass name="Gautam Madiratta - 2"></UserClass>
//     </div>
//   );
// };

export default About;
