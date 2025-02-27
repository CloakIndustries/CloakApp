export const CategoryData = {
  mainCategories: [
    {
      id: '1',
      name: 'For You',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4k5IqnLRNy_Y_Ypg6WOF9yYNCMYSPveqjA&s',
    },
    {
      id: '2',
      name: 'Kilos',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4k5IqnLRNy_Y_Ypg6WOF9yYNCMYSPveqjA&s',
    },
    {
      id: '3',
      name: 'Fashion',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4k5IqnLRNy_Y_Ypg6WOF9yYNCMYSPveqjA&s',
    },
    {
      id: '4',
      name: 'Appliances',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4k5IqnLRNy_Y_Ypg6WOF9yYNCMYSPveqjA&s',
    },
    {
      id: '5',
      name: 'Mobiles',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4k5IqnLRNy_Y_Ypg6WOF9yYNCMYSPveqjA&s',
    },
    {
      id: '6',
      name: 'Electronics',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4k5IqnLRNy_Y_Ypg6WOF9yYNCMYSPveqjA&s',
    },
    {
      id: '7',
      name: 'Smart Gadgets',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4k5IqnLRNy_Y_Ypg6WOF9yYNCMYSPveqjA&s',
    },
    {
      id: '8',
      name: 'Home',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4k5IqnLRNy_Y_Ypg6WOF9yYNCMYSPveqjA&s',
    },
  ],
  subCategories: {
    1: [
      // Fashion subcategories
      {
        id: 'f1',
        name: 'Winterwear',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY9O2FaPm0Qo3Cib4jEr6zqhki7PFUHtLGLA&s',
        products: [
          {
            id: 'w1',
            title: 'Winter Jacket',
            price: 2999,
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY9O2FaPm0Qo3Cib4jEr6zqhki7PFUHtLGLA&s',
            description: 'Warm and stylish winter jacket',
            category: 'winterwear',
            rating: 4.5,
          },
          // Add more products
        ],
      },
      {
        id: 'f2',
        name: 'T-shirts & Casual shirts',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY9O2FaPm0Qo3Cib4jEr6zqhki7PFUHtLGLA&s',
        products: [
          // Add products
        ],
      },
      // Add more subcategories
    ],
    2: [
      // Mobiles subcategories
      {
        id: 'm1',
        name: 'Samsung',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5PBLWfBwQiWf1ambl6WpFjzQxD9nPyH1ksg&s',
        products: [
          // Add products
        ],
      },
      // Add more subcategories
    ],
    // Add more categories
  },
};

// Add more dummy data for products
export const ProductsData = {
  winterwear: [
    {
      id: 'w1',
      title: 'Winter Jacket',
      price: 2999,
      image: 'https://example.com/winter-jacket.jpg',
      description: 'Warm and stylish winter jacket',
      category: 'winterwear',
      rating: 4.5,
    },
    // Add more products
  ],
  // Add more categories
};
