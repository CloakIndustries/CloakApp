import React from 'react';
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
import HeaderWithName from '../component/HeaderWithName';

const {width} = Dimensions.get('window');

const CategoryProducts = ({route, navigation}) => {
  const {category, products} = route.params;

  const renderProduct = ({item}) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetails', {product: item})}>
      <Image
        source={{uri: item.image}}
        style={styles.productImage}
        resizeMode="cover"
      />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.productPrice}>₹{item.price}</Text>
        <View style={styles.ratingContainer}>
          <MCIcon name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <HeaderWithName headerName={category} />
      <FlatList
        data={products}
        renderItem={renderProduct}
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
  productList: {
    padding: 8,
  },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    overflow: 'hidden',
    maxWidth: width / 2 - 16,
  },
  productImage: {
    width: '100%',
    height: width / 2 - 16,
  },
  productInfo: {
    padding: 8,
  },
  productTitle: {
    fontSize: 14,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#666',
  },
});

export default CategoryProducts;
