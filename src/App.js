import React from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Router, Route, Mover } from './Router';

import CalculatorForm from './CalculatorForm';
import SettingForm from './SettingForm';

const Toolbar = props => (
  <View
    style={{
      height: 50,
      backgroundColor: '#17BEBB',
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

const BottomBarItem = ({ image, onPress, text }) => (
  <TouchableOpacity style={{ flexGrow: 1 }} onPress={onPress}>
    <View
      style={{
        flexGrow: 1,
        backgroundColor: '#fff',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Image
        style={{
          width: 25,
          height: 25
        }}
        source={image}
      />
      <Text
        style={{
          fontSize: 12,
          marginTop: 4,
          color: '#111'
        }}
      >
        {text}
      </Text>
    </View>
  </TouchableOpacity>
);

class App extends React.Component {
  state = {
    nilaiTugas: 0,
    nilaUts: 0,
    nilaiUas: 0,
    nilaiAkhir: 0,
    peringkatNilai: '',
    predikatNilai: '',
    to: ''
  };

  resetForm = () => {
    this.form.reset();
  };

  renderBottomBar() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 60,
          backgroundColor: '#fff',
          shadowColor: '#111',
          shadowOpacity: '0.4',
          shadowRadius: 10
        }}
      >
        <BottomBarItem
          text="Calculator"
          onPress={() => this.setState({ to: '/' })}
          image={'https://png.icons8.com/color/2x/calculator.png'}
        />
        <BottomBarItem
          text="Setting"
          onPress={() => this.setState({ to: '/setting' })}
          image={'https://png.icons8.com/ios/2x/horizontal-settings-mixer.png'}
        />
      </View>
    );
  }

  render() {
    return (
      <Router>
        <View style={{ backgroundColor: '#F3F3F3', flexGrow: 1 }}>
          <Mover to={this.state.to} onMoved={() => this.setState({ to: '' })} />
          <View style={{ flex: 1 }}>
            <Toolbar />
            <Route exact path="/" component={CalculatorForm} />
            <Route exact path="/setting" component={SettingForm} />
          </View>
          {this.renderBottomBar()}
        </View>
      </Router>
    );
  }
}

export default App;
