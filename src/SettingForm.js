import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';

import FormItem from './components/FormItem';
import FormContainer from './components/FormContainer';

import { getBatasNilai, saveBatasNilai } from './storage/SettingStorage';

class SettingForm extends React.Component {
  state = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
  };

  componentDidMount() {
    getBatasNilai()
      .then(value => this.setState(value))
      .catch(e => console.log('error:', e));
  }

  saveBatasNilai = () => {
    saveBatasNilai(this.state);
  };

  render() {
    return (
      <FormContainer
        style={{
          backgroundColor: '#fff',
          borderRadius: 10,
          margin: 10,
          padding: 10
        }}
      >
        <FormItem
          inputText={this.state.A}
          text="Batas Nilai A"
          onChangeText={text => this.setState({ A: text })}
        />
        <FormItem
          inputText={this.state.B}
          text="Batas Nilai B"
          onChangeText={text => this.setState({ B: text })}
        />
        <FormItem
          inputText={this.state.C}
          text="Batas Nilai C"
          onChangeText={text => this.setState({ C: text })}
        />
        <FormItem
          inputText={this.state.D}
          text="Batas Nilai D"
          onChangeText={text => this.setState({ D: text })}
        />

        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Button title="Save" onPress={this.saveBatasNilai} />
        </View>
      </FormContainer>
    );
  }
}
SettingForm.propTypes = {};
export default SettingForm;
