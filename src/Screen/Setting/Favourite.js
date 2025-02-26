import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utill/Colors';
import HeaderWithName from '../../component/HeaderWithName';
const Favourite = () => {
  return (
    <View style={styles.container}>
      <View>
        <HeaderWithName headerName={'Favourite'} />
      </View>
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
