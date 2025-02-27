import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Colors} from '../utill/Colors';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from '../component/Carousel';
import {EcommerceData} from '../db/data';
import {SearchBar} from '@rneui/themed';

const {width} = Dimensions.get('window');

const Home = ({navigation}) => {
  const [products, setProducts] = useState([
    {
      id: '1',
      title: 'Nike Air Max 270',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
      isFavorite: false,
      description:
        'The Nike Air Max 270 delivers unrivaled comfort and modern style.',
      sizes: ['7', '8', '9', '10', '11'],
      rating: 4.5,
      category: 'shoes',
    },
    {
      id: '2',
      title: 'Adidas Ultraboost',
      price: 179.99,
      image:
        'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800',
      isFavorite: false,
      description: 'Experience ultimate comfort with Adidas Ultraboost.',
      sizes: ['7', '8', '9', '10', '11'],
      rating: 4.8,
      category: 'pencil',
    },
    {
      id: '3',
      title: 'Puma RS-X',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800',
      isFavorite: false,
      description: 'Bold style meets modern comfort in the Puma RS-X.',
      sizes: ['7', '8', '9', '10', '11'],
      rating: 4.3,
      category: 'book',
    },
    // Add more products as needed
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Update filtered products when search query changes
  useEffect(() => {
    const filtered = products.filter(
      product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

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
    <View style={styles.productCard}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetails', {product: item})}>
        <Image
          source={{uri: item.image}}
          style={styles.productImage}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <View style={styles.ratingtxt}>
        <Text style={{color: 'white', paddingHorizontal: 5}}>
          Rating {item.rating}
        </Text>
      </View>

      <View style={styles.productInfo}>
        <View style={styles.productHeader}>
          <Text style={styles.productTitle} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.productPrice}>₹{item.price}</Text>
        </View>

        <View style={styles.interactionBar}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => toggleFavorite(item.id)}>
            <MCIcon
              name={item.isFavorite ? 'heart' : 'heart-outline'}
              size={24}
              color={item.isFavorite ? 'red' : 'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MCIcon name="cart-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MCIcon name="share-variant" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <SearchBar
            placeholder="Search products..."
            onChangeText={setSearchQuery}
            value={searchQuery}
            platform="android"
            containerStyle={styles.searchContainer}
            inputContainerStyle={styles.searchInputContainer}
            inputStyle={styles.searchInput}
          />
        </View>
        {/* <View style={styles.carouselContainer}>
          <Carousel data={carouselImages} />
        </View> */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Sale</Text>
        </View>

        <FlatList
          data={filteredProducts}
          renderItem={renderProductItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.productList}
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
  carouselContainer: {
    height: 200,
    marginBottom: 20,
    marginTop: 10,
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  productList: {
    padding: 8,
  },
  productCard: {
    width: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: width,
    backgroundColor: '#f0f0f0',
  },
  ratingtxt: {
    position: 'absolute',
    right: 12,
    top: 12,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    padding: 8,
  },
  productInfo: {
    padding: 12,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    marginRight: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  interactionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 8,
  },
  iconButton: {
    marginRight: 16,
    padding: 4,
  },
  searchContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingHorizontal: 16,
    marginBottom: 10,
    marginTop: 10,
  },
  searchInputContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  searchInput: {
    color: '#000',
  },
});

export default Home;
