import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNaviagtor from './src/navigation/AppNaviagtor';
import {Colors} from './src/utill/Colors';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.primary} />
      <AppNaviagtor />
    </SafeAreaProvider>
  );
};
export default App;
