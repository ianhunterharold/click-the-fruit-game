import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import CountdownTimer from './Countdown';

class Coconut extends Component {

  state = {
    'coconutCount': 0
  }

  handleClickedCoconut = () => {
    var newCoconutCount = this.state.coconutCount + 1
    this.setState({
      'coconutCount': newCoconutCount
    })
  }

  render(){
    
    const coocnutImage = require('../img/coconut.png');
    //might not be best place to put images 1/11  

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={ ()=> this.handleClickedCoconut()} >
            <Image 
              style={{ width: 50, height: 50}}
              source={ coocnutImage }
            />
        </TouchableOpacity>
        <Text>{this.state.coconutCount}</Text>
        <View>
          <CountdownTimer/>
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


