import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default function List_View({ route, navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.list}>
                <Text style={styles.text}>John Doe 1</Text>
                <Text style={styles.text}>John Doe 2</Text>
                <Text style={styles.text}>John Doe 3</Text>
                <Text style={styles.text}>John Doe 4</Text>
                <Text style={styles.text}>John Doe 5</Text>
            </ScrollView>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      textAlign: 'center',
    },
    text: {
        backgroundColor: '#ddd',
        margin: '10px',
        padding: '10px',
        width: '100%',
    },
    list: {
        width:'100%',
    }
  });