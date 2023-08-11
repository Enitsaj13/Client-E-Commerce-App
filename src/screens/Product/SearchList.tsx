import { TouchableOpacity, View, Image, Text } from 'react-native'

interface ItemListProps {
    name: string;
    price: number;
    image: string;
}

const ItemList = ({ name, price, image }: ItemListProps) => {

    return (
        <View className='flex-row mt-5 items-center px-10 bg-white border-b-[0.2px] border-slate-300'>
            <Image className='bg-transparent w-14 h-14 mr-10'
                resizeMode="contain"
                source={{
                    uri: image ? image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                }} />
            <View className='flex-column bg-transparent'>
                <Text className='font-bold text-sm text-center'>
                    {name.length < 20 ? `${name}` : `${name.substring(0, 20)}...`}
                </Text>
                <Text className='text-sm mt-3 text-red-400'>${price}</Text>
            </View>
        </View>
    );
}

const SearchList = ({ item, navigation }: any) => {

    return (
        <TouchableOpacity className='w-full' onPress={() => navigation.navigate('ProductDetail', { item: item })}>
            <ItemList {...item} />
        </TouchableOpacity>
    )
}



export default SearchList