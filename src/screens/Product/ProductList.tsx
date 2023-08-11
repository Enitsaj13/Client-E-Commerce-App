import React from 'react'
import { View, Dimensions, TouchableOpacity } from 'react-native'
const { width } = Dimensions.get('window')

import Card from '@src/components/Card'

interface ProductListProps {
    item: any;
    navigation: any;
}

const ProductList = ({ item, navigation }: ProductListProps) => {

    return (
        <TouchableOpacity className='w-[50%] mb-5' onPress={() => navigation.navigate('ProductDetail', { item: item })}>
            <View style={{ width: width / 2 }}>
                <Card {...item} />
            </View>
        </TouchableOpacity>
    )
}

export default ProductList

