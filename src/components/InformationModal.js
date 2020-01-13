import React, { Component } from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet, Linking} from 'react-native';


class InformationModal extends Component{
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          presentationStyle="overFullScreen"
          >
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
            style={styles.hideButton}>
            <Text style={styles.hideButtonText}>X</Text>
          </TouchableHighlight>
          <View style={styles.modalContainer}>
          	<View style={styles.main}>
	            <Text style={styles.logo}>🥥 Coco Loco 🌴</Text>
	            <Text style={{textAlign: 'center'}}>Grow your own coconut tree and harvest the fruit. I hear the flesh is super tasty 😃</Text>

  	          <Text style={{textAlign: 'center', marginTop: 40, fontSize: 20, color: '#47b9c1', fontWeight: 'bold', marginBottom: 3}} onPress={ ()=> Linking.openURL('https://brianshaffer.com/cocoloco-store-redirect') }>Rate Us</Text>
    	        <Text style={{textAlign: 'center', marginBottom: 20}} onPress={ ()=> Linking.openURL('https://brianshaffer.com/cocoloco-store-redirect') }>⭐️⭐️⭐️⭐️⭐️</Text>
    	      </View>

            <View style={styles.author}>
              <Text style={styles.authors}>Created with ❤️ by <Text onPress={ ()=> Linking.openURL('https://brianshaffer.com') } style={styles.link}>Brian Shaffer</Text> & <Text onPress={ ()=> Linking.openURL('https://github.com/ianhunterharold') } style={styles.link}>Ian Hunter Harold</Text></Text>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Info</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
	logo: {
		fontSize: 42,
		color: '#47b9c1',
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 40
	},
	link: {
		color: '#47b9c1',
		fontWeight: 'bold'
	},
	authors: {
		marginTop: 100
	},
	modalContainer: {
		flex: 1,
		backgroundColor: '#ece5ce',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20
	},
	hideButton: {
		position: 'absolute',
		width: 30,
		height: 30,
		top: 60,
		right: 20,
		zIndex: 9,
		backgroundColor: '#FFF',
		borderRadius: 30/2,
    borderColor: '#47b9c1',
    borderStyle: 'solid',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
	},
	hideButtonText: {
		fontSize: 15,
		color: '#47b9c1',
		fontWeight: 'bold'
	}

});

export default InformationModal;