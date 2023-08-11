import { View, Text, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native'

const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')

import { connect } from 'react-redux'

import * as actions from '@src/hooks/actions/cartActions'

const Confirm = ({ route, navigation, clearCart }) => {

    const item = route.params

    const confirmOrder = () => {
        setTimeout(() => {
            clearCart()
            alert('Successfully placed order')
            navigation.navigate('Cart')
        }, 2000)
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}
        className='bg-white'>
            <Text className='text-lg font-bold text-center my-5'>
                Confirm Order
            </Text>

            { route.params ? (
                <View className='w-[90%] mx-auto bg-gray-100 p-5 rounded-[10px]'>
                    <View className='flex-row justify-between'>
                        <Text className='text-lg font-bold'>Phone:</Text>
                        <Text className='text-lg'>
                            {item.order.order.phone}
                        </Text>
                    </View>
                    <View className='flex-row justify-between'>
                        <Text className='text-lg font-bold'>Address:</Text>
                        <Text className='text-lg'>
                            {item.order.order.address}
                        </Text>
                    </View>
                    <View className='flex-row justify-between'>
                        <Text className='text-lg font-bold'>City:</Text>
                        <Text className='text-lg'>
                            {item.order.order.city}
                        </Text>
                    </View>
                    <View className='flex-row justify-between'>
                        <Text className='text-lg font-bold'>Country:</Text>
                        <Text className='text-lg'>
                            {item.order.order.country}
                        </Text>
                    </View>
                    <View className='flex-row justify-between'>
                        <Text className='text-lg font-bold'>Postal Code:</Text>
                        <Text className='text-lg'>
                            {item.order.order.postalCode}
                        </Text>
                    </View>
                    <View className='my-5'>
                        <Text className='text-lg text-center font-bold'>Items:</Text>
                        {item.order.order.orderItems.map((x) => {
                            return (
                                
                                <View className='flex-row justify-between'>
                                    <View className='flex-row'>
                                        <Image
                                            source={{ uri: x.product.image }}
                                            className='w-20 h-20'
                                            resizeMode='contain'
                                        />
                                        <Text className='text-lg'>
                                            {x.product.name}
                                        </Text>
                                    </View>
                                        <Text className='text-lg'>
                                            $ {x.product.price}
                                        </Text>
                                </View>    
                            )

                        })}
                    </View>
                    {/* place order button */}
                    <TouchableOpacity
                        onPress={confirmOrder}
                        className='bg-black w-[90%] mx-auto p-3 rounded-[10px] mt-5'>
                        <Text className='text-lg text-center text-white font-bold'>
                            Place Order
                        </Text>
                    </TouchableOpacity>

                </View>
            ) : null }
           
        </ScrollView>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(actions.clearCart())
    }
}

export default connect(null, mapDispatchToProps)(Confirm)