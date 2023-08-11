import {Center, Button as NativeBaseButton} from 'native-base'
type ButtonProps = {
    text:string
    color : 'blue.300' | 'gray.200' | 'black'
    onPress ?: () => void;
}
export function Button({text, color, onPress}: ButtonProps){
    return(
  
    <NativeBaseButton w='3/4'  bgColor={color} onPress={onPress}>
            {text}
    </NativeBaseButton>
   
    )
}