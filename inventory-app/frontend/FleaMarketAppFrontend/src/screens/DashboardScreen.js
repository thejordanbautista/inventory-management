import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <Button
        title="See Inventory"
        onPress={() => navigation.navigate('InventoryList')}
      />
      <Button
        title="See Sales"
        onPress={() => navigation.navigate('SalesTracking')}
      />
      <Button
        title="Add Item"
        onPress={() => navigation.navigate('AddEditItem')}
      />
      <Button
        title="Sell Item"
        onPress={() => navigation.navigate('SalesReport')}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Dashboard;
