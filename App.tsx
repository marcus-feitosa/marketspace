import { NativeBaseProvider, Text, Box, Spinner } from "native-base";
import {useFonts, Karla_400Regular, Karla_700Bold} from '@expo-google-fonts/karla'
import { StatusBar } from 'react-native';

import { THEME } from './src/theme';
import { Login } from "./src/pages/Login";
import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  const [fontsLoaded] = useFonts({Karla_400Regular, Karla_700Bold})
  return (
  
      <NativeBaseProvider theme={THEME}>
        <SafeAreaView>
          <StatusBar 
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
          />
        </SafeAreaView>
        {fontsLoaded ? <Login/> : <Spinner />}
      </NativeBaseProvider>
 
  );
}

