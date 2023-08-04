import {Button as NativeBaseButton} from 'native-base'
type ButtonProps = {
    text:string
}
export function Button({text}: ButtonProps){
    return(
    <NativeBaseButton w='3/4' bgColor='blue.300'>
        {text}
    </NativeBaseButton>
    )
}