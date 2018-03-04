import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

import SocialFeedScreen from '../screens/SocialFeedScreen'
import { Button, Input } from 'react-native-elements';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

import { Font } from 'expo';


export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      screen: null,
    };
  }

  // async componentDidMount() {
  //   await Font.loadAsync({
  //     'OpenSans-SemiBoldItalic': require('../assets/fonts/OpenSans-SemiBoldItalic.ttf')
  //   });
  //   this.setState({ fontLoaded: true });
  // }


  loginButtonPressed() {
    const { email, password } = this.state;

    if (email.length === 0 && password.length === 0) {
      Alert.alert(
        'Error!',
        `Your email or password is empty `,
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      )
    }
    else if (this.loginValid) {
      this.setState({ screen: 'SocialFeedScreen' });

      Alert.alert(
        'Success! Your login: ',
        `Email: ${email}  \nPassword: ${password}`,
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      )

    }
  }
  
  loginValid() {
    const { email, password } = this.state

    return email.length > 0 && password.length > 0
  }



  render() {
    const { screen } = this.state

    if (screen === 'SocialFeedScreen') {
      return <SocialFeedScreen />;
    }

    return (
      <View style={styles.mainContainer}>

        <View style={styles.inputFieldContainer}>
          <Input
            placeholder='Email'
            placeholderTextColor="white"
            inputStyle={{ color: "white" }}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            value={this.state.email}
            onChangeText={(text) => this.setState({ email: text })}
            containerStyle={styles.textInput}
            leftIcon={
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color="white"

              />
            }
          />

          <Input
            placeholder='Password'
            placeholderTextColor="white"
            inputStyle={{ color: "white" }}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}
            containerStyle={styles.textInput}
            leftIcon={
              <MaterialCommunityIcons
                name="lock-outline"
                size={24}
                color="white"

              />
            }
          />

          <TouchableOpacity
            style={[styles.toggleButton, !this.loginValid() && { backgroundColor: '#FF385E' }]}
            onPress={this.loginButtonPressed.bind(this)}>
            <Text style={styles.toggleText}> Login </Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#3C375D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  toggleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 40,
    height: 50,
    width: 200,
  },

  inputFieldContainer: {
    flexDirection: 'column',
    padding: 10,
    marginTop: 80,
    alignItems: 'center',
    marginVertical: 20
  },
  textInput: {
    height: 50,
    width: 300,
    borderRadius: 53,
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 10,
  },

  toggleText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    // fontFamily: 'OpenSans-SemiBoldItalic'
  },

});
