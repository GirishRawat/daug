import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

import { Font, LinearGradient } from 'expo';

// import IntroSlider from '../components/IntroSlider';
import LoginScreen from './LoginScreen';
// import SignupScreen from './SignupScreen';
// import ProfileScreen from './ProfileScreen';
// import SocialFeedScreen from './SocialFeedScreen';
import LOGO from '../../assets/daug_logo.png';

export default class IntroScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screen: null
    };
  }

  onButtonPressed(type) {
    this.setState({ screen: type })
  }

  renderContent() {
    const { screen } = this.state

    if (screen == 'login') {
      return <LoginScreen />
    } else if (screen === 'signup') {
      // return <SignupScreen />
    } else if (screen === 'profile') {
      // return <ProfileScreen />
    } else if (screen === 'social') {
      // return <SocialFeedScreen />
    } else {
      return (
        <View style={styles.mainContent}>
          {/* <IntroSlider /> */}
          <LinearGradient
            colors={['#fd746c', '#ff9068']}
            style={styles.sliderContainer}>
            <Image source={LOGO} style={styles.logoImage} resizeMode="contain" />
            <Text style={styles.logoTitle}>DAUG</Text>
          </LinearGradient>
          {

            <View style={styles.introButtonsContainer}>
              <TouchableHighlight
                activeOpacity={0.5}
                underlayColor="rgba(0, 0, 0, 0)"
                style={styles.buttonContainer}
                onPress={this.onButtonPressed.bind(this, 'login')}>
                <Text style={styles.buttonTitle}>Login</Text>
              </TouchableHighlight>
              <TouchableHighlight
                activeOpacity={0.5}
                underlayColor="rgba(0, 0, 0, 0)"
                style={styles.buttonContainer}
                onPress={this.onButtonPressed.bind(this, 'signup')}>
                <Text style={styles.buttonTitle}>Sign Up</Text>
              </TouchableHighlight>
            </View>
          }
        </View>
      )
    }
  }

  render() {
    return (
      this.renderContent()
    );
  }
}

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 150,
    height: 150,
    marginBottom: 10
  },
  logoTitle: {
    color: 'white',
    fontSize: 32
  },
  mainContent: {
    flex: 1
  },
  introButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fd746c',
    paddingBottom: 25
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTitle: {
    color: 'white',
    fontSize: 20,
    // fontFamily: 'Righteous'
  }
});