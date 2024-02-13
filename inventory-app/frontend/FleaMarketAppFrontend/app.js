// App.js or your navigation setup file
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import InventoryListScreen from './src/screens/InventoryListScreen';
import AddEditItemScreen from './src/screens/AddEditItemScreen';
import ItemDetailScreen from './src/screens/ItemDetailScreen';
// Import other screens

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="InventoryList" component={InventoryListScreen} />
        <Stack.Screen name="AddEditItem" component={AddEditItemScreen} />
        <Stack.Screen name="ItemDetailScreen" component={ItemDetailScreen} />
        {/* Add other screens */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
