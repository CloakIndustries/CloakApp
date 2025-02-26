import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import {SearchBar} from '@rneui/themed';
import CustomButton from '../../component/CustomButton';
import {Colors} from '../../utill/Colors';
import HeaderWithName from '../../component/HeaderWithName';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ShippingAddress = ({navigation}) => {
  const [addresses, setAddresses] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [defaultAddressIndex, setDefaultAddressIndex] = useState(null);
  const [newAddress, setNewAddress] = useState({
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
  });

  const handleAddAddress = newAddress => {
    setAddresses([newAddress, ...addresses]);
  };

  const handleUpdateAddress = (updatedAddress, index) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index] = updatedAddress;
    setAddresses(updatedAddresses);
  };

  const handleDeleteAddress = index => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
    if (defaultAddressIndex === index) setDefaultAddressIndex(null);
  };

  const togglePopup = index => {
    setIsVisible(prev => ({...prev, [index]: !prev[index]}));
  };

  const setDefaultAddress = index => {
    setDefaultAddressIndex(index);
  };

  const handleEditAddress = index => {
    navigation.navigate('AddShippingAddress', {
      address: addresses[index],
      index: index,
      onUpdate: handleUpdateAddress,
    });
  };

  const renderAddressCard = ({item, index}) => (
    <View style={styles.card}>
      <View>
        <Text style={styles.cardNameText}>{item.fullName}</Text>
        <Text style={styles.cardText}>
          {item.houseNo}, {item.roadName}
        </Text>
        <Text style={styles.cardText}>
          {item.city}, {item.state} - {item.pin}
        </Text>
        <Text style={styles.cardText}>Contact: {item.contact}</Text>

        <TouchableOpacity onPress={() => setDefaultAddress(index)}>
          <Text
            style={[
              styles.buttonText,
              defaultAddressIndex === index && styles.defaultText,
            ]}>
            {defaultAddressIndex === index
              ? 'Default Address'
              : 'Set as Default'}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.dotIcon}
        onPress={() => togglePopup(index)}>
        <MCIcon name="dots-vertical" size={20} color={Colors.fadeText} />
      </TouchableOpacity>

      {isVisible[index] && (
        <View style={styles.cardbtnmodl}>
          <TouchableOpacity
            style={styles.crdBtnRow}
            onPress={() => handleEditAddress(index)}>
            <MCIcon name="pencil-outline" size={15} color="green" />
            <Text style={[styles.buttonText, {color: 'green'}]}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.crdBtnRow}
            onPress={() => handleDeleteAddress(index)}>
            <MCIcon name="delete-outline" size={15} color="red" />
            <Text style={[styles.buttonText, {color: 'red'}]}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <HeaderWithName headerName={'Shipping Address'} />

      <CustomButton
        style={styles.addButton}
        buttonText={'Add New Address'}
        onPress={() =>
          navigation.navigate('AddShippingAddress', {
            onAdd: handleAddAddress,
          })
        }
      />

      <View style={styles.innerContainer}>
        <FlatList
          data={addresses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderAddressCard}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.fadeBG,
  },
  innerContainer: {
    flex: 0.9,
    paddingVertical: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: Colors.primary,
    padding: 16,
    marginBottom: 8,
    elevation: 2,
    height: 150,
  },
  cardNameText: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    fontWeight: '300',
    marginBottom: 4,
    lineHeight: 21,
  },
  cardButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  editButton: {
    padding: 8,
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  deleteButton: {
    padding: 8,
    backgroundColor: '#ff4d4d',
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    paddingLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '85%',
    padding: 20,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    elevation: 5,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  cardbtnmodl: {
    position: 'absolute',
    top: 35,
    right: 15,
    width: 100,
    backgroundColor: 'white',
    elevation: 2,
    padding: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dotIcon: {position: 'absolute', right: 5, top: 15},
  crdBtnRow: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
  defaultText: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  addButton: {
    marginVertical: 5,
    elevation: 5,
  },
});

export default ShippingAddress;
