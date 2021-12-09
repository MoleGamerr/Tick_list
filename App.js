import React, {useState} from "react";
import {KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity, Keyboard,ScrollView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements';
import Group from './components/Group';
import Tasks_screen from "./Tasks_screen";


function HomeScreen({ navigation }) {
  const [task, setTask] = useState();
  const [taskGroups, setTaskGroups] = useState([]);

  const deleteGroup = (index)=> {
    let groupsCopy = [...taskGroups];
    groupsCopy.splice(index, 1);
    setTaskGroups(groupsCopy);
  }

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskGroups([...taskGroups, task])
    setTask(null);
  }
  return (
    <View style={styles.container}>
      <View style={styles.groupWrapper}>
        <Text style={styles.groupTitle}>Groups</Text>
        <ScrollView>
        <View style={styles.GroupItems}>
         {
           taskGroups.map((group, index) =>{
             return <TouchableOpacity style={styles.group} key={index} onPress={() => navigation.navigate('Tasks',{group:group , index:index})}>
                    <Group text={group} />
                        <TouchableOpacity onPress={()=>deleteGroup(index)}>
                        <Icon
                                    reverse
                                    name='trash'
                                    type='entypo'
                                    color='#517fa4'
                                    size={12}
                                />
                        </TouchableOpacity>
             </TouchableOpacity>
           })
         }
        </View>
        </ScrollView>
      </View>
      
      <KeyboardAvoidingView
        behavior= {Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeGroupWrapper}
      >
        <TextInput style={styles.input} placeholder={'Group name'} value={task} onChangeText={text => setTask(text)} />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View>
              <Icon
                    reverse
                    name='plus'
                    type='entypo'
                    color='#517fa4'
                    size={30} />
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} style={styles.container}/>
        <Stack.Screen name="Tasks" component={Tasks_screen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  groupWrapper:{
    flex:1,
    paddingTop: 5,
    paddingHorizontal:20,
    marginBottom:90,
  },
  group:{
    backgroundColor:'#dfdfdf',
    borderRadius:10,
    padding:5,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:10,
    
},
  groupTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  writeGroupWrapper:{
    flex:1,
    position:'absolute',
    bottom: 10,
    width:'100%',
    flexDirection:"row",
    justifyContent : "space-between",
    alignItems:"center",
    backgroundColor: '#fff',
    },
  input:{
    paddingHorizontal: 25,
    paddingVertical:20,
    backgroundColor:'#ddd',
    borderRadius:60,
    width:'75%',
    borderColor:'#aaa',
    borderWidth:1,
  },

})