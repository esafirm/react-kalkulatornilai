import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native';

import FormContainer from './components/FormContainer';
import FormItem from './components/FormItem';

const DividerHorizontal = () => <View style={{ width: 8 }} />;

class CalculatorForm extends React.Component {
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
          <Button title={'Reset'} color={'#E0245E'} onPress={this.resetForm} />
        </View>
      </FormContainer>
    );
  }
}
CalculatorForm.propTypes = {};
export default CalculatorForm;
