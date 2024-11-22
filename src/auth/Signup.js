import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HeadText from '../component/Headtext';
import {Colors} from '../utill/Colors';
import InputField from '../component/InputField';
import CustomDropdown from '../component/CustomDropdown';

const Signup = () => {
  const [data, setData] = useState({
    name: '',
    lastname: '',
    contact: '',
    email: '',
    profile_category: 'shopper',
  });
  return (
    <View style={styles.container}>
      <HeadText headtext={'Sign Up'} />

      <InputField
        placeholderName={'Name'}
        value={data.name}
        onChange={text => setData(...data, (data.name = text))}
      />

      <InputField
        placeholderName={'Last Name'}
        value={data.lastname}
        onChange={text => setData(...data, (data.name = text))}
      />

      <InputField
        placeholderName={'Phone'}
        value={data.contact}
        onChange={text => setData(...data, (data.name = text))}
      />

      <InputField
        placeholderName={'Email'}
        value={data.email}
        onChange={text => setData(...data, (data.name = text))}
      />
      <CustomDropdown />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
});
