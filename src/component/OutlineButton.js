import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../utill/Colors';

const OutlineButton = ({btntxt, styleProps, onPress}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.outlineBox, styleProps]}>
        <Text style={styles.btnText}>{btntxt}</Text>
      </TouchableOpacity>
    </>
  );
};

export default OutlineButton;

const styles = StyleSheet.create({
  outlineBox: {
    borderColor: Colors.secondary,
    borderWidth: 1.5,
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 20,
    width: '45%',
  },
  btnText: {
    color: Colors.secondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
