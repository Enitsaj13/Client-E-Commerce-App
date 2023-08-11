import { TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'

interface SearchProps {
    searchProduct: (text: string) => void;
    onFocus?: () => void;
}

const Search = ({ searchProduct }: SearchProps) => {
    return (
        <View className='flex-row items-center justify-center'>
            <Icon name='search' size={28} color='#a9a9a9' className='absolute top-[22px] left-7  z-10' />
            <TextInput
                placeholder='Search'
                placeholderTextColor='#a9a9a9'
                onChangeText={(text) => searchProduct(text)}
                className='bg-slate-100 h-12 w-[90%] px-10 mx-4 mt-2 rounded-full text-sm focus:outline-none text-slate-600'
            />
        </View>
    )
}

export default Search

