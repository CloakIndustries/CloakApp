import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeadText from '../component/Headtext';
import {Colors} from '../utill/Colors';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import Subtext from '../component/Subtext';
import IcontextBox from '../component/IcontextBox';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../component/CustomButton';

const Settings = () => {
  const navigation = useNavigation();
  const boxContain = [
    {
      iconname: 'person-2',
      name: 'Edit Profile',
      navigation: 'EditProfile',
      type: 1,
    },
    {
      iconname: 'location-city',
      name: 'Shipping Address',
      navigation: 'ShiipingAddresses',
      type: 1,
    },
    {
      iconname: 'social-dropbox',
      name: 'Orders',
      navigation: 'Order',
      type: 2,
    },
    {
      iconname: 'favorite',
      name: 'Favourite',
      navigation: 'Favourite',
      type: 1,
    },
  ];

  const [data, setData] = useState(boxContain);

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', margin: 15}}>
        <HeadText
          headtext="Profile"
          propstyle={{textAlign: 'center', color: Colors.secondary}}
        />
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
              uri: 'https://c.files.bbci.co.uk/ECA7/production/_131938506_ind3bc40c5f1c10d4248e6bf848ae7033c8814005e9-1.jpg',
            }}
            style={{
              borderRadius: 100,
              height: 110,
              width: 110,
            }}
          />
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
        </View>
        <View>
          <HeadText
            headtext="John Doe"
            propstyle={{
              textAlign: 'center',
              marginTop: 20,
              fontSize: 20,
              fontWeight: '700',
              letterSpacing: 1,
              color: '#202020FF',
            }}
          />
          <Subtext
            subtext={'User Id: 10AE20220'}
            propstyle={{
              textAlign: 'center',
              color: '#969494FF',
            }}
          />
        </View>
      </View>
      <View>
        {data?.map((item, index) => (
          <IcontextBox
            key={index}
            tagline={item.name}
            iconname={item.iconname}
            type={item.type}
            onPress={() => navigation.navigate(item.navigation)}
          />
        ))}
      </View>
      <View
        style={{
          marginHorizontal: 15,
          position: 'absolute',
          bottom: 80,
          left: 0,
          right: 0,
        }}>
        <CustomButton buttonText={'Logout'} />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    // alignContent: 'center',
    // justifyContent: 'center',
  },
});
