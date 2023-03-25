import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from './WeatherConditions';

const Weather = ({weather, temperature}) => {
  if (weather != null) {
    return (
      <View style={[styles.container, { backgroundColor: weatherConditions[weather].color }]}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Weather App</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 100}}>
          <MaterialCommunityIcons size={150} name={weatherConditions[weather].icon} color={'gold'}/>
          <Text style={{fontSize: 100, color: '#fff', marginLeft: 35}}>{temperature}˚</Text>
        </View>
        <View style={{marginTop: 100}}>
          <Text style={{fontSize: 50, color: '#fff', marginLeft: 25}}>{weatherConditions[weather].title}</Text>
          <Text style={{fontSize: 24, color: '#fff', marginLeft: 25}}>{weatherConditions[weather].subtitle}</Text>
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

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string
};

const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'center',
    marginTop: 50
  },
  headerText:{
    fontSize: 32,
    color: '#fff'
  },
  container:{
    flex: 1
  }
});

export default Weather;
