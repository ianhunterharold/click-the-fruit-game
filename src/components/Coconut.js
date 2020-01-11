import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

class Coconut extends Component {

  state = {
    '😃': '😃 Smiley',
    '🌴':null,
    'Clicks': 0
  }

  handlePressedButton = () => {
    var newCount = this.state.Clicks + 1 
    this.setState({
      'Clicks': newCount
    })
  }




  render(){

    const palmTreeImage = require('../../ios/img/palm.png'); 

    return (
      <View style={styles.container}>
        <Image
          style={{width: 200, height: 200}}
          source={ palmTreeImage }
        />
        <Button
          onPress={ () => {
            this.handlePressedButton()
          }}
          title={this.state['😃']}
        />

				{/* <Text>{this.state['😃']}</Text>
        <Text>{this.state['🚀']}</Text>
        <Text>{this.state['⚛️']}</Text> */}
        <Text>Clicks {this.state.Clicks}</Text>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default Coconut;


