import React, { Component } from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import Bar from './bar';



const windowHeight = Dimensions.get('window').height;


const remote =
  'https://cdn1.ntv.com.tr/gorsel/dunya/yunanistanin-santorini-adasi-artik-turist-istemiyor/santorini-yoredeki-yanardagin-patlamasiyla-ortaya-cikti,Llbn_51rMU6WyefOfwUf8Q.jpg?width=960&mode=crop&scale=both&v=20170901154541297';

export default class LandingPage extends Component {
  render() {
    const resizeMode = 'cover';
    const text = 'Where do you want to go next?';

    return (
      <View
        style={{
          flex: 1,
          height:windowHeight,
          backgroundColor: '#eee'
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        >
          <Image
            style={{
              flex: 1,
              resizeMode
            }}
            source={{ uri: remote }}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center'
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
              color: 'white'
            }}
          >
            {text}
          </Text>
          <Bar 
            placeholder='Start typing...'
            buttonText='GO'
            />
        </View>
      </View>
    );
  }
}
