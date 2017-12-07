import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import Bar from './components/bar';
import LandingPage from './components/landingPage';
import TopDestinations from './components/topDestinations';
import BeforeYouLeave from './components/beforeYouLeave';
import Footer from './components/footer';

const windowHeight = Dimensions.get('window').height;

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <LandingPage />
          <TopDestinations />
          <BeforeYouLeave />
          <Footer />
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#F5FCFF',
    height: windowHeight
  }
};
