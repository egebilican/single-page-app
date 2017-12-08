import React from 'react';
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';

const window = Dimensions.get('window');
//592 height
//360 width

const Box = props => {
  const { picUrl, header, children, price } = props;
  const { headerStyle, boxStyle, picStyle, textStyle, textOverPic } = styles;
  if (props.picUrl) {
    return (
      <TouchableOpacity>
      <View style={boxStyle}>
        <Image
          style={picStyle}
          source={{
            uri: picUrl
          }}
        />
        <Text style={textOverPic}>{price}</Text>
        <View style={textStyle}>
          <View>
            <Text style={headerStyle}>{header}</Text>
          </View>
          <Text>{children}</Text>
        </View>
      </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity>
    <View style={boxStyle}>
      <View style={textStyle}>
        <View >
          <Text style={headerStyle}>{header}</Text>
        </View>
        <Text>{children}</Text>
      </View>
    </View>
    </TouchableOpacity>    
  );
};

const styles = {
  boxStyle: {
    width: 240,
    flexGrow: 0,
    flexDirection: 'column',
    margin: 20,
    padding: 0,
    zIndex: 0,
    position: 'relative',
    borderWidth: 1
  },
  textOverPic: {
    position:'absolute',
    right: 15,
    top: 175,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    fontFamily: 'Montserrat',
    flexGrow: 0
  },
  picStyle: {
    flex: 1,
    height: 200,
    width: undefined
  },
  textStyle: {
    backgroundColor: 'rgb(255,255,255)',
    padding: 0
  },
  textStyle2: {},
  headerStyle: {
    fontWeight: '700'
  }
};

export default Box;

/*

      */
