import {Button as NativeBaseButton} from 'native-base'
type ButtonProps = {
    text:string
    color : 'blue.300' | 'gray.200'
}
export function Button({text, color}: ButtonProps){
    return(
    <NativeBaseButton w='3/4' bgColor={color}>
        {text}
    </NativeBaseButton>
    )
}