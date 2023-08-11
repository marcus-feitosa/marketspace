import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import { AuthRoutes } from './auth.routes'
import { useTheme, Box } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Routes(){
    const nativeBaseTheme = useTheme()
    const theme = DefaultTheme;
    theme.colors.background = nativeBaseTheme.colors.gray[100]
    return(
        
            <Box flex={1} bg="gray.100" safeAreaTop={14}>
            
                <NavigationContainer>
            
                    <AuthRoutes />
               
                </NavigationContainer>
            
            </Box>
       
        
    )
}