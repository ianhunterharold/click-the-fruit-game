import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Coconut extends Component {

  state = {
    '😃': '😃 Smiley',
		'🚀': '🚀 Rocket',
    '⚛️': '⚛️ Atom Symbol',
    'Clicks': 0
  }

  handlePressedButton = () => {
    var newCount = this.state.Clicks + 1 
    this.setState({
      'Clicks': newCount
    })
  }




  render(){
    return (


      <View style={styles.container}>

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


