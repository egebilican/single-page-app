import React from 'react';
import { View, TextInput,Text } from 'react-native';
import Button from './button';

const Bar = props => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.formStyle}>
        <TextInput
          autoCorrect={false}
          style={[styles.inputStyle, props.style]}
          placeholder={props.placeholder}
          placeholderTextColor = {props.placeholderTextColor||'black'}
          underlineColorAndroid="transparent"
        />
        <Button>{props.buttonText}</Button>
      </View>
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,    
    backgroundColor: 'white'
  },
  containerStyle: {
    height: 40,
    marginRight: 5,
    marginLeft: 5,
    alignItems: 'center'
  },
  formStyle: {
    maxWidth: 500,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  }
};

export default Bar;
