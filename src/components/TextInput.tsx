import { TextInput } from 'react-native'

import { InputTypes } from '@src/types/interface'


const Input = ({
    placeholder, secureTextEntry, keyboardType, autoCorrect, value, onChangeText, onFocus, autoCapitalize, placeholderTextColor
}: InputTypes) => {
    return (
        <TextInput
            className='flex-1 px-[12px] font-medium'
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCorrect={autoCorrect}
            value={value}
            onChangeText={onChangeText}
            onFocus={onFocus}
            autoCapitalize={autoCapitalize ? 'none' : 'sentences'}
            placeholderTextColor={placeholderTextColor}
        />
    )
}


export default Input