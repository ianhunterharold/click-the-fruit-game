import React, { Component } from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

class Timer extends Component { 
  
  render(){
    return (
      
      <CountdownCircleTimer
        onComplete={ () => {
            // do your stuff here
            return [true, 1500] // repeat animation in 1.5 seconds
        }}
        isPlaying
        durationSeconds={10}
        colors={[['#A30000']]}
      />
    )
  }
}

export default Timer;          