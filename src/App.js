import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Toolbar = props => (
  <View
    style={{
      flexGrow: 1,
      height: 50,
      background: '#17BEBB',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 8,
      shadowOffset: { width: 3, height: 3 },
      justifyContent: 'center',
      paddingLeft: 15,
      paddingRight: 15
    }}
  >
    <Text style={{ color: '#FFF', fontSize: 18 }}>Kalulator Nilai</Text>
  </View>
);

class App extends Component {
  render() {
    return (
      <View>
        <Toolbar />
        <Text style={styles.text}>This is some text</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    flexGrow: 1,
    height: 50,
    background: '#17BEBB'
  }
});

export default App;
