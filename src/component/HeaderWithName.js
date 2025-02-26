import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BackIcon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../utill/Colors';
import {useNavigation} from '@react-navigation/native';
const HeaderWithName = ({headerName}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        //   justifyContent: "center",
        alignContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: Colors.primary,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon
          name="chevron-back"
          size={25}
          color={Colors.secondary}
          style={{paddingRight: 20}}
        />
      </TouchableOpacity>
      <Text style={{fontSize: 20, fontWeight: '500', color: Colors.secondary}}>
        {headerName}
      </Text>
    </View>
  );
};

export default HeaderWithName;

const styles = StyleSheet.create({});
