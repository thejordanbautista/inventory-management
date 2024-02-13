import React from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const RegisterSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});


const RegisterScreen = ({ navigation }) => {
  const handleRegister = async (values, actions) => {
    try {
      const response = await fetch('https://your-backend-api.com/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      const data = await response.json();

      //BYPASSING BACKEND
      //response.ok = True;

      if (response.ok) {
        // Handle successful registration
        console.log("log in success");
        const userData = await response.json();
        setAuthState({ isLoggedIn: true, token: userData.token }); // Assuming you receive a token and have a context/provider for auth
        navigation.navigate('Dashboard');
      } else {
        // Handle backend errors (e.g., email already in use)
        Alert.alert('Registration Failed', data.message || 'An error occurred. Please try again.');
        actions.setSubmitting(false);
      }
      
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred. Please check your network and try again.');
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={RegisterSchema}
      onSubmit={(values, actions) => {
        // Handle the form submission. This is where you might call your API.
        console.log(values);
        Alert.alert('Registration Successful', 'You are now registered');
        actions.resetForm();
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
          />
          {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
          />
          {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

          <Button onPress={handleSubmit} title="Register" color="blue" />
        </View>
      )}
    </Formik>
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
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
  },
});

export default RegisterScreen;
