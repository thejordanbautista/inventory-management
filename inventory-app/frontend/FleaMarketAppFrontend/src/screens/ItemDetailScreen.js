import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

// Mock function to simulate fetching item details from an ID
const fetchItemDetails = (itemId) => {
  // In a real app, you would fetch this data from your backend based on the itemId
  return {
    id: itemId,
    title: 'Sample Item',
    brand: 'Brand Name',
    size: 'Medium',
    itemType: 'Type',
    price: '$25',
    photoUri: 'https://via.placeholder.com/150', // Placeholder image
  };
};

const ItemDetailScreen = ({ route }) => {
  const { itemId } = route.params;
  const item = fetchItemDetails(itemId);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={{ uri: item.photoUri }} style={styles.image} />
      <Text style={styles.info}>Brand: {item.brand}</Text>
      <Text style={styles.info}>Size: {item.size}</Text>
      <Text style={styles.info}>Type: {item.itemType}</Text>
      <Text style={styles.info}>Price: {item.price}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default ItemDetailScreen;
