import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../utill/Colors';
import HeaderWithName from '../../component/HeaderWithName';
import {Divider, Switch, BottomSheet} from '@rneui/themed';
import InputField from '../../component/InputField';
import CustomButton from '../../component/CustomButton';
import OutlineButton from '../../component/OutlineButton';

const EditProfile = () => {
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleEdit = () => {
    setIsEditProfile(!isEditProfile);
  };

  const handleCancel = () => {
    setIsEditProfile(false);
  };
  const handleBottompopCancel = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <HeaderWithName headerName={'Edit Profile'} />
      </View>
      <View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              marginTop: 40,
              borderWidth: 2,
              height: 125,
              width: 125,
              borderRadius: 100,
              borderColor: Colors.secondary,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={{
                uri: 'https://i.ibb.co/7G5qqGY/1.jpg',
              }}
              style={{
                borderRadius: 100,
                height: 110,
                width: 110,
              }}
            />
            {isEditProfile ? (
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 5,
                  backgroundColor: Colors.secondary,
                  width: 25,
                  height: 25,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <EditIcon
                  name="mode-edit"
                  color={'#fff'}
                  size={15}
                  style={{alignSelf: 'center'}}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>

        <View style={styles.editsection}>
          <View style={{marginTop: 20}}>
            <InputField
              keyboardType={'phone-pad'}
              placeholderName={'First Name'}
              //   value={data.name}
              //   onChange={text => setData({name: text})}
            />

            <InputField
              keyboardType={'phone-pad'}
              placeholderName={'Last Name'}
              //   value={data.lastname}
              //   onChange={text => setData({lastname: text})}
            />
            <InputField
              editable={false}
              //  value={phoneNumber}
            />
            <InputField
              keyboardType={'phone-pad'}
              placeholderName={'Enter email address'}
              //   value={data.email}
              //   onChange={text => setData({email: text})}
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
              //     color={!checked ? 'grey' : Colors.secondary}
              //     value={checked}
              //     onValueChange={value => setChecked(value)}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{position: 'absolute', bottom: 90, left: 15, right: 15}}>
        {!isEditProfile ? (
          <CustomButton buttonText={'Change'} onPress={() => handleEdit()} />
        ) : (
          <>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <OutlineButton
                btntxt={'Submit'}
                onPress={() => setModalVisible(true)}
              />
              <CustomButton
                buttonText={'Cancel'}
                style={{
                  width: '45%',
                  alignItems: 'center',
                }}
                onPress={() => handleCancel()}
              />
            </View>
          </>
        )}
      </View>
      <BottomSheet modalProps={{}} isVisible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Are you want to changes ?</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 40,
            }}>
            <OutlineButton
              btntxt={'Save'}
              styleProps={{width: '48%'}}
              onPress={() => setModalVisible(true)}
            />
            <CustomButton
              buttonText={'Cancel'}
              style={{
                width: '48%',
                alignItems: 'center',
              }}
              onPress={() => handleBottompopCancel()}
            />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  editsection: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#505050FF',
    opacity: 0.5,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 999,
  },
  modalContainer: {
    backgroundColor: Colors.primary,
    height: 190,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  modalText: {
    marginVertical: 15,
    fontSize: 18,
    fontWeight: '600',
    color: Colors.secondary,
  },
});
