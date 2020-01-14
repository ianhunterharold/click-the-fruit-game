import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';

class CoconutButton extends Component {

  state = {
    'time': 10
  }

  triggerTimerEvents(time){
    if (time < 1){
      // reset time back to 10
      this.setState({
        'time': 10
      })

      // spawn new coconut (if available)

      // reset animation

      // ...
    }else{
      // update timer with new time
      this.setState({
        'time': time
      })
    }
  }

  handleClickedCoconut = () => {
    // update countdown count
    var newTime = this.state.time - 1

    // trigger possible events
    this.triggerTimerEvents(newTime)
  }

  countingDownCoconutTime = () => {
    setInterval( () => { 
      // update countdown count
      var newTime = this.state.time - 1

      // trigger possible events
      this.triggerTimerEvents(newTime)
    }, 1000);
  }

  componentDidMount(){
    this.countingDownCoconutTime()
  }

  render(){
    
    const coocnutImage = require('../img/coconut.png');
    //might not be best place to put images 1/11  

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={ ()=> 
          this.handleClickedCoconut()} >
            <Image 
              style={{ width: 50, height: 50}}
              source={ coocnutImage }
            />
        </TouchableOpacity>
        <Text>{this.state.time}</Text>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default CoconutButton;
