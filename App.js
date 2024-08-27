import { View, Text } from 'react-native'
import React from 'react'
import {Provider} from 'react-redux'
import { persistor, store } from './src/redux/store'
import Navigation from './src/navigation/Navigation'
import { PersistGate } from 'redux-persist/integration/react'
const App = () => {
  return (
      <Provider store={store}>
          <PersistGate loading = {null} persistor={persistor}>
            <Navigation/>
        </PersistGate>
      </Provider>
  )
}

export default App