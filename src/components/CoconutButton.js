import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';

class CoconutButton extends Component {

  state = {
    'time': 10
  }

  triggerTimerEvents(){
    quantity = this.state.time;
    if (quantity < 1){
      // reset quantity back to 10
      this.setState({
        'time': 10
      })

      // spawn new coconut (if available)

      // reset animation

      // ...
    }
  }

  handleClickedCoconut = () => {
    // update countdown count
    var newCount = this.state.time - 1

    // set the state
    this.setState({
      'time': newCount
    })

    // trigger possible events now that the count has changed
    this.triggerTimerEvents()
  }

  countingDownCoconutTime = () => {
    setInterval( () => { 
      // update countdown count
      var counter = this.state.time - 1
      
      // set the state
      this.setState({
        'time': counter
      })

      // trigger possible events now that the count has changed
      this.triggerTimerEvents()
      
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


