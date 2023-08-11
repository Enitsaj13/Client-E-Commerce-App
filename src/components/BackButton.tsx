import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

const BackButton = ({ navigation }: any) => {
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}
            className='rounded-xl p-2 mr-1'>
            <Icon name='chevron-thin-left' size={24} />
        </TouchableOpacity>
    )
}

export default BackButton