import React, { Component } from "react";
import { Text, View } from 'react-native';

class CountdownTimer extends Component{

  state = {
  'time': 10
  }

  countingDownCoconutTime = () => {
    
    var counter = 10;
    setInterval( () => { 
      counter--;
      this.setState({
        'time': counter
      })
      if (counter == 0){
        counter = 10;
      }
    }, 1000);
  }

  componentDidMount(){
    this.countingDownCoconutTime()
  }

  render(){
    return(
      <View>
        <Text>{this.state.time} </Text>
      </View>

    )
  }
}

export default CountdownTimer;
