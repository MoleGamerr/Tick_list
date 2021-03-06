import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';

const Group = (props) => {

    return (
        <View style={styles.group}>
            <Text style={styles.groupText}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    group:{
        backgroundColor:'#dfdfdf',
        borderRadius:10,
        padding:10,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',

    },
    groupText:{
        fontSize:16,
    },
});

export default Group;