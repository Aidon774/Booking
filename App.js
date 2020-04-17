import * as React from 'react';
//import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Details from './app/components/Details.js';
import Login from './app/components/Login.js';
import BookApp from './app/components/BookApp.js';
import HomeView from './app/components/HomeView.js';

function HomeScreen() {
  return (
    <HomeView/>
  );
}
function BookScreen() {
  return (
    <BookApp />
  );
}
function LoginScreen() {
  return (
    <Login />
  );
}

function DetailsScreen() {
  return (
    <Details />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Book Appointment" component={BookScreen} />
        <Tab.Screen name="Admin Login" component={LoginScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}