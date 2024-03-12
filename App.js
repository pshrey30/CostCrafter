import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigation from './src/Navigation/AppNavigation'
import { Provider } from 'react-redux'
import { store } from './src/Redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigation />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App