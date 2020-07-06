import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const coconut1 = require('../img/coconut-1.png');
const coconut2 = require('../img/coconut-2.png');
const coconut3 = require('../img/coconut-3.png');
const coconut4 = require('../img/coconut-4.png');
const coconut5 = require('../img/coconut-5.png');

class CoconutButton extends Component {

  state = {
    'time': 10,
    'currentCoconut': coconut1
  }

  triggerTimerEvents(time){
    if (time < 1){
      time = 10; 
      // force local variable to 10 for ripeness reset
      
      // reset time back to 10
      this.setState({
        'time': 10
      })

      // spawn new coconut (if available)
      this.props.callBackToAppSpawningNewCoconut()
      
    }else{
      // update timer with new time
      this.setState({
        'time': time
      })
    }

    if(time > 8){
      this.setState({ 'currentCoconut': coconut1 });
    }else if(time > 6){
      this.setState({ 'currentCoconut': coconut2 });
    }else if(time > 4){
      this.setState({ 'currentCoconut': coconut3 });
    }else if(time > 2){
      this.setState({ 'currentCoconut': coconut4 });
    }else if(time >= 0){
      this.setState({ 'currentCoconut': coconut5 });
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
    return (
      <View style={styles.coconutButtonContainer}>
        <TouchableOpacity
          onPress={() => this.handleClickedCoconut()}
          activeOpacity={0.8}>
          <View>
            <Image
              style={{width: 96.6, height: 105}}
              source={this.state.currentCoconut}
            />
            <Text style={styles.coconutButtontime}>{this.state.time}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

// leaving styles inside because of warning to update state on unmounted component
const styles = StyleSheet.create({
	coconutButtonContainer: {
		alignItems: 'center',
    marginTop: -7,
	},
  coconutButtontime: {
    position: 'absolute',
    top: 28,
    width: 96.6,
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 30
  }
});

export default CoconutButton;
