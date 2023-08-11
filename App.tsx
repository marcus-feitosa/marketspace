import { NativeBaseProvider, Spinner } from "native-base";
import {useFonts, Karla_400Regular, Karla_700Bold} from '@expo-google-fonts/karla'
import { SafeAreaView, StatusBar } from 'react-native';

import { THEME } from './src/theme';
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({Karla_400Regular, Karla_700Bold})
  return (
  
      <NativeBaseProvider theme={THEME} >
     
          <StatusBar 
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
          />
          
      
        {fontsLoaded ? <Routes/> : <Spinner />}
      </NativeBaseProvider>
 
  );
}

