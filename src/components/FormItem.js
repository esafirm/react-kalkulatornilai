import React from 'react';
import { View, TextInput, Text } from 'react-native';

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

class FormItem extends React.Component {
  clear() {
    this.input.setNativeProps({ text: '' });
    console.log('clearing');
  }

  render() {
    const { text, inputText, hint, onChangeText } = this.props;
    return (
      <View>
        <Label text={text} />
        <TextInput
          value={inputText}
          ref={el => (this.input = el)}
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

export default FormItem;
