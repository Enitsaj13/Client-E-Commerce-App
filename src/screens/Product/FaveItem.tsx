import { Text, View, TouchableOpacity, Image } from 'react-native'

const FaveItem = ({ item }: any) => {

    // pass the item to the cart item
    const data = item.item.product

    return (
        <View className='flex-row mt-5 items-center bg-white py-1 border-slate-300
        border-b-[0.2px]' key={Math.random()}>
            <Image className='bg-transparent w-20 h-20 mx-4'
                resizeMode="contain"
                source={{
                    uri: data.image ? data.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                }} />
            <View className='flex-column bg-transparent'>
                <Text className='font-bold text-sm text-center'>
                    {data.name}
                </Text>
                <Text className='text-sm text-red-400'>${data.price}</Text>
            </View>
        </View>
    )

}

export default FaveItem

