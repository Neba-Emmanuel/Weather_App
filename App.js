import React, { useState, useEffect, useReducer } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import Weather from "./src/components/Weather";
import { initialState, reducer } from "./src/utils/reducer";
import * as Location from "expo-location";
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    console.log("Location permission", status);
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }
    let locationSubscription = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (location) => {
        dispatch({ type: "setLatitude", payload: location.coords.latitude });
        dispatch({ type: "setLongitude", payload: location.coords.longitude });
      }
    );
    return locationSubscription;
  };
  const fetchWeather = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${state.latitude}&lon=${state.longitude}&APPID=28802d3e64f02a654fe9b8b5b345e06b&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "setTemperature", payload: data.main.temp });
        dispatch({
          type: "setWeatherCondition",
          payload: data.weather[0].main,
        });
        dispatch({ type: "setIsLoading", payload: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getLocation();
  }, []);
  useEffect(() => {
    fetchWeather();
  }, [state.location, state.latitude]);
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="black"/>
      {state.isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Fetching Weather Data</Text>
        </View>
      ) : (
        <Weather
          weather={state.weatherCondition}
          temperature={state.temperature}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFDE4",
  },
  loadingText: {
    fontSize: 30,
    color: '#fff'
  },
});

export default App;
