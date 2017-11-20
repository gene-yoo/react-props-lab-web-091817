// Code The Spaceship Component Here
import React from "react";

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h2>Speed: {this.props.speed}</h2>
        <h3>
          {this.props.hasRockets
            ? "This spaceship rocks."
            : "This spaceship is lame."}
        </h3>
        <p>
          {this.props.colors.length > 1
            ? `This spaceship has the following colors: ${this.props.colors.join(
                " ,"
              )}`
            : `This spaceship has one color - ${this.props.colors[0]}`}
        </p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  name: "Initial name",
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
};

export default Spaceship;
