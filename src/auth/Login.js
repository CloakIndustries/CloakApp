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
import HeadText from '../component/Headtext';
import {Colors} from '../utill/Colors';
import {Divider} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isOtp, setIsOtp] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(30); // 2 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

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

  const goBack = () => {
    setPhoneNumber('');
    setIsOtp(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headbox} />
      <View style={styles.downbox(isOtp)}>
        {!isOtp ? (
          <>
            <View>
              <HeadText headtext={'Login '} />
              <Subtext subtext={'Hello, welcome back to our account'} />
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
                onPress={() => navigation.navigate('Signup')}
                style={{alignItems: 'center', marginVertical: 10}}>
                <Subtext
                  subtext={'Create New Account'}
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
                onPress={() => navigation.navigate('OTPScreen')}
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
        )}
      </View>
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
    flex: !isOtp ? 0.5 : 0.9,
    backgroundColor: Colors.primary,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }),
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

export default Login;
