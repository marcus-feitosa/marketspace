import { Center, Image, Text, VStack, Box, Avatar, ScrollView } from "native-base";
import LogoIMG from '../assets/logo.png'

import {Input} from '../components/FormInput'
import { Button } from "../components/Button";
export function SignUp(){
    return(
        <Box flex={1}>
            <ScrollView>
                <VStack>
                <Center>
                    <Image source={LogoIMG}/>
                    <Text fontSize="3xl" fontFamily="heading">Seja bem vindo</Text>
                    <Text fontFamily="body">Crie sua conta e use o espaço para comprar </Text>
                    <Text fontFamily="body">itens variados e vender seus produtos</Text>
                </Center>

                <Center mt={12}>
                    <Avatar mb={4} size='2xl'></Avatar>
                    <Input placeholder="Nome"/>
                    <Input placeholder="E-mail"/>
                    <Input placeholder="Telefone"/>
                    <Input placeholder="Senha"/>
                    <Input placeholder="Confirmar Senha"/>

                    <Button text="Entrar" color="black"/>
                </Center>

                <Center mt={24} p={6} bgColor='white'>
                    <Text mb={2}>Já tem uma conta?</Text>
                    <Button text="Criar uma conta" color="gray.200"/>
                </Center>
                


                
            </VStack>
            </ScrollView>
        </Box>
        
    )
}