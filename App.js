import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { DangerZone } from 'expo';
// const { Lottie } = DangerZone;
import { API } from './api/openWeather';
import Weather from './src/components/Weather';
import * as location from 'expo-location';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        isLoading:true,
        temperature: 0,
        weatherCondition: null,
        error: null
    }
}

componentDidMount() {
    // navigator.geolocation.getCurrentPosition(
    //     position => {
    //         this.fetchWeather(position.coords.latitude, position.coords.longitude);
    //     },
    //     error => {
    //         this.setState({
    //             error: 'Error Getting Weather Condtions'
    //         });
    //     }
    // );
    this.fetchWeather();
}


fetchWeather() {

    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=25&lon=25&APPID=28802d3e64f02a654fe9b8b5b345e06b&units=metric`
    )
        .then(res => res.json())
        .then(json => {
            // console.log(json);
            this.setState({
                temperature:json.main.temp,
                weatherCondition:json.weather[0].main,
                isLoading:false
            })
        });
}

  render(){
    const { isLoading, weatherCondition, temperature } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Fetching The Weather</Text>
          </View>
        ) : (
          <Weather weather={weatherCondition} temperature={temperature} />
        )}
      </View>
    );
  }
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
  },
  loadingText:{
    alignSelf: 'center',
  }
});
