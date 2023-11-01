import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthStackScreen, HomeTabScreen } from './src/navigation'
import { SplashScreen } from './src/screens'

export default function App() {

  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)


  if (loading) {
    return (
      <SplashScreen/>
    )
  }

  return (
    <NavigationContainer>
      {user != null ? (
        <HomeTabScreen updateUser={setUser}/>
      ) : (
        <AuthStackScreen updateUser={setUser}/>
      )}
    </NavigationContainer>
  );
}