import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function Steps() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>How to Do Self Testing</Text>
      <Text>Follow the Steps</Text>
    </View>
  );
}
function Step1() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>step-1</Text>
    </View>
  );
}
function Step2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Step-2</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Steps' component={Steps} />
      <Tab.Screen name='A' component={Step1} />
      <Tab.Screen name='B' component={Step2} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"lightyellow"
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    
  },
});