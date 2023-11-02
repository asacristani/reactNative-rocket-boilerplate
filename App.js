import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';

import { AuthStackScreen, HomeTabScreen } from './src/navigation'
import { SplashScreen } from './src/screens'

function App() {

  const [loading, setLoading] = useState(false)
  const user = useSelector((state) => state.user);


  // if (loading) {
  //   return (
  //     <SplashScreen/>
  //   )
  // }

  return (
    <NavigationContainer>
      {user.user != null ? (
        <HomeTabScreen/>
      ) : (
        <AuthStackScreen/>
      )}
    </NavigationContainer>
  );
}

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>
  )
}