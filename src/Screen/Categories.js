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
import {CategoryData} from '../db/data';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('window');

const Categories = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState('1'); // Default to Fashion

  const renderMainCategory = ({item}) => (
    <TouchableOpacity
      style={[
        styles.mainCategoryItem,
        selectedCategory === item.id && styles.selectedMainCategory,
      ]}
      onPress={() => setSelectedCategory(item.id)}>
      <Image source={{uri: `${item.icon}`}} style={styles.categoryIcon} />
      <Text
        style={[
          styles.categoryName,
          selectedCategory === item.id && styles.selectedCategoryName,
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderSubCategory = ({item}) => (
    <TouchableOpacity
      style={styles.subCategoryItem}
      onPress={() =>
        navigation.navigate('CategoryProducts', {
          category: item.name,
          products: item.products,
        })
      }>
      <Image
        source={{uri: item.image}}
        style={styles.subCategoryImage}
        resizeMode="cover"
      />
      <Text style={styles.subCategoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>All Categories</Text>
        <TouchableOpacity>
          <MCIcon name="magnify" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Main Categories (Left Side) */}
        <View style={styles.mainCategoriesContainer}>
          <FlatList
            data={CategoryData.mainCategories}
            renderItem={renderMainCategory}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>

        {/* Sub Categories (Right Side) */}
        <View style={styles.subCategoriesContainer}>
          <FlatList
            data={CategoryData.subCategories[selectedCategory] || []}
            renderItem={renderSubCategory}
            keyExtractor={item => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.subCategoriesList}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.fadeBG,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.primary,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  mainCategoriesContainer: {
    width: width * 0.25,
    backgroundColor: Colors.primary,
    paddingVertical: 8,
  },
  mainCategoryItem: {
    alignItems: 'center',
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: 'transparent',
  },
  selectedMainCategory: {
    borderLeftColor: Colors.primary,
    backgroundColor: Colors.fadeBG,
  },
  categoryIcon: {
    width: 50,
    height: 50,
    marginBottom: 4,
  },
  categoryName: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
  },
  selectedCategoryName: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  subCategoriesContainer: {
    flex: 1,
    backgroundColor: Colors.fadeBG,
  },
  subCategoriesList: {
    padding: 8,
  },
  subCategoryItem: {
    flex: 1,
    margin: 8,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    overflow: 'hidden',
  },
  subCategoryImage: {
    width: '100%',
    height: width * 0.3,
  },
  subCategoryName: {
    padding: 8,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Categories;
