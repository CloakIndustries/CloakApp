import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {Colors} from '../utill/Colors';

const InputField = props => {
  const {placeholderName, keyboardType, onChange, value, editable} = props;
  return (
    <View style={styles.inputContainer}>
      <TextInput
        editable={editable}
        style={styles.input}
        placeholder={placeholderName}
        placeholderTextColor={Colors.fadeText}
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
