import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {Colors} from '../../utill/Colors';
import HeaderWithName from '../../component/HeaderWithName';
import CustomButton from '../../component/CustomButton';

const AddShippingAddress = ({navigation, route}) => {
  const editAddress = route.params?.address;
  const editIndex = route.params?.index;

  const [address, setAddress] = useState(
    editAddress || {
      fullName: '',
      houseNo: '',
      roadName: '',
      city: '',
      state: '',
      pin: '',
      contact: '',
      alternativeContact: '',
      landmark: '',
      typeofAddress: 'HOME',
    },
  );

  const handleSubmit = () => {
    if (
      !address.fullName ||
      !address.houseNo ||
      !address.city ||
      !address.pin
    ) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }

    if (editAddress) {
      // Handle edit
      route.params?.onUpdate(address, editIndex);
    } else {
      // Handle add
      route.params?.onAdd(address);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <HeaderWithName
        headerName={editAddress ? 'Edit Address' : 'Add New Address'}
      />
      <ScrollView style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name *"
          value={address.fullName}
          onChangeText={text => setAddress({...address, fullName: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="House/Flat No. *"
          value={address.houseNo}
          onChangeText={text => setAddress({...address, houseNo: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Road Name/Area"
          value={address.roadName}
          onChangeText={text => setAddress({...address, roadName: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="City *"
          value={address.city}
          onChangeText={text => setAddress({...address, city: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="State"
          value={address.state}
          onChangeText={text => setAddress({...address, state: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="PIN Code *"
          value={address.pin}
          keyboardType="numeric"
          onChangeText={text => setAddress({...address, pin: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          value={address.contact}
          keyboardType="phone-pad"
          onChangeText={text => setAddress({...address, contact: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Alternative Contact Number"
          value={address.alternativeContact}
          keyboardType="phone-pad"
          onChangeText={text =>
            setAddress({...address, alternativeContact: text})
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Landmark"
          value={address.landmark}
          onChangeText={text => setAddress({...address, landmark: text})}
        />

        <CustomButton
          style={styles.submitButton}
          buttonText={editAddress ? 'Update Address' : 'Save Address'}
          onPress={handleSubmit}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.fadeBG,
  },
  formContainer: {
    padding: 16,
  },
  input: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  submitButton: {
    marginVertical: 20,
  },
});

export default AddShippingAddress;
