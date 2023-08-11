import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

interface HeaderProps {
    navigation: any
    title: string
}

const Header = ({ navigation, title }: HeaderProps) => {
    return (
        <View className='flex-row p-4 mt-4'>
            <TouchableOpacity onPress={() => navigation.goBack()}
                className='rounded-xl p-2 mr-1'>
                <Icon name='chevron-thin-down' size={20} />
            </TouchableOpacity>
            <View className='justify-center items-center self-center'>
                <Text className='text-lg font-semibold text-center'>
                    {title}
                </Text>
            </View>
        </View>
    )
}

export default Header

