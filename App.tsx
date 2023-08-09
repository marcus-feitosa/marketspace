import { NativeBaseProvider, Text, Box, Spinner } from "native-base";
import {useFonts, Karla_400Regular, Karla_700Bold} from '@expo-google-fonts/karla'
import { StatusBar } from 'react-native';

import { THEME } from './src/theme';
import { SignIn } from "./src/pages/SignIn";
import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  const [fontsLoaded] = useFonts({Karla_400Regular, Karla_700Bold})
  return (
  
      <NativeBaseProvider theme={THEME} >
        <SafeAreaView>
          <StatusBar 
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
          />
        </SafeAreaView>
        {fontsLoaded ? <SignIn/> : <Spinner />}
      </NativeBaseProvider>
 
  );
}

