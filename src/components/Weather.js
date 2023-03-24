import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from './WeatherConditions';

const Weather = (props) => {
  if (props.weather != null) {
    return (
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Weather App</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 80}}>
          <MaterialCommunityIcons size={150} name='alpha' color={'gold'}/>
          <Text style={{fontSize: 150, color: '#fff', marginLeft: 35}}>{props.temperature}˚</Text>
        </View>
        <View style={{marginTop: 40}}>
          <Text style={{fontSize: 50, color: '#fff', marginLeft: 25}}>{props.weather}</Text>
          <Text style={{fontSize: 24, color: '#fff', marginLeft: 25}}>{props.weather}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text>something went wrong</Text>
      </View>
    )
  };
};

// Weather.propTypes = {
//   temperature: PropTypes.number.isRequired,
//   weather: PropTypes.string
// };

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

export default Weather;
