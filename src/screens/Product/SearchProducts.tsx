import { ScrollView, Text, Dimensions, View, Image } from 'react-native'
import SearchList from '@src/screens/Product/SearchList'

import sadProduct from '@src/assets/images/empty/noproduct.jpeg'

const { width, height } = Dimensions.get('window')

const SearchProducts = ({ productsFiltered, navigation }: any) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}
            style={{ width: width, height: height }}>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item: any) => (
                    <SearchList key={item._id} item={item} navigation={navigation} />
                ))
            ) : (
                <View className='flex-1 items-center justify-center'>
                    <Image source={sadProduct} resizeMode='contain'
                        className='w-[200px] h-[200px]' />
                    <Text className='text-sm font-normal mt-6'>No products found</Text>
                </View>
            )}
        </ScrollView>
    )
}

export default SearchProducts