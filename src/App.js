import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

const inputContainers = new Set();

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

const Card = ({ children }) => (
  <View
    style={{
      backgroundColor: '#fff',
      borderRadius: 10,
      margin: 10,
      padding: 10
    }}
  >
    {children}
  </View>
);

const Label = ({ text }) => (
  <Text
    style={{
      color: '#111',
      fontWeight: '500',
      marginTop: 10
    }}
  >
    {text}
  </Text>
);

const DividerHorizontal = () => <View style={{ width: 8 }} />;

class Form extends React.Component {
  render() {
    const { text, hint, onChangeText } = this.props;
    return (
      <View>
        <Label text={text} />
        <TextInput
          ref={el => inputContainers.add(el)}
          keyboardType={'numeric'}
          style={[
            { marginTop: 5, paddingLeft: 10, paddingRight: 10 },
            {
              height: 40,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#CCC'
            }
          ]}
          placeholder={hint}
          onChangeText={onChangeText}
        />
      </View>
    );
  }
}

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
    inputContainers.forEach(input => {
      if (input) {
        input.setNativeProps({ text: '' });
      }
    });
  };

  render() {
    return (
      <View style={{ backgroundColor: '#F3F3F3', flexGrow: 1 }}>
        <Toolbar />
        <Card>
          <Form
            text="Rata - Rata Nilai Tugas"
            onChangeText={text => this.setState({ nilaiTugas: text })}
          />
          <Form
            text="Nilai UTS"
            onChangeText={text => this.setState({ nilaUts: text })}
          />
          <Form
            text="Nilai UAS"
            onChangeText={text => this.setState({ nilaiUas: text })}
          />
          <Form text="Nilai Akhir" />
          <Form text="Peringkat Nilai" />
          <Form text="Predikat Nilai" />

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
        </Card>
      </View>
    );
  }
}

export default App;
