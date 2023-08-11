import { Center, Image, Text, VStack, Box } from "native-base";
import LogoIMG from '../assets/logo.png'


import {useNavigation} from '@react-navigation/native'
import {AuthNavigatorRoutesProps} from '../routes/auth.routes'

import {Input} from '../components/FormInput'
import { Button } from "../components/Button";

export function SignIn(){
    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleNewAccount(){
        navigation.navigate('signUp')
    }
    return(
        <Box flex={1}>
            <VStack>
                <Center>
                    <Image source={LogoIMG}/>
                    <Text fontSize="3xl" fontFamily="heading">marketspace</Text>
                    <Text fontFamily="body">Seu espaço de compra e venda</Text>
                </Center>

                <Center mt={24}>
                    <Text mb={2}>Acesse sua conta</Text>
                    <Input placeholder="E-mail"/>
                    <Input placeholder="Senha"/>
                    <Button text="Entrar" color="blue.300"/>
                </Center>

                <Center mt={24} p={6} bgColor='white'>
                    <Text mb={2}>Ainda não tem acesso?</Text>
                    <Button text="Criar uma conta" color="gray.200" onPress={handleNewAccount}/>
                </Center>


                
            </VStack>
        </Box>
        
    )
}