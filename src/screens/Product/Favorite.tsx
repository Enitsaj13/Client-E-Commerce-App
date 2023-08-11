import { Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'

import FaveItem from './FaveItem'

/*  redux  */
import { connect } from 'react-redux'

import * as actions from '@src/rtk/actions/faveActions'

const { width } = Dimensions.get('window')

import Icon from 'react-native-vector-icons/Ionicons'

import sadProduct from '@src/assets/images/empty/noproduct.jpeg'


const Favorites = ({ faveItems, navigation, clearFavorite, removeFromFavorite }: any) => {

    let total = 0

    faveItems.forEach((x: any) => {
        total += x.product.price * x.quantity
    })

    return (
        <>
            {faveItems.length ? (

                <View className='bg-white h-full pt-10'>
                    <SwipeListView
                        className='mb-14'
                        showsVerticalScrollIndicator={false}
                        data={faveItems}
                        renderItem={(data) => (
                            <FaveItem item={data} />
                        )}
                        renderHiddenItem={(data) => (
                            <View className='flex-1 justify-end flex-row'>
                                <TouchableOpacity
                                    onPress={() => removeFromFavorite(data.item)}
                                    className='bg-red-500 h-[90] items-end justify-center pr-[25] top-[20px]' style={{ width: width / 1.2 }}>
                                    <Icon name='trash' size={30} color='white' />
                                </TouchableOpacity>
                            </View>
                        )}
                        disableRightSwipe={true}
                        previewOpenDelay={3000}
                        friction={1000}
                        tension={40}
                        stopLeftSwipe={75}
                        rightOpenValue={-75}
                        leftOpenValue={75}
                    />
                </View>

            ) : (
                <View className='flex-1 items-center bg-white pt-16'>
                    <Image source={sadProduct} resizeMode='contain'
                        className='w-[230px] h-[300px]' />
                    <Text className='text-[24px] font-medium mt-6'>
                        Your Favorites is Empty
                    </Text>
                    <Text className='text-sm text-gray-400 mt-4'>
                        You have no items in your favorites.
                    </Text>
                    <Text className='text-sm text-gray-400'>
                        Let's add some!
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        className='bg-dark mt-6 px-10 py-2 rounded-full'>
                        <Text className='text-white text-lg'>Shop Now</Text>
                    </TouchableOpacity>
                </View>
            )}
        </>
    )
}

const mapStateToProps = ({ faveItems }: any) => {
    return {
        faveItems: faveItems
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        clearFavorite: () => dispatch(actions.clearFavorite()),
        removeFromFavorite: (item: any) => dispatch(actions.removeFromFavorite(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)

