//import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home'
import TestScreen from './screens/Test'
import VariantScreen from './screens/Variant'
import PreventScreen from './screens/Prevent'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen name="Variants" component={VariantScreen} />
        <Stack.Screen name="Prevent" component={PreventScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;