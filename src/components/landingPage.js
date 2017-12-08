import React, { Component } from 'react';
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
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
          <Image style={imgStyle} source={{ uri: picUrl }} />
        </View>
        <View style={contentStyle}>
          <View style={bannerContStyle}>
            <View style={bannerStyle}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 32,
                  fontFamily: 'Open Sans'
                }}
              >
                travelly
              </Text>
              <TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 32 }}>||||</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={textContStyle}>
            <Text style={textStyle}>{text}</Text>
          </View>
          <View style={{ flex: 2 }}>
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
    margin: 5,
  },
  bannerContStyle: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  textContStyle: {
    flex: 3,
    justifyContent: 'center'
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 52,
    color: 'white',
    fontFamily: 'Open Sans'
  }
};
