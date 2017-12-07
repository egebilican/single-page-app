import React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';

const window = Dimensions.get('window');
//592 height
//360 width

const Box = props => {
  const { picUrl, header, children } = props;
  if (props.picUrl) {
    return (
      <View style={styles.boxStyle}>
        <Image
          style={styles.picStyle}
          source={{
            uri: picUrl
          }}
        />

        <View style={styles.textStyle}>
          <View style={styles.headerStyle}>
            <Text>{header}</Text>
          </View>
          <Text>{children}</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.boxStyle}>
      <View style={styles.textStyle}>
        <View style={styles.headerStyle}>
          <Text>{header}</Text>
        </View>
        <Text>{children}</Text>
      </View>
    </View>
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
  textOverPic: {},
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
  headerStyle: {}
};

export default Box;

/*

      */
