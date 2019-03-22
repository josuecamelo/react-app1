import React, { Component } from 'react';

class Clock extends Component {
  render() {
    const returnClock = () => {
      return new Date()
          .toLocaleString('en-US',{
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
          })
    }
    const color = 'red';
    return (
      <h1 className={color}>
        {
          returnClock()
        }
      </h1>
    );
  }
}

export default Clock;
