import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';

const Task = (props) => {

    return (
        <View style={styles.task}>
            <Text style={styles.taskText}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    task:{
        backgroundColor:'#dfdfdf',
        borderRadius:10,
        padding:10,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',

    },
    taskText:{
        fontSize:16,
    },
});

export default Task;