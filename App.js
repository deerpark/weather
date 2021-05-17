import React, { useState, useEffect } from 'react';
import Loading from './Loading'
import Weather from './Weather'
import {getCurrentPositionAsync, requestForegroundPermissionsAsync} from 'expo-location'
import axios from 'axios'

const API_KEY = '43eb164a43c4e530ab3d07e0fc4fcbb0'
const API_URL = `http://api.openweathermap.org/data/2.5/weather?units=metric`

export default function App() {
  const  [weather, setWeather] = useState(null)
  const  [condition, setCondition] = useState(null)
  const  [busy, setBusy] = useState(true)
  const  [msg, setMsg] = useState('loading...')

  const getWeather = async (latitude, longitude) => {
    const {data} = await axios.get(`${API_URL}&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    return data
  }
  
  const getLocation = async () => {
    try {
      const {status} = requestForegroundPermissionsAsync()
      if(status === 'granted') {
        setMsg('현재 위치 접근이 거절 되었습니다.')
        return
      }
      let {coords: { latitude, longitude }} = await getCurrentPositionAsync({})
      const {main, weather} = await getWeather(latitude, longitude)
      setWeather(main)
      setCondition(weather[0])
      setBusy(false)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return busy ? <Loading msg={msg} /> : <Weather weather={weather} condition={condition} />
}
