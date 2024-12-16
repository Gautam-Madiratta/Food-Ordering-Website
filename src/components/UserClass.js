import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        Location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Gautam-Madiratta");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // this.timer = setInterval(() => {
    //   console.log("Timer");
    // }, 1000);

    console.log("Component did update");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("Component will unmount");
  }

  render() {
    const { name, location, url, avatar_url } = this.state.userInfo;
    return (
      <div>
        <img src={avatar_url} style={{ height: "100px" }}></img>
        <h1>{name}</h1>
        <h3>Location : {location}</h3>
        <h4>contact : {url}</h4>
      </div>
    );
  }
}

export default UserClass;
