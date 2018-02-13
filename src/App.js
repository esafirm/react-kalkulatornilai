import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
  Dimensions
} from 'react-native';
import { Router, Route, Link } from './Router';

import CalculatorForm from './CalculatorForm';
import SettingForm from './SettingForm';

const width = Dimensions.get('window').width;

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

const BottomBarItem = ({ image, to, text }) => (
  <Link
    to={to}
    component={TouchableOpacity}
    activeOpacity={0.4}
    style={{ flexGrow: 1 }}
  >
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
  </Link>
);

const BottomBar = props => (
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
      to="/"
      image={'https://png.icons8.com/color/2x/calculator.png'}
    />
    <BottomBarItem
      text="Setting"
      to="/setting"
      image={'https://png.icons8.com/ios/2x/horizontal-settings-mixer.png'}
    />
  </View>
);

class App extends React.Component {
  state = {
    nilaiTugas: 0,
    nilaUts: 0,
    nilaiUas: 0,
    nilaiAkhir: 0,
    peringkatNilai: '',
    predikatNilai: ''
  };

  resetForm = () => {
    this.form.reset();
  };

  render() {
    return (
      <Router>
        <View style={{ backgroundColor: '#F3F3F3', flexGrow: 1 }}>
          <View style={{ flex: 1 }}>
            <Toolbar />
            <Route exact path="/" component={CalculatorForm} />
            <Route exact path="/setting" component={SettingForm} />
          </View>
          <BottomBar />
        </View>
      </Router>
    );
  }
}

export default App;
