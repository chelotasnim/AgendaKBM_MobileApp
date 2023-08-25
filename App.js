import React, { useEffect } from 'react';
import Navigation from './Components/Navigation/StudentNavigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <Navigation />
    </>
  );
};

export default App;