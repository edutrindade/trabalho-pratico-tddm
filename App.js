import React from 'react';
import Routes from './src/routes';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Loading from './src/components/loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    fontsLoaded ? (
      <Routes />
    ) : (
      <Loading />
    )
  );
}
