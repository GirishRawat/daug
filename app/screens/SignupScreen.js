import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert  } from 'react-native';
import { LinearGradient, Font } from 'expo';
import { Button, Input } from 'react-native-elements';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import IntroScreen from '../screens/IntroScreen';

export default class SignupScreen extends React.Component {
 
  constructor(props) {
    super(props);
    state = {
      fontLoaded: false,
    };

    this.state = {
      name: '',
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



  signUpButtonPressed(){
    const { name, email, password } = this.state;
    this.setState({ screen: 'IntroScreen' });

    return (
      Alert.alert(
        'Success! Your login: ',
        `Name: ${name}\nEmail: ${email}\nPassword: ${password}`,
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      )
    )

  }

  loginValid() {
    const { email, password } = this.state

    return email.length > 0 && password.length > 0
  }


  render() {
    const { screen } = this.state

    if (screen === 'IntroScreen') {
      return <IntroScreen />;
    }
    return (
      <View style={styles.mainContainer}>

       <View style = {styles.inputFieldContainer}>

          <Input
	           placeholder='Name'
          	 placeholderTextColor="white"
	          inputStyle={{ color: "white"}}
	          autoCapitalize="none"
          	autoCorrect={false}
            returnKeyType="next"
            value={this.state.name}
            onChangeText={(text) => this.setState({name: text})}
            onSubmitEditing={this.handleSubmit}
           	containerStyle={styles.textInput}
             leftIcon={
              <MaterialCommunityIcons
              name="contacts"
              size={24}
              color="white"
	
	           />
           	}
           />

        <Input
	           placeholder='Email'
          	 placeholderTextColor="white"
	          inputStyle={{ color: "white"}}
	          autoCapitalize="none"
          	autoCorrect={false}
            returnKeyType="next"
            value={this.state.email}
            onChangeText={(text) => this.setState({email: text})}
            onSubmitEditing={this.handleSubmit}
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
	          inputStyle={{ color: "white"}}
	          autoCapitalize="none"
          	autoCorrect={false}
            returnKeyType="next"
            value={this.state.password}
            onChangeText={(text) => this.setState({password: text})}
            onSubmitEditing={this.handleSubmit}
           	containerStyle={styles.textInput}
            // If email input is wrong use: shake={true}
             leftIcon={
              <MaterialCommunityIcons
              name="lock-outline"
              size={24}
              color="white"
	
	           />
           	}
           />

        <TouchableOpacity
          style={[styles.toggleButton, !this.loginValid() && { backgroundColor: '#FF385E'}] }
          disabled={!this.loginValid()}
          onPress={this.signUpButtonPressed.bind(this)}>
         <Text style={styles.toggleText}> Sign Up </Text>
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
  inputFieldContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 20,
    marginTop: 15,
    padding: 10,

    
  },
  textInput : {
    height: 50,
    width: 300,
    paddingLeft: 8,
    borderRadius: 53,

    borderColor: 'white',
    marginVertical: 10,


      
  },
  toggleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 10,

    borderRadius: 50,
    marginTop: 40,
    height: 50,
    width: 200,
    

  },
  toggleText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },

});
