import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import QRCode from 'react-native-qrcode-svg';

const AddItemScreen = () => {
  const [formData, setFormData] = useState({
    title: '',
    brand: '',
    size: '',
    itemType: '',
    price: '',
    photo: null, // For storing the selected photo
    uniqueId: '', // This will be generated based on the form data or other logic
  });

  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, (response) => {
      if (response.assets) {
        setFormData({...formData, photo: response.assets[0]});
      }
    });
  };

  const handleSaveItem = () => {
    // Here you would typically send formData to your backend or state management
    console.log(formData);
    try {
        // Assume you save the item successfully
        // Now navigate back to the InventoryListScreen
        navigation.navigate('InventoryListScreen'); // If you want to ensure navigation regardless of the previous screen
      } catch (error) {
        console.error(error);
        // Handle save error
      }
    // Generate uniqueId for QR Code, could be done backend or here
    setFormData({...formData, uniqueId: 'GeneratedOrFetchedUniqueId'});
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={formData.title}
        onChangeText={text => setFormData({...formData, title: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="ItemType"
        value={formData.itemType}
        onChangeText={text => setFormData({...formData, itemType: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={formData.price}
        onChangeText={text => setFormData({...formData, price: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Size"
        value={formData.size}
        onChangeText={text => setFormData({...formData, size: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Brand"
        value={formData.brand}
        onChangeText={text => setFormData({...formData, brand: text})}
      />
      {/* Repeat TextInput for size, itemType, and price */}
      <TouchableOpacity onPress={handleChoosePhoto}>
        <Text>Choose Photo</Text>
      </TouchableOpacity>
      {formData.photo && (
        <Image source={{ uri: formData.photo.uri }} style={styles.image} />
      )}
      <Button title="Save Item" onPress={handleSaveItem} />
      {formData.uniqueId && <QRCode value={formData.uniqueId} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginVertical: 8,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});

export default AddItemScreen;
