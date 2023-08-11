import { Input as NativeBaseInput, FormControl } from 'native-base';

type InputProps = {
    placeholder: string
}

export function Input({placeholder}: InputProps) {


  return (
    <FormControl mb={2} alignItems='center'>
      <NativeBaseInput 
        placeholder={placeholder}
        bg="white"
        h={10}
        w={'3/4'}
        px={4}
        mb={2}
        borderWidth={0}
        fontSize="md"
        color="gray.400"
        fontFamily="body"
        placeholderTextColor="gray.300"
        _focus={{
          borderWidth: 1,
          borderColor: "gray.700"
        }}

      />
    </FormControl>
  );
}