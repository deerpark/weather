import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import styled from 'styled-components/native'

const backgroundColor = {
  Thunderstorm: '#9E9E9D',
  Drizzle: '#B1B1B1',
  Rain: '#CCCCCC',
  Snow: '#e5e5e5',
  Atmosphere: '#CCCCCC',
  Clear: '#0091FF',
  Clouds: '#32C5FF',
}

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-horizontal: 30px;
  padding-vertical: 100px;
  background-color: ${({main}) => backgroundColor[main] || '#ffffff' };
`;

export default function Weather(props) {
  const { condition: { main, icon }, weather: { temp } } = props
  return <Container main={main}>
    <View style={styles.condition}>
      <Image source={{
          uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
        }} />
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.main}>{main}</Text>
    </View>
    <Text style={styles.temp}>{temp}</Text>
  </Container>
}

const styles = StyleSheet.create({
  condition: {
  },
  icon: {
    width: 50,
    height: 50,
  },
  main: {
    color: '#2c2c2c',
    fontSize: 30
  },
  temp: {
    color: '#2c2c2c',
    fontSize: 100
  }
})