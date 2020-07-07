import React, { Component } from 'react';
import {Modal, Text, TouchableHighlight, View, Linking, Image} from 'react-native';
import customStyles from './customStyles'

const logo = require('../img/coco-loco-logo.png');


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
          presentationStyle="overFullScreen">
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
            style={customStyles.hideButton}>
            <Text style={customStyles.hideButtonText}>X</Text>
          </TouchableHighlight>
          <View style={customStyles.modalContainer}>
            <View style={customStyles.main}>
              <Image source={logo} />
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 40,
                  fontSize: 20,
                  color: '#47b9c1',
                  fontWeight: 'bold',
                  marginBottom: 3,
                }}
                onPress={() =>
                  Linking.openURL(
                    'https://brianshaffer.com/cocoloco-store-redirect',
                  )
                }>
                Rate Us
              </Text>
              <Text
                style={{textAlign: 'center', marginBottom: 20}}
                onPress={() =>
                  Linking.openURL(
                    'https://brianshaffer.com/cocoloco-store-redirect',
                  )
                }>
                ⭐️⭐️⭐️⭐️⭐️
              </Text>
            </View>

            <View style={customStyles.author}>
              <Text style={customStyles.authors}>
                Created by{' '}
                <Text
                  onPress={() => Linking.openURL('https://brianshaffer.com')}
                  style={customStyles.link}>
                  Brian Shaffer
                </Text>{' '}
                &{' '}
                <Text
                  onPress={() =>
                    Linking.openURL('https://github.com/ianhunterharold')
                  }
                  style={customStyles.link}>
                  Ian Hunter Harold
                </Text>
              </Text>

              <Text
                onPress={() =>
                  Linking.openURL(
                    'https://www.freepik.com/free-photos-vectors/background',
                  )
                }
                style={{textAlign: 'center'}}>
                Images provided by freepik.com
              </Text>
              <Text
                onPress={() =>
                  Linking.openURL(
                    'https://pixabay.com/users/lethutrang101-6596164/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3121393',
                  )
                }
                style={{textAlign: 'center'}}>
                Background graphic by Trang Le
                <Text
                  onPress={() =>
                    Linking.openURL(
                      'https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=312139',
                    )
                  }>
                  From Pixabay
                </Text>
              </Text>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
          style={customStyles.aboutButton}>
          <Text style={customStyles.aboutText}>i</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default InformationModal;

