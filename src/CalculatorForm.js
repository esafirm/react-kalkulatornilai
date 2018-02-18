import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native';

import FormContainer from './components/FormContainer';
import FormItem from './components/FormItem';

import { getBatasNilai } from './storage/SettingStorage';

const DividerHorizontal = () => <View style={{ width: 8 }} />;

class CalculatorForm extends React.Component {
  state = {
    nilaiTugas: 0,
    nilaiUts: 0,
    nilaiUas: 0,
    nilaiAkhir: 0,
    peringkatNilai: ''
  };

  evaluate = () => {
    const getPredicate = (value, batas) => {
      if (value >= batas.A) {
        return 'A';
      } else if (value >= batas.B) {
        return 'B';
      } else if (value >= batas.C) {
        return 'C';
      } else if (value >= batas.D) {
        return 'D';
      }
      return 'TIDAK LULUS';
    };

    getBatasNilai()
      .then(batas => {
        const { nilaiTugas, nilaiUas, nilaiUts } = this.state;
        const nilaiAkhir =
          (parseInt(nilaiTugas) + parseInt(nilaiUas) + parseInt(nilaiUts)) / 3;

        this.setState({
          nilaiAkhir: nilaiAkhir,
          peringkatNilai: getPredicate(nilaiAkhir, batas)
        });
      })
      .catch(e => console.log('error at evaluate', e));
  };

  render() {
    return (
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
          hint="0-100"
          text="Rata - Rata Nilai Tugas"
          onChangeText={text => this.setState({ nilaiTugas: text })}
        />
        <FormItem
          hint="0-100"
          text="Nilai UTS"
          onChangeText={text => this.setState({ nilaiUts: text })}
        />
        <FormItem
          hint="0-100"
          text="Nilai UAS"
          onChangeText={text => this.setState({ nilaiUas: text })}
        />
        <FormItem text="Nilai Akhir" inputText={this.state.nilaiAkhir} />
        <FormItem
          keyboardType="default"
          text="Peringkat Nilai"
          inputText={this.state.peringkatNilai}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 20
          }}
        >
          <Button title={'Hitung'} onPress={this.evaluate} />
          <DividerHorizontal />
          <Button title={'Reset'} color={'#E0245E'} onPress={this.resetForm} />
        </View>
      </FormContainer>
    );
  }
}
CalculatorForm.propTypes = {};
export default CalculatorForm;
