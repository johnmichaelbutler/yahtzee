import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    const { locked, val, disabled, rolling } = this.props;
    const numberWords = ["one", "two", "three", "four", "five", "six"];
    let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x `;
    if (locked) classes += "Die-locked ";
    if(rolling) classes += "Die-rolling";
    return (
      <i
        className={classes}
        onClick={this.props.handleClick}
        disabled={disabled}
      />
    );
  }
}

export default Die;
