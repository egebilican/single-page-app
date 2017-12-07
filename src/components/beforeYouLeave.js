import React, { Component } from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import Bar from './bar';
import Box from './box';

const windowHeight = Dimensions.get('window').height;
const remote =
  'https://cdn1.ntv.com.tr/gorsel/dunya/yunanistanin-santorini-adasi-artik-turist-istemiyor/santorini-yoredeki-yanardagin-patlamasiyla-ortaya-cikti,Llbn_51rMU6WyefOfwUf8Q.jpg?width=960&mode=crop&scale=both&v=20170901154541297';

export default class BeforeYouLeave extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <View>
          <Text style={styles.headerStyle}>Before You Leave</Text>
        </View>

        <View style={styles.boxContainerStyle}>
          <Box header="VISA&DOCUMENTS">
            There are some things you should take care of before going to your
            next adventure. We will help you to get required visas and documents
            needed.
          </Box>
          <Box header="ACCOMODATION">
            There are some things you should take care of before going to your
            next adventure. We will help you to get required visas and documents
            needed.
          </Box>
          <Box header="TRANSPORTATION">
            There are some things you should take care of before going to your
            next adventure. We will help you to get required visas and documents
            needed.
          </Box>
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Montserrat',
            fontWeight: '900'
          }}
        >
          GET HOTTEST DEALS TO YOUR INBOX
        </Text>
        <Bar 
        placeholder='E-mail adress'
        buttonText='Subscribe'
        placeholderTextColor= 'white'
        style={{backgroundColor: 'rgba(0,0,0,0.1)'}}
        />

      </View>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: 'rgb(255,255,255)',
    justifyContent: 'center',
    // paddingBottom: '70px'
    padding: 20
  },
  headerStyle: {
    fontSize: 30,
    fontFamily: 'Montserrat',
    // paddingLeft: '10px',
    //  paddingTop: '60px',
    color: 'rgb(50,50,50)'
    //    fontWeight: '500'
  },
  headerDescStyle: {
    fontFamily: 'Open Sans',
    color: 'rgb(139,139,139)',
    fontSize: 15
    //    fontWeight: 400
  },
  boxContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
};
