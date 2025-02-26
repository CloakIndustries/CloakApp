import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utill/Colors';
import HeaderWithName from '../../component/HeaderWithName';
const Order = () => {
  return (
    <View style={styles.container}>
      <View>
        <HeaderWithName headerName={'Order'} />
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
