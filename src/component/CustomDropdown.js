import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomDropdown = props => {
  const {data} = props;
  return (
    <View style={styles.dropdown}>
      <Text style={{color: '#818281', fontSize: 14}}>
        Choose Profile Category
      </Text>
      <Icon name="angle-down" size={20} />
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  dropdown: {
    height: 42,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#A6A6A6FF',
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
