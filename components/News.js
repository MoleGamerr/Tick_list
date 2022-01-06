import React, {useContext} from 'react'
import { StyleSheet,View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { NewsContext } from "../NewsContext";
import NewsArticle from './NewsArticle';
import Spinner from 'react-native-loading-spinner-overlay';

function News() {
    const { data } = useContext(NewsContext);
    return (
        <View>{data ? data.articles.map(news => 
            <NewsArticle data={news} />
         ) : <Spinner
         visible={true}
         textContent={'Loading...'}
         textStyle={styles.spinnerTextStyle}
       />
         }</View>

)
}

const styles = StyleSheet.create({
    spinnerTextStyle: {
      color: '#FFF'
    }
});
export default News