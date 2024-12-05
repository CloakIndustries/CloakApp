import React, {useState, useEffect} from 'react';
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
import CustomDropdown from '../component/CustomDropdown';
import HeadText from '../component/Headtext';
import {Colors} from '../utill/Colors';
import {Divider, Switch} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isOtp, setIsOtp] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(30); // 2 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState({
    name: '',
    lastname: '',
    contact: phoneNumber,
    email: '',
    profile_category: !checked ? 'influencer' : 'shopper',
  });

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
      setIsRunning(false);
      setIsCompleted(true);
    }

    return () => clearInterval(timer); // Cleanup timer on component unmount or re-render
  }, [isRunning, timeLeft]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };
  const handelSendOtp = () => {
    if (phoneNumber.length === 10) {
      setIsOtp(true);
      setIsRunning(!isRunning);
    }
  };

  const resetTimer = () => {
    setTimeLeft(30); // Reset to 2 minutes
    setIsRunning(!isRunning);
    setIsCompleted(false);
  };

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(
      2,
      '0',
    )}`;
  };

  const handleRegister = () => {
    if (otp[0] && otp[1] && otp[2] && otp[3] !== '') {
      setIsRegister(true);
    }
  };

  const toggleSwitch = () => {
    setChecked(!checked);
  };

  const goBack = () => {
    setPhoneNumber('');
    setIsOtp(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headbox} />
      {!isRegister ? (
        <View style={styles.downbox(isOtp)}>
          !isOtp ? (
          <>
            <View>
              <HeadText headtext={'Register Account'} />
              <Subtext subtext={'Hello, welcome to registration account'} />
            </View>
            <View>
              <InputField
                keyboardType={'phone-pad'}
                placeholderName={'Phone Number'}
                value={phoneNumber}
                onChange={text => setPhoneNumber(text)}
              />

              <CustomButton
                buttonText={'Request OTP'}
                onPress={() => handelSendOtp()}
              />
              <Divider inset={true} insetType="middle" width={1} />
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{alignItems: 'center', marginVertical: 10}}>
                <Subtext
                  subtext={'Log In '}
                  propStyle={{color: Colors.secondary}}
                />
              </TouchableOpacity>
            </View>
          </>
          ) : (
          <>
            <View>
              <HeadText
                headtext={'Enter Your\nVerfication Code'}
                propstyle={{letterSpacing: 1.4, lineHeight: 32}}
              />
              <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                  <TextInput
                    key={index}
                    style={styles.otpInput}
                    keyboardType="number-pad"
                    maxLength={1}
                    value={digit}
                    onChangeText={text => handleChange(text, index)}
                  />
                ))}
              </View>
              <View style={{alignItems: 'flex-end'}}>
                {!isCompleted ? (
                  <Subtext
                    subtext={formatTime(timeLeft)}
                    propStyle={{color: 'grey', marginVertical: 10}}
                  />
                ) : (
                  <TouchableOpacity onPress={() => resetTimer()}>
                    <Subtext
                      subtext={'Resend OTP'}
                      propStyle={{
                        color: Colors.secondary,
                        marginVertical: 10,
                        fontWeight: '500',
                      }}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <View>
              <Subtext
                subtext={
                  'We send verfication code to your mobile number ' +
                  '+91' +
                  `${phoneNumber}`
                }
                propStyle={{
                  fontSize: 16,
                  letterSpacing: 1,
                  lineHeight: 22,
                  marginBottom: 20,
                }}
              />
              <CustomButton
                buttonText={'Request OTP'}
                onPress={() => handleRegister()}
              />
              <Divider inset={true} insetType="middle" width={1} />

              <TouchableOpacity
                onPress={() => goBack()}
                style={{alignItems: 'center', marginVertical: 10}}>
                <Subtext
                  subtext={'Back'}
                  propStyle={{color: Colors.secondary}}
                />
              </TouchableOpacity>
            </View>
          </>
          )
        </View>
      ) : (
        <>
          <View style={styles.regisBox}>
            <View>
              <HeadText headtext={'Enter Registration Detials'} />
            </View>
            <View style={{marginTop: 20}}>
              <InputField
                keyboardType={'phone-pad'}
                placeholderName={'First Name'}
                value={data.name}
                onChange={text => setData({name: text})}
              />
              <InputField
                keyboardType={'phone-pad'}
                placeholderName={'Last Name'}
                value={data.lastname}
                onChange={text => setData({lastname: text})}
              />
              <InputField editable={false} value={phoneNumber} />
              <InputField
                keyboardType={'phone-pad'}
                placeholderName={'Enter email address'}
                value={data.email}
                onChange={text => setData({email: text})}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignContent: 'center',
                  height: 40,
                  marginHorizontal: 10,
                  marginBottom: 20,
                }}>
                <Text style={{color: Colors.fadeText}}>
                  Are you infulencer ?{' '}
                </Text>
                <Switch
                  color={!checked ? 'grey' : Colors.secondary}
                  value={checked}
                  onValueChange={value => setChecked(value)}
                />
              </View>
              <CustomButton buttonText={'Submit'} />
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  headbox: {
    flex: 1,
  },
  downbox: isOtp => ({
    flex: !isOtp ? 0.5 : 1,
    backgroundColor: Colors.primary,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }),
  regisBox: {
    flex: 1.5,
    backgroundColor: Colors.primary,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    marginTop: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: 'lightgray',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
  },
  timertxt: {
    fontSize: 13,
  },
});

export default Signup;
