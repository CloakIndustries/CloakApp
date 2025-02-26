import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../utill/Colors';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../component/CustomButton';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = productId => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, increment) => {
    setCartItems(
      cartItems.map(item =>
        item.id === productId
          ? {...item, quantity: Math.max(1, item.quantity + increment)}
          : item,
      ),
    );
  };

  const renderCartItem = ({item}) => (
    <View style={styles.cartItem}>
      <Image
        source={{
          uri: `${item.image}`,
        }}
        style={styles.itemImage}
      />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
        <Text style={styles.itemSize}>Size: {item.selectedSize}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => updateQuantity(item.id, -1)}>
            <MCIcon name="minus-circle" size={24} color={Colors.primary} />
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateQuantity(item.id, 1)}>
            <MCIcon name="plus-circle" size={24} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removeFromCart(item.id)}>
        <MCIcon name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.cartList}
      /> */}
      {cartItems.length > 0 ? (
        <View style={styles.footer}>
          <Text style={styles.total}>Total: ${totalAmount.toFixed(2)}</Text>
          <CustomButton
            buttonText="Proceed to Checkout"
            onPress={() => {
              /* Handle checkout */
            }}
          />
        </View>
      ) : (
        <Text style={styles.emptyCart}>Your cart is empty</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.fadeBG,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: Colors.primary,
  },
  cartList: {
    padding: 16,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 12,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    // color: Colors.primary,
    marginTop: 4,
  },
  itemSize: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 12,
  },
  removeButton: {
    padding: 4,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    // backgroundColor: Colors.primary,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  emptyCart: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 48,
    color: '#666666',
  },
});

export default Cart;
