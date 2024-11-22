import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const InputField = props => {
  const {placeholderName, keyboardType, onChange, value} = props;
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholderName}
        placeholderTextColor={'#818281'}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A6A6A6FF',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
  },
});
