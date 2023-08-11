import { NavigationContainer } from '@react-navigation/native'
import FocusedStatusBar from '@src/components/FocusedStatusBar'
import Toast from 'react-native-toast-message'

/* --- main navigator --- */
import RootNavigator from '@src/navigations/RootNavigator'

/* --- redux --- */
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from '@src/rtk/store'


const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <FocusedStatusBar barStyle="light-content" />
          <RootNavigator />
          <Toast />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App


