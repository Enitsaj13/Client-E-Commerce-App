import { useState } from 'react'
import { Image, ScrollView, TouchableOpacity, Text, View } from 'react-native'

import Toast from 'react-native-toast-message'
import Header from '@src/components/Header'
/* --- redux --- */
import { connect } from 'react-redux'
import * as actions from '@src/rtk/actions/cartActions'


const DetailsPage = ({ route, navigation, addItemToCart }: any) => {

    const [item, setItem] = useState(route.params.item)
    const [availability, setAvailability] = useState(null)

    return (
        <ScrollView className='h-full bg-white'>
            <Header navigation={navigation} title='Details' />
            <View className='mb-[80px] p-[5px]'>
                <View className='p-0 m-0 bg-white'>
                    <Image
                        source={{ uri: item.image ? item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png' }}
                        className='w-full h-[250px] rounded-[10px]'
                        resizeMode='contain'
                    />
                </View>

                <View className='p-0 m-0 bg-white'>
                    <Text className='font-bold text-xl mt-3 text-center'>{item.name}</Text>
                    <Text className='text-xl mt-3 text-orange-400 text-center'>${item.price}</Text>
                    <Text className='text-sm mt-3 text-center'>{item.description}</Text>
                </View>

                {/* add to cart */}
                <View className='absolute bottom-[-100] left-0 right-0 bg-white'>
                    <TouchableOpacity
                        onPress={() => {
                            addItemToCart({
                                name: item.name, price: item.price, image: item.image, countInStock: item.countInStock,
                                brand: item.brand
                            })
                            Toast.show({
                                visibilityTime: 1600,
                                type: 'success',
                                text1: `${item.name} added to cart`,
                                text2: 'Go to your cart to complete order'
                            })
                        }}
                        className='bg-green-400 p-3 rounded-[10px] m-3'>
                        <Text className='text-white text-center'>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        addItemToCart: (product: any) => dispatch(actions.addToCart({ quantity: 1, product }))
    }
}


export default connect(null, mapDispatchToProps)(DetailsPage)