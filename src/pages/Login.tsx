import { Center, Image, Text, VStack } from "native-base";
import LogoIMG from '../assets/logo.png'
export function Login(){
    return(
            <VStack>
                <Center>
                    <Image source={LogoIMG}/>
                    <Text fontSize="3xl" fontFamily="heading">marketspace</Text>
                    <Text fontFamily="body">Seu espaço de compra e venda</Text>
                </Center>
            </VStack>
        
    )
}