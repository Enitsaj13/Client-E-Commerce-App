import React, { useState } from 'react'
import { StyleSheet, Dimensions, Image, Text, View, TouchableOpacity } from 'react-native'

const { width } = Dimensions.get('window');

import Icon from 'react-native-vector-icons/Ionicons'

import Toast from 'react-native-toast-message'

/* --- redux --- */

import { connect } from 'react-redux'
import * as actions from '@src/rtk/actions/faveActions'

interface CardProps {
    name: string;
    price: number;
    image: string;
    countInStock: number;
    brand: string;
    addItemToFavorite: (product: any) => void;
    removeToFavorite: (product: any) => void;
}

const ProductCard = ({ name, price, image, countInStock, addItemToFavorite, removeToFavorite, brand }: CardProps) => {

    const [isPressed, setIsPressed] = useState<boolean>(false)
    const handlerHeart = () => void setIsPressed((prevState) => !prevState)


    // add and remove favorite item using redux and ternary operator
    const toastMessage = () => {
        Toast.show({
            type: isPressed ? 'error' : 'success',
            position: 'top',
            text1: isPressed ? 'Remove from favorite' : 'Add to favorite',
            visibilityTime: 4000,
        })
        handlerHeart()
    }

    const removeAndAddFavorite = () => {
        isPressed ? removeToFavorite({ name, price, image, countInStock }) : addItemToFavorite({ name, price, image, countInStock })
        toastMessage()
    }


    return (
        <View style={styles.container} className='p-[10px] rounded-[10px] mt-3 ml-[10px] items-center bg-white shadow-sm' >
            <Image className='bg-transparent absolute h-28 w-28'
                resizeMode="contain"
                source={{
                    uri: image ? image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                }}

            />
            <View className='bg-transparent h-32 w-32' />
            <View className='flex-1'>
                <Text className='text-sm font-semibold text-center'>
                    {name.length < 20 ? `${name}` : `${name.substring(0, 20)}...`}
                </Text>
                <Text className='text-xs font-normal text-left'>
                    {brand}
                </Text>
            </View>

            {countInStock > 0 ? (
                <View className='flex-row items-center justify-center'>
                    <Text className='text-[16px] font-normal'>${price}</Text>
                    <View className='ml-16'>
                        <TouchableOpacity
                            className='px-1 py-1 rounded-lg shadow-lg bg-white'>
                            <Icon name={isPressed ? 'ios-heart' : 'ios-heart-outline'} size={20}
                                onPress={() => {
                                    removeAndAddFavorite()
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <Text style={{ marginTop: 20 }}> Out of stock </Text>
            )}

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.7,
        elevation: 8,
    },
})

// add to favorites dispatch //
const mapDispatchToProps = (dispatch: any) => {
    return {
        addItemToFavorite: (product: any) => dispatch(actions.addToFavorite({ quantity: 1, product })),
        removeToFavorite: (product: any) => dispatch(actions.removeFromFavorite({ quantity: 1, product }))

    }
}




export default connect(null, mapDispatchToProps)(ProductCard)