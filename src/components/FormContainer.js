import React from 'react';
import { View } from 'react-native';
import FormItem from './FormItem';

class FormContainer extends React.Component {
  inputContainers = new Set();

  reset() {
    this.inputContainers.forEach(item => {
      if (item) {
        item.clear();
      }
    });
  }

  render() {
    const { children, style } = this.props;
    return (
      <View style={style}>
        {this.props.children.map(child => {
          if (child.type.name === 'FormItem') {
            return (
              <FormItem
                {...child.props}
                ref={el => this.inputContainers.add(el)}
              />
            );
          } else {
            return child;
          }
        })}
      </View>
    );
  }
}

export default FormContainer;
