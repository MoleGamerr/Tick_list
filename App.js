import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import List_View from "./List_View";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useEffect, useState} from "react";

function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);

return(

  <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('List View')}  style={styles.button}>
        <Text>List View</Text>
      </TouchableOpacity>
      <View style={styles.countView}>
      <TouchableOpacity onPress={() => setCount(count + 1)} style={styles.button}>
        <Text>Increase count</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCount(count - 1)} style={styles.button}>
        <Text>Decrease count</Text>
      </TouchableOpacity>
      </View>
      <Text style={styles.text}>Current count: {count}</Text>
    
  </View>
);

}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} style={styles.container}/>
        <Stack.Screen name="List View" component={List_View} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#77ccff',
    padding:'10px',
    margin: '10px',
    width: '97%',

  },
  countView: {
    backgroundColor: '#fff',
    margin: '10px',
    width: '100%',
  },
  text: {
    backgroundColor: '#fff',
    padding:'10px',
    color: '#aaa',
    width: '100%',
    textAlign: 'left',
  }
});