import { Text, View, TouchableOpacity, Dimensions, Image, Alert, Button } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'

import CartItem from './CartItems'

import Header from '@src/components/Header'

/*  redux  */
import { connect } from 'react-redux'

import * as actions from '@src/rtk/actions/cartActions'

const { width } = Dimensions.get('window')

import Icon from 'react-native-vector-icons/Ionicons'
import sadProduct from '@src/assets/images/empty/noproduct.jpeg'


const Cart = ({ cartItems, navigation, clearCart, removeFromCart }: any) => {

    // -- total price -- //
    // let totalPrice = 0
    // cartItems.map((item: any) => {
    //     totalPrice += item.product.price * item.quantity
    // }) c x≈ b     

    const totalPrice = cartItems.reduce((acc: any, item: any) => acc + item.product.price * item.quantity, 0)

    const clearAllCart = () => {
        Alert.alert(
            'Delete All Cart',
            'Are you sure you want to remove all items?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => clearCart(),
                    style: 'destructive'
                }
            ],
            { cancelable: false }
        )
    }

    const handleRemove = (data: any) => {
        Alert.alert(
            'Delete Item',
            'Are you sure you want to delete this item?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => removeFromCart(data.item),
                    style: 'destructive'
                }
            ],
            { cancelable: false }
        )
    }

    return (
        <>
            {cartItems.length ? (

                <View className='bg-white h-full pb-[170px]'>
                    {/* header */}
                    <Header navigation={navigation} title='My Cart' />
                    {/*  cart items and clear cart  */}
                    <View className='flex-row justify-between px-5'>
                        <Text className='text-lg font-medium text-start'>
                            {cartItems.length} items
                        </Text>
                        <TouchableOpacity onPress={clearAllCart}>
                            <Text className='text-lg font-medium text-red-500'>
                                Clear Cart
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <SwipeListView
                        className='mb-14'
                        showsVerticalScrollIndicator={false}
                        data={cartItems}
                        renderItem={(data) => (
                            <CartItem item={data} />
                        )}
                        renderHiddenItem={(data) => (
                            <View className='flex-1 justify-end flex-row'>
                                <TouchableOpacity
                                    onPress={() => handleRemove(data)}
                                    className='bg-red-500 h-[130px] items-end justify-center pr-[25] top-[20px]' style={{ width: width / 1.2 }}>
                                    <Icon name='trash' size={26} color='white' />
                                </TouchableOpacity>
                            </View>
                        )}
                        disableRightSwipe={true}
                        previewOpenDelay={3000}
                        stopLeftSwipe={75}
                        rightOpenValue={-75}
                        leftOpenValue={75}
                    />

                    {/* checkout / total */}
                    <View className='flex-col z-10 bg-white absolute bottom-0 w-full h-[220px] px-5 pb-5'>
                        <View className='flex-row justify-between m-3 mt-5'>
                            <Text className='text-[15px] tracking-wider text text-gray'>
                                Subtotal
                            </Text>
                            <Text className='text-[15px] tracking-wider text ml-2 text-gray'>
                                (3 items)
                            </Text>
                        </View>
                        <View className='flex-row justify-between m-3 bottom-5'>
                            <Text className='text-[15px] tracking-wider text text-gray'>
                                Shipping
                            </Text>
                            <Text className='text-[15px] tracking-wider text text-gray ml-2'>
                                Standard - Free
                            </Text>
                        </View>

                        <View className='flex-row justify-between m-3 bottom-10'>
                            <Text className='text-[15px] tracking-wider text font-medium text-font'>
                                Total
                            </Text>
                            <Text className='text-[15px] tracking-wider text font-bold ml-2'>
                                ₱{totalPrice}
                            </Text>
                        </View>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Checkout')}
                            className='bg-black py-3 rounded-full bottom-4'>
                            <Text className='text-white text-lg text-center'>
                                Checkout
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>

            ) : (
                <View className='flex-1 items-center bg-white pt-16'>
                    <Image source={sadProduct} resizeMode='contain'
                        className='w-[230px] h-[300px]' />
                    <Text className='text-[24px] font-medium mt-6'>
                        Your cart is empty
                    </Text>
                    <Text className='text-sm text-gray-400 mt-4'>
                        You have no items in your shopping cart.
                    </Text>
                    <Text className='text-sm text-gray-400'>
                        Let's go buy something!
                    </Text>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('Home')
                        }
                        className='bg-dark mt-6 px-10 py-2 rounded-full'>
                        <Text className='text-white text-lg'>Shop Now</Text>
                    </TouchableOpacity>
                    <Button
                        title='Go to Home'
                        onPress={() =>
                            navigation.navigate('Tae')
                        }
                    />
                </View>
            )}
        </>
    )
}

const mapStateToProps = ({ cartItems }: any) => {
    return {
        cartItems: cartItems
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        clearCart: () => dispatch(actions.clearCart()),
        removeFromCart: (item: any) => dispatch(actions.removeFromCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

