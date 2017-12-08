import React, { Component } from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import Bar from './bar';
import Box from './box';

const windowHeight = Dimensions.get('window').height;
const remote =
  'https://cdn1.ntv.com.tr/gorsel/dunya/yunanistanin-santorini-adasi-artik-turist-istemiyor/santorini-yoredeki-yanardagin-patlamasiyla-ortaya-cikti,Llbn_51rMU6WyefOfwUf8Q.jpg?width=960&mode=crop&scale=both&v=20170901154541297';

export default class TopDestinations extends Component {
  render() {
    const {containerStyle, headerStyle, headerDescStyle, boxContainerStyle} = styles;
    return (
      <View style={containerStyle}>
        <View>
          <Text style={headerStyle}>TOP DESTINATIONS</Text>
          <Text style={headerDescStyle}>
            Some of the top destinations for your next summer adventure.
          </Text>
        </View>
        <View style={boxContainerStyle}>
          <Box
            picUrl="https://www.gapyear.com/images/content/11.07.18-bcp_ft_australia-3_17191420.jpg"
            header="AUSTRALIA"
            price="$1095"
          >
            Become inspired to travel to Australia. Discover fantastic things to
            do & places to go.
          </Box>
          <Box
            picUrl="https://www.nationalgeographic.com/content/dam/science/photos/000/247/24713.jpg"
            header="ANCIENT SOUTH AMERICA"
            price="$1295"
          >
            Become inspired to travel to South America. Discover fantastic
            things to do & places to go.
          </Box>
          <Box
            picUrl="https://ww5.cityofpasadena.net/economicdevelopment/wp-content/uploads/sites/2/2016/04/pasadena-sunset.jpg"
            header="MODERN NORTH AMERICA"
            price="$695"
          >
            Become inspired to travel to North America. Discover fantastic
            things to do & places to go.
          </Box>
          <Box
            picUrl="http://nec-fotografie.de/wp-content/uploads/2016/01/hamburg-skyline-panorma-logo.jpg"
            header="CLASSIC EUROPE"
            price="$295"
          >
            Become inspired to travel to Europe. Discover fantastic things to do
            & places to go.
          </Box>
        </View>

      </View>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: 'rgb(238,238,238)',
    justifyContent: 'center',
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
