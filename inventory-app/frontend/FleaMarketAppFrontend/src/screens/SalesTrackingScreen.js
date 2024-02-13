import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SalesTrackingScreen = ({ navigation }) => {
  // Mock data for demonstration
  const salesData = {
    soldToday: 5,
    soldTotal: 150,
    revenueToday: '$100',
    revenueTotal: '$15,000',
    averageSaleValue: '$100',
    profit: '$10,000',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sales Tracking</Text>
      <View style={styles.metricsContainer}>
        <Text style={styles.metric}>Items Sold Today: {salesData.soldToday}</Text>
        <Text style={styles.metric}>Total Items Sold: {salesData.soldTotal}</Text>
        <Text style={styles.metric}>Revenue Today: {salesData.revenueToday}</Text>
        <Text style={styles.metric}>Total Revenue: {salesData.revenueTotal}</Text>
        <Text style={styles.metric}>Average Sale Value: {salesData.averageSaleValue}</Text>
        <Text style={styles.metric}>Profit: {salesData.profit}</Text>
      </View>
      <Button title="View Sales Report" onPress={() => navigation.navigate('SalesReportScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  metricsContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
  },
  metric: {
    fontSize: 18,
    marginVertical: 8,
  },
});

export default SalesTrackingScreen;
