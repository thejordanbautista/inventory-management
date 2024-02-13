import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

const SalesReportScreen = () => {
  const [manualId, setManualId] = useState('');

  const handleQRCodeScanned = (e) => {
    // Process QR code
    Alert.alert("QR Code Scanned", `Code: ${e.data}`);
    // Navigate or fetch data based on QR code
  };

  const handleManualSubmit = () => {
    if (!manualId.trim()) {
      Alert.alert("Error", "Please enter a valid ID");
      return;
    }
    // Process manual ID
    Alert.alert("Manual ID Entered", `ID: ${manualId}`);
    // Navigate or fetch data based on manual ID
  };

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={handleQRCodeScanned}
        flashMode={RNCamera.Constants.FlashMode.auto}
        topContent={<Text style={styles.centerText}>Scan your QR code</Text>}
        bottomContent={<View/>}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Unique ID"
        value={manualId}
        onChangeText={setManualId}
      />
      <Button title="Submit" onPress={handleManualSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    margin: 20,
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
  centerText: {
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
});

export default SalesReportScreen;
