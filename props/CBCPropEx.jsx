import React, { Component } from 'react';

class CBCPropEx extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <h1>{this.props.username}</h1>
        <h2>{this.props.age}</h2>
        <ul>
          {this.props.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        <h1>{this.props.address.city}</h1>
        <button onClick={this.props.sendfun}>Click</button>
      </div>
    );
  }
}

export default CBCPropEx;