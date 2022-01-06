import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style= {styles.text} style={{fontSize:36}} >Hello World!{"\n"}{"\n"}</Text>
      <Image source={{uri: 'https://miro.medium.com/max/3200/1*0KFB17_NGTPB0XWyc4BSgQ.jpeg'}} style={styles.img}/>
      <Text style={styles.text}>Hello World from group 13 Gints Kristaps Pērkons!{"\n"}{"\n"}</Text>
      <Text style={styles.text}>This is my Gints Kristaps Pērkons first React Native application!</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#19f5a9' ,
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    width:  200,
    height: 100,
    borderRadius: 1000,
  },
  text: {
    fontWeight: 'bold' ,
  }
});
