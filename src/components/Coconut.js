import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
// import CountdownTimer from './Countdown';

class Coconut extends Component {

  state = {
    'time': 10
  }

  handleClickedCoconut = () => {
    var prevState = this.state.time 
    this.setState({
      'time': prevState - 1
    })
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
        <View>
          {/* <CountdownTimer/> */}
        </View>
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

export default Coconut;


