import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';

import { Button } from 'react-native-elements';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import ProfileScreen from './ProfileScreen';
import SocialFeedScreen from './SocialFeedScreen';
import LOGO from '../../assets/daug_logo.png';

export default class IntroScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            screen: null
        };
    }

    renderContent() {

    }

    render() {
        return (
            this.renderContent()
        );
    }
}