import React from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import { Linking } from 'react-native';

function NewsArticle({ data}) {
    const url = data.url
    return(
        <ScrollView style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.title}>{data.title}</Text>
                
                <Text style={styles.desc}>{data.description}</Text>
                
                <Text style={styles.url} onPress={() => Linking.openURL(url)}>{data.url}</Text>
                
                <Text style={styles.time}>{data.publishedAt}</Text>

            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title:{
        backgroundColor:'#ccc',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        padding:10,
        marginTop:15,
        fontWeight:"700",

    },
    desc:{
        backgroundColor:'#dfdfdf',
        padding:10,
        fontWeight:"500",

    },
    url:{
        backgroundColor:'#dfdfdf',
        color:'#009',
        padding:10,
        fontWeight:"500",

    },
    time:{
        backgroundColor:'#dfdfdf',
        padding:10,
        fontWeight:"500",
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,

    },
    container:{
        backgroundColor:'#fff',
        textAlign: 'center',
        
    }
});


export default NewsArticle