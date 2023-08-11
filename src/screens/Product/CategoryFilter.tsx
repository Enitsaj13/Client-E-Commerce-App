import React from 'react'
import { TouchableOpacity, ScrollView, View, Text } from 'react-native'

interface CategoryFilterProps {
    categoryFilter: (category: string) => void;
    setActive: (index: number) => void;
    active: number;
    categories: any;
    productsCategory: any;
}

const CategoryFilter = ({ categoryFilter, setActive, active, categories }
    : CategoryFilterProps) => {

    return (
        <ScrollView bounces={true}
            horizontal={true} showsHorizontalScrollIndicator={false} className='mx-5 mt-4'>
            <View className='m-0 p-0 rounded-none flex-row'>
                <TouchableOpacity key={1}
                    onPress={() => {
                        categoryFilter('all'),
                            setActive(-1)
                    }}>

                    <View className='flex-row items-center justify-center w-8 h-7 m-2'>
                        {active === -1 ? (
                            <View className='h-[3px] rounded-full w-[40%] top-3 left-3 bg-blue-500' />
                        ) : (
                            <View className='h-[3px] rounded-full w-[30%] top-3 left-6 bg-transparent' />
                        )}
                        <Text className={`text-sm text-center font-bold
                        ${active === -1 ? 'text-slate-700' : 'text-slate-400'}`}>
                            All
                        </Text>
                    </View>


                </TouchableOpacity>
                {categories.map((item: any) => (
                    <TouchableOpacity key={item._id}
                        onPress={() => {
                            categoryFilter(item._id),
                                setActive(categories.indexOf(item))
                        }}>

                        <View className='flex-row items-center justify-center w-24 h-7 m-2'>
                            {active === categories.indexOf(item) ? (
                                <View className='h-[3px] rounded-full w-[30%] top-3 left-7 bg-blue-500' />
                            ) : (
                                <View className='h-[3px] rounded-full w-[30%] top-3 left-7 bg-transparent' />
                            )}
                            <Text className={`text-sm font-bold text-center
                            ${active === categories.indexOf(item) ? 'text-slate-700' : 'text-slate-400'}`}>
                                {item.name}
                            </Text>
                        </View>


                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

export default CategoryFilter;
