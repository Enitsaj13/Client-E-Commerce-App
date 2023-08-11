import { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, ActivityIndicator, Image, ScrollView, TextInput } from 'react-native'

{/* --- imported components --- */ }
import ProductList from './ProductList'
import CategoryFilter from './CategoryFilter'
import CartIcon from '@src/components/CartIcon'
import SearchProducts from './SearchProducts'
import Search from '@src/components/Search'

import Icon from 'react-native-vector-icons/EvilIcons'
import CloseIcon from 'react-native-vector-icons/Ionicons'

{/* --- imported images --- */ }
import bg from '@src/assets/images/carousel/bg.png'
import sadProduct from '@src/assets/images/empty/noproduct.jpeg'

{/* --- rest api --- */ }
import axios from 'axios'
import baseUrl from '@src/api/baseUrl'

import { useSelector } from 'react-redux'

const ProductContainer = ({ navigation }: any) => {

    {/* --- states --- */ }
    const [products, setProducts] = useState<any>([])
    const [productsFiltered, setProductsFiltered] = useState<any>([])
    const [focus, setFocus] = useState<any>()
    const [categories, setCategories] = useState<any>([])
    const [productsCategory, setProductsCategory] = useState<any>([])
    const [active, setActive] = useState<any>()
    const [initialState, setInitialState] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)


    {/* --- useFocusEffect and useCallback --- */ }
    useFocusEffect((
        useCallback(
            () => {
                setFocus(false);
                setActive(-1);

                {/* --- get products --- */ }
                axios
                    .get(`${baseUrl}products`)
                    .then((res) => {
                        setProducts(res.data)
                        setProductsFiltered(res.data)
                        setProductsCategory(res.data)
                        setInitialState(res.data)
                        setLoading(false)
                    })
                    .catch((error) => {
                        console.log(`Api call error ${error}`)
                    })

                {/* --- get categories --- */ }
                axios
                    .get(`${baseUrl}categories`)
                    .then((res) => {
                        setCategories(res.data)
                    })
                    .catch((error) => {
                        console.log(`Api call error ${error}`)
                    })

                {/* --- return function --- */ }
                return () => {
                    setProducts([]);
                    setProductsFiltered([]);
                    setFocus(0);
                    setCategories([]);
                    setActive(0);
                    setInitialState(0);
                };
            },
            [],
        )
    ))


    {/* --- handle search --- */ }
    const handleSearch = (text: string) => {
        setProductsFiltered(
            products.filter((item: any) => item.name.toLowerCase().includes(text.toLowerCase()))
        )
    }

    const handleFocus = () => {
        setFocus(true)
    }

    const handleBlur = () => {
        setFocus(false)
    }


    {/* --- handle category --- */ }
    const handleCategory = (category: string) => {
        if (category === 'all') {
            setProductsCategory(initialState)
            setActive(true)
        } else {
            setProductsCategory(products.filter((item: any) => item.category._id === category))
            setActive(true)
        }
    }

    return (
        <>
            {/* --- loading indicator --- */}
            {loading === false ? (
                <SafeAreaView className='bg-white h-full'>
                    <View className='flex-col absolute mt-16 px-4'>
                        <Text className='text-[17px] text-dark'>Hi Jastine 👋</Text>
                        <Text className='text-xl font-medium'>
                            Discover your style
                        </Text>
                    </View>

                    {/* --- cart component --- */}
                    <CartIcon navigation={navigation} />

                    {/* --- search component --- */}
                    <View className='bg-slate-100 flex flex-row items-center h-12 mx-6 px-4 rounded-full mt-5 mb-12 top-5 border border-light self-center w-[90%]'>
                        <Icon name='search' size={28} color='#a9a9a9' />
                        <TextInput
                            placeholder='Search'
                            onFocus={handleFocus}
                            onChangeText={(text) => handleSearch(text)}
                            placeholderTextColor='#a9a9a9'
                        />

                        {/*  close icon */}
                        {focus === true ? (
                            <View className='absolute top-3 right-3 z-10'>
                                <CloseIcon name='close' size={20} color='#999997'
                                    onPress={handleBlur} />
                            </View>
                        ) : null}
                    </View>


                    {/* --- filter focus --- */}
                    {focus === true ? (
                        <SearchProducts productsFiltered={productsFiltered} navigation={navigation} />
                    ) : (
                        // --- ending --- //

                        // --- banner --- //
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View className='self-center bg-slate-100 w-[90%] rounded-lg shadow-lg h-[160px] mt-2'>
                                <Image source={bg} resizeMode='contain'
                                    className='w-full bottom-[70px]' />
                            </View>

                            {/* --- categories --- */}
                            <CategoryFilter
                                categories={categories}
                                categoryFilter={handleCategory}
                                productsCategory={productsCategory}
                                active={active}
                                setActive={setActive}
                            />

                            {/* --- product list --- */}
                            {productsCategory.length > 0 ? (
                                <View className='flex-1 flex-row items-start justify-center flex-wrap'>

                                    {/* map the category content */}
                                    {productsCategory.map((item: any) => (
                                        <ProductList navigation={navigation}
                                            item={item} key={item.name} />
                                    ))}
                                </View>
                            ) : (
                                // --- no products --- //
                                <View className='flex-1 items-center justify-center'>
                                    <Image source={sadProduct} resizeMode='contain'
                                        className='w-[200px] h-[200px]' />
                                    <Text className='text-sm font-normal mt-6'>No products found</Text>
                                </View>
                            )}

                        </ScrollView>

                    )}

                    {/* --- ending --- */}
                </SafeAreaView>

            ) : (

                // --- loading --- //
                <View className='flex-col items-center justify-center h-full'>
                    <ActivityIndicator size='small' color='#000' />
                </View>
            )
            }
        </>

    )
}




export default ProductContainer


