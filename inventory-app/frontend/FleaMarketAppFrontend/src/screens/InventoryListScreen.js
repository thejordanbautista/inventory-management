import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';

// Mock data for inventory items
const mockInventoryItems = [
  { id: '1', title: 'Item 1', price: '$10' },
  { id: '2', title: 'Item 2', price: '$20' },
  // Add more items as needed
];

const InventoryListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('ItemDetailScreen', { itemId: item.id })}
    >
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockInventoryItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        style={styles.addItemButton}
        onPress={() => navigation.navigate('AddEditItem')}
      >
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  itemTitle: {
    fontSize: 18,
  },
  addItemButton: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default InventoryListScreen;
