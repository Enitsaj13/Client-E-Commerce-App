import { Platform } from 'react-native'

let baseUrl = ''

if (Platform.OS === 'android') {
  baseUrl = 'http://10.0.2.2:8080/api/v1/'
} else {
  baseUrl = 'http://localhost:3000/api/v1/'
}

// production
// let baseUrl = 'https://eshop-backend-k4zi.onrender.com/api/v1/'

export default baseUrl
