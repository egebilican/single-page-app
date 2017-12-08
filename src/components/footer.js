import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


const Footer = () => {
  const {bgStyle, footerContainerStyle, textStyle, buttonContainerStyle, buttonStyle} = styles;
  
  return (
    <View style={bgStyle}>
      <View style={footerContainerStyle}>
        <Text style={textStyle}>
          Copyright © 2014 Travelly. All Rights Reserved. Designed for
          Despreneur
        </Text>

        <View
          style={buttonContainerStyle}
        >
          <TouchableOpacity><Text style={buttonStyle}>HOME</Text></TouchableOpacity>
          <TouchableOpacity><Text style={buttonStyle}>ABOUT</Text></TouchableOpacity>
          <TouchableOpacity><Text style={buttonStyle}>BLOG</Text></TouchableOpacity>
          <TouchableOpacity><Text style={buttonStyle}>PRESS</Text></TouchableOpacity>
          <TouchableOpacity><Text style={buttonStyle}>CONTACT</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  bgStyle: {
    backgroundColor: 'rgb(238,238,238)',
    paddingBottom: 30,
    minHeight: 70,
    flex: 1
  },
  footerContainerStyle: {
    maxWidth: 1000,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  buttonStyle: {
    paddingLeft: 10,
    fontFamily: 'Montserrat',   
    fontWeight: '700' 
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  textStyle: {
    fontFamily: 'Open Sans', fontSize: 14, flex: 1
  }
};

export default Footer;
