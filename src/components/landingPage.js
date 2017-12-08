import React, { Component } from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import Bar from './bar';

const windowHeight = Dimensions.get('window').height;

const picUrl = 'http://easyconferences.eu/issc2016/images/santorini-bg1.jpg';

export default class LandingPage extends Component {
  render() {
    const text = 'Where do you want to go next?';
    const {
      mainStyle,
      bgStyle,
      imgStyle,
      contentStyle,
      bannerStyle,
      bannerContStyle,
      textContStyle,
      textStyle
    } = styles;

    return (
      <View style={mainStyle}>
        <View style={bgStyle}>
          //background image
          <Image style={imgStyle} source={{ uri: picUrl }} />
        </View>
        <View style={contentStyle}>
          //content
          <View style={bannerContStyle}>
            //banner
            <View style={bannerStyle}>
              <Text style={{ color: 'white', fontSize: 32 }}>Travelly</Text>
              <Text style={{ color: 'white', fontSize: 32 }}>||||</Text>
            </View>
          </View>
          <View style={textContStyle}>
            //main text
            <Text style={textStyle}>{text}</Text>
          </View>
          <View style={{ flex: 2 }}>
            //search bar
            <Bar placeholder="Start typing..." buttonText="GO" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  mainStyle: {
    flex: 1,
    height: windowHeight
  },
  bgStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  imgStyle: {
    flex: 1,
    resizeMode: 'cover'
  },
  contentStyle: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  bannerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    margin: 5
  },
  bannerContStyle: {
    //banner
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  textContStyle: {
    flex: 3,
    justifyContent: 'center'
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 52,
    color: 'white'
  }
};
