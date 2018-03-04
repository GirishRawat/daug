import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import { SOCIAL_FEED_MOCK_DATA } from '../utils/constants';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from '../screens/ProfileScreen';
import { Font } from 'expo';

export default class SocialFeedScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log("log 1");
    state = {
      fontLoaded: false,
    };

    this.state = { screen: null };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'billabong': require('../assets/Billabong.ttf')
    });
    this.setState({ fontLoaded: true });
  }


  renderProfile = () => {
    this.setState({ screen: 'ProfileScreen' })
    console.log("test");

  }

  // this will render one post
  renderItem = ({ item }) => {
    return (

      <View style={styles.itemContainer}>
        <View style={styles.headerContainer}>
          <Image
            source={{ uri: item.image }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
          {this.state.fontLoaded &&
            <View style={styles.nameLocationContainer}>
              <TouchableOpacity style={styles.nameContainer}
                onPress={this.renderProfile}
              >
                <Text style={styles.nameAndLocationContainer}> {item.name} </Text>
              </TouchableOpacity>
              <Text style={styles.nameAndLocationContainer}> {item.location} </Text>
            </View>
          }
        </View>



        <Image
          source={{ uri: item.post["image"] }}
          style={{
            width: "100%",
            height: 400,
          }}
        />

        <View style={styles.captionContainer}>
          <Text> {item.post["caption"]}</Text>
        </View>

        <View style={styles.dateContainer}>
          <Text> {item.post["date"]}</Text>
          <View style={styles.iconButtonContainer}>

            <Ionicons
              name="ios-heart-outline"
              size={30}
              color='#085947'
              style={{ paddingRight: 12 }}
            />

            <Ionicons
              name="ios-chatbubbles-outline"
              size={30}
              color='#085947'
              style={{ paddingRight: 12 }}
            />

            <Ionicons
              name="ios-paper-plane-outline"
              size={30}
              color='#085947'
              style={{ paddingRight: 12 }}
            />

          </View>

        </View>



      </View>
    )

  }


  render() {

    const { screen } = this.state

    if (screen === 'ProfileScreen') {
      return <ProfileScreen />;
    }

    return (

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.firstContainer}>
          <Text style={styles.bigLogo}> Daug </Text>
        </View>
        <FlatList
          style={styles.list}
          data={SOCIAL_FEED_MOCK_DATA}
          style={styles.container}
          keyExtractor={(item, index) => index}
          renderItem={(item) => this.renderItem(item)}

        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },

  bigLogo: {
    fontFamily: 'billabong',
    fontSize: 30
  },

  list: {
    flexGrow: 1
  },
  itemContainer: {
    flex: 1,


  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 25,
    paddingLeft: 5,
    paddingBottom: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  firstContainer: {
    flexDirection: 'row',
    paddingTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -12,
    backgroundColor: '#F5F5F5',
  },
  nameLocationContainer: {
    paddingLeft: 20,

  },

  nameAndLocationContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    // fontFamily: 'OpenSans-SemiBoldItalic'


  },

  captionContainer: {
    paddingTop: 5,
    justifyContent: 'space-around',
    
  },

  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  list: {
    flex: 1,
  },


});
