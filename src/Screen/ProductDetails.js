import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../utill/Colors';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../component/CustomButton';
import HeaderWithName from '../component/HeaderWithName';

const ProductDetails = ({route, navigation}) => {
  const {product} = route.params;
  const [selectedSize, setSelectedSize] = useState(null);
  const [isFavorite, setIsFavorite] = useState(product.isFavorite);

  const handleAddToCart = () => {
    if (!selectedSize) {
      Alert.alert('Please select a size');
      return;
    }
    // Add to cart logic here
    navigation.navigate('Cart');
  };

  const renderStars = rating => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <MCIcon
          key={i}
          name={i <= rating ? 'star' : 'star-outline'}
          size={20}
          color="#FFD700"
        />,
      );
    }
    return stars;
  };

  return (
    <>
      <HeaderWithName headerName={ProductDetails} />
      <ScrollView style={styles.container}>
        <Image
          source={{
            uri: `${product.image}`,
          }}
          style={styles.image}
        />
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => setIsFavorite(!isFavorite)}>
          <MCIcon
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={28}
            color={isFavorite ? 'red' : 'black'}
          />
        </TouchableOpacity>

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>

          <View style={styles.ratingContainer}>
            {renderStars(product.rating)}
            <Text style={styles.ratingText}>({product.rating})</Text>
          </View>

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>

          <Text style={styles.sectionTitle}>Select Size</Text>
          <View style={styles.sizesContainer}>
            {product.sizes.map(size => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeButton,
                  selectedSize === size && styles.selectedSize,
                ]}
                onPress={() => setSelectedSize(size)}>
                <Text
                  style={[
                    styles.sizeText,
                    selectedSize === size && styles.selectedSizeText,
                  ]}>
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <CustomButton
            style={styles.addToCartButton}
            buttonText="Add to Cart"
            onPress={handleAddToCart}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.fadeBG,
  },
  image: {
    width: '100%',
    height: 300,
  },
  favoriteButton: {
    position: 'absolute',
    right: 16,
    top: 16,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 20,
    padding: 8,
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  sizesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: 12,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 8,
    minWidth: 48,
    alignItems: 'center',
  },
  selectedSize: {
    backgroundColor: Colors.primary,
  },
  sizeText: {
    fontSize: 16,
    color: Colors.primary,
  },
  selectedSizeText: {
    color: Colors.primary,
  },
  addToCartButton: {
    marginTop: 24,
  },
});

export default ProductDetails;
