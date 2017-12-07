import React from 'react';
import { Text, View } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.bgStyle}>
      <View style={styles.footerContainer}>
        <Text style={{ fontFamily: 'Open Sans', fontSize: 14 }}>
          Copyright © 2014 Travelly. All Rights Reserved. Designed for
          Despreneur
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.buttonStyle}>HOME</Text>
          <Text style={styles.buttonStyle}>ABOUT</Text>
          <Text style={styles.buttonStyle}>BLOG</Text>
          <Text style={styles.buttonStyle}>PRESS</Text>
          <Text style={styles.buttonStyle}>CONTACT</Text>
        </View>
      </View>
    </View>
  );
};

const styles = {
  bgStyle: {
    backgroundColor: 'rgb(238,238,238)',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 70
  },
  footerContainer: {
    maxWidth: 1000,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonStyle: {
    paddingLeft: 10,
    fontFamily: 'Montserrat'
  }
};

export default Footer;
