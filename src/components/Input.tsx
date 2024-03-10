import { TextInput, TextInputProps } from 'react-native';

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor={''}
      className="w-full h-14 border border-gray-400 rounded p-4 text-white font-regular text-base"
      {...rest}
    />
  );
}
