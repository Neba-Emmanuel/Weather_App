import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons'; 

export default function App() {
const [condition, setCondition] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Weather App</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 80}}>
        <Feather name="sun" size={150} color="gold" />
        <Text style={{fontSize: 150, color: '#fff', marginLeft: 35}}>29˚</Text>       
      </View>      
      <View style={{marginTop: 40}}>
        <Text style={{fontSize: 50, color: '#fff'}}> Sun </Text>
        <Text style={{fontSize: 24, color: '#fff', marginLeft: 15}}>Always bright and warm</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'center',
    marginTop: 20
  },
  headerText:{
    fontSize: 32,
    color: '#fff'
  }
});
