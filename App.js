import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNaviagtor from './src/navigation/AppNaviagtor';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} />
      <AppNaviagtor />
    </SafeAreaProvider>
  );
};
export default App;
