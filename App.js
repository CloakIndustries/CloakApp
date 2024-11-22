import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNaviagtor from './src/navigation/AppNaviagtor';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNaviagtor />
    </SafeAreaProvider>
  );
};
export default App;
