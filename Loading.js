import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'
import LottieView from 'lottie-react-native'

const Loading = () => {
  return <View style={styles.container}>
    <StatusBar style="auto" />
    <LottieView source={require('./assets/watermelon.json')} autoPlay />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: '#fdf6aa'
  },
  lottie: {
    width: 400,
    height: 400,
    backgroundColor: '#ffffff'
  },
})

export default Loading
