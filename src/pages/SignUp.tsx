import { Center, Image, Text, VStack, Box } from "native-base";
import LogoIMG from '../assets/logo.png'

import {Input} from '../components/FormInput'
import { Button } from "../components/Button";

export function SignUp(){
    return(
        <Box flex={1}  bgColor="gray.100">
            <VStack>
                <Center>
                    <Image source={LogoIMG} size='xs'/>
                    <Center>
                        <Text fontSize="3xl" fontFamily="heading">Boas vindas!</Text>
                        <Text fontFamily="body">Crie sua conta e use o espaço para comprar</Text>
                        <Text fontFamily="body">itens variados e vender seus produtos</Text>
                    </Center>
                </Center>

                


                
            </VStack>
        </Box>
        
    )
}