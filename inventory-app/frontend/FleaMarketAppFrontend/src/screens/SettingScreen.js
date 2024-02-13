import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      
      {/* Account Management */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <Text>Manage Account</Text>
        </TouchableOpacity>
      </View>
      
      {/* App Preferences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.option}>
          <Text>Enable Notifications</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      
      {/* About the App */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <Text>Version 1.0.0</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
});

export default SettingsScreen;
