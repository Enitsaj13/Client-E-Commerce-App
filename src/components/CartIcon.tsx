import React from 'react'
import { TouchableOpacity, TouchableHighlight, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import { useSelector } from 'react-redux'

const CartContainer = ({ navigation }: any) => {

    const cartItems = useSelector((state: any) => state.cartItems)

    const cartItemsCount = cartItems.reduce((total: any, item: any) => total + item.quantity, 0)

    return (

        <TouchableOpacity activeOpacity={0.8}
            className='self-end p-2 top-4 right-2 border border-white rounded-lg' onPress={() => navigation.navigate('Cart')}>
            <Icon name='shoppingcart' size={25} />
            <TouchableHighlight className='bg-red-500 rounded-full w-5 h-5 flex items-center justify-center absolute left-6 content-center'>
                <Text className='text-white text-xs font-bold'>
                    {cartItemsCount || 0}
                </Text>
            </TouchableHighlight>
        </TouchableOpacity>
    )
}

export default CartContainer