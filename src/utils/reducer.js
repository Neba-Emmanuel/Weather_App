const initialState = {
  temperature: 0,
  weatherCondition: "",
  isLoading: true,
  latitude: 0,
  longitude: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "setTemperature":
      return { ...state, temperature: action.payload };
    case "setWeatherCondition":
      return { ...state, weatherCondition: action.payload };
    case "setIsLoading":
      return { ...state, isLoading: action.payload };
    case "setLatitude":
      return { ...state, latitude: action.payload };
    case "setLongitude":
      return { ...state, longitude: action.payload };
    default:
      return state;
  }
};

export { initialState, reducer };
