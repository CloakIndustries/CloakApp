import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Colors} from '../utill/Colors';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({navigation}) => {
  const [products, setProducts] = useState([
    {
      id: '1',
      title: 'Classic White Sneakers',
      price: 99.99,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJtJW6X3nVjMyAv3y7xK8QjQGcdh8a6JKRQ&s',
      isFavorite: false,
      description: 'Comfortable and stylish sneakers for everyday wear',
      sizes: ['7', '8', '9', '10', '11'],
      rating: 4.5,
    },
    {
      id: '2',
      title: 'Classic White Sneakers',
      price: 99.99,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJtJW6X3nVjMyAv3y7xK8QjQGcdh8a6JKRQ&s',
      isFavorite: false,
      description: 'Comfortable and stylish sneakers for everyday wear',
      sizes: ['7', '8', '9', '10', '11'],
      rating: 4.5,
    },
    {
      id: '3',
      title: 'Classic White Sneakers',
      price: 99.99,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJtJW6X3nVjMyAv3y7xK8QjQGcdh8a6JKRQ&s',
      isFavorite: false,
      description: 'Comfortable and stylish sneakers for everyday wear',
      sizes: ['7', '8', '9', '10', '11'],
      rating: 4.5,
    },
    {
      id: '4',
      title: 'Classic White Sneakers',
      price: 99.99,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJtJW6X3nVjMyAv3y7xK8QjQGcdh8a6JKRQ&s',
      isFavorite: false,
      description: 'Comfortable and stylish sneakers for everyday wear',
      sizes: ['7', '8', '9', '10', '11'],
      rating: 4.5,
    },
    // Add more products as needed
  ]);

  const toggleFavorite = productId => {
    setProducts(
      products.map(product =>
        product.id === productId
          ? {...product, isFavorite: !product.isFavorite}
          : product,
      ),
    );
  };

  const renderProductItem = ({item}) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetails', {product: item})}>
      <Image
        source={{
          uri: `${item.image}`,
        }}
        style={styles.productImage}
      />
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => toggleFavorite(item.id)}>
        <MCIcon
          name={item.isFavorite ? 'heart' : 'heart-outline'}
          size={24}
          color={item.isFavorite ? 'red' : 'black'}
        />
      </TouchableOpacity>
      <View style={styles.productInfo}>
        <Text style={styles.productTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.fadeBG,
  },
  header: {
    padding: 16,
    backgroundColor: Colors.primary,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productList: {
    padding: 8,
  },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    elevation: 3,
    maxWidth: Dimensions.get('window').width / 2 - 16,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  favoriteButton: {
    position: 'absolute',
    right: 8,
    top: 8,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 15,
    padding: 4,
  },
  productInfo: {
    padding: 8,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    // color: Colors.primary,
  },
});

export default Home;
