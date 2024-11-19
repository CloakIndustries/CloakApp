import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import InputField from '../component/InputField';

import Subtext from '../component/Subtext';
import CustomButton from '../component/CustomButton';
import HeadText from '../component/Headtext';

const Login = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      <HeadText headtext={'Login Account'} />
      <Subtext subtext={'Hello, welcome back to our account'} />

      <InputField
        keyboardType={'phone-pad'}
        placeholderName={'Phone Number'}
        value={phoneNumber}
        onChange={text => setPhoneNumber(text)}
      />

      <CustomButton
        buttonText={'Request OTP'}
        onPress={() => navigation.navigate('OTPScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 30,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  switchText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
  },
  flagIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#a0c4c4',
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 10,
  },
  googleButton: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 10,
  },
  googleText: {
    color: 'black',
    fontSize: 16,
  },
  footerText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 20,
  },
});

export default Login;
