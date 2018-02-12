import React from 'react';
import { Text, View, Button } from 'react-native';

import FormContainer from './components/FormContainer';
import FormItem from './components/FormItem';

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

const DividerHorizontal = () => <View style={{ width: 8 }} />;

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
      <View style={{ backgroundColor: '#F3F3F3', flexGrow: 1 }}>
        <Toolbar />
        <FormContainer
          ref={el => (this.form = el)}
          style={{
            backgroundColor: '#fff',
            borderRadius: 10,
            margin: 10,
            padding: 10
          }}
        >
          <FormItem
            text="Rata - Rata Nilai Tugas"
            onChangeText={text => this.setState({ nilaiTugas: text })}
          />
          <FormItem
            text="Nilai UTS"
            onChangeText={text => this.setState({ nilaUts: text })}
          />
          <FormItem
            text="Nilai UAS"
            onChangeText={text => this.setState({ nilaiUas: text })}
          />
          <FormItem text="Nilai Akhir" />
          <FormItem text="Peringkat Nilai" />
          <FormItem text="Predikat Nilai" />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 20
            }}
          >
            <Button title={'Hitung'} />
            <DividerHorizontal />
            <Button
              title={'Reset'}
              color={'#E0245E'}
              onPress={this.resetForm}
            />
          </View>
        </FormContainer>
      </View>
    );
  }
}

export default App;
