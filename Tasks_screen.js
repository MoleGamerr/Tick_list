import React, {useState} from "react";
import {KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard,ScrollView } from "react-native";
import { Icon } from 'react-native-elements';
import Task from './components/Tasks';

export default function Tasks_screen({ route, navigation }) {
        const [task, setTask] = useState();
        const [taskGroups, setTaskGroups] = useState([]);
        const { group } = route.params;
        const { index } = route.params;
        const deleteTask = (index)=> {
          let tasksCopy = [...taskGroups];
          tasksCopy.splice(index, 1);
          setTaskGroups(tasksCopy);
        }
      
        const handleAddTask = () => {
          Keyboard.dismiss();
          setTaskGroups([...taskGroups, task])
          setTask(null);
        }
        return (
          <View style={styles.container}>
            <View style={styles.taskWrapper}>
              <Text style={styles.taskTitle}>{group}</Text>
              <ScrollView>
                
                <View style={styles.TaskItems}>
                {
                  taskGroups.map((task, index) =>{
                    return <View style={styles.task} key={index} onPress={() => navigation.navigate('Tasks') }>
                          <Task text={task} />
                          <TouchableOpacity onPress={()=>deleteTask(index)}>
                              <Icon
                                    reverse
                                    name='trash'
                                    type='entypo'
                                    color='#517fa4'
                                    size={12}
                                />
                          </TouchableOpacity>
                    </View>
                  })
                }
                </View>
              </ScrollView>
            </View>
           <View> 
            <KeyboardAvoidingView
              behavior= {Platform.OS === "android" ? "padding" : "height"}
              style={styles.writeTaskWrapper}
            >
              <TextInput style={styles.input} placeholder={'Task'} value={task} onChangeText={text => setTask(text)} />
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
          </View>
        );
      
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    taskWrapper:{
        flex: 1,
        paddingTop: 5,
        paddingHorizontal:20,
        marginBottom:90,
    },
    task:{
        backgroundColor:'#dfdfdf',
    borderRadius:10,
    padding:5,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:10,
  },
  taskTitle:{
      fontSize: 24,
      fontWeight: 'bold',
    },
  writeTaskWrapper:{
      flex: 1,
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