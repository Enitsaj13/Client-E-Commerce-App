import { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import DropDownPicker from 'react-native-dropdown-picker'

import RadioButtonRN from 'radio-buttons-react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import Paypal from '@src/assets/images/paypal.png'

import Visa from '@src/assets/images/visa.png'

import MasterCard from '@src/assets/images/mastercard.png'

import Gcash from '@src/assets/images/gcash.png'

import AmericanExpress from '@src/assets/images/american-express.png'

import {CountryPicker} from "react-native-country-codes-picker";

const methods = [
    { label: 'Cash on Delivery', value: 1 },
    { label: <View>
    <Image source={Paypal} resizeMode='cover'
    style={{ width: 80, height: 18, position: 'relative', top: 3 }} />
    </View>,
     value: 2 },
    { label: <View>
    <Image source={Gcash} resizeMode='cover'
    style={{ width: 80, height: 18, position: 'relative', top: 3 }} />
    </View>,
        value: 3 },

    { label: <View className='flex-row justify-between items-center'>
        <Image source={Visa} resizeMode='cover'
        style={{ width: 40, height: 18, position: 'relative', top: 3 }} />
        <Image source={MasterCard} resizeMode='cover'
        style={{ width: 40, height: 18, position: 'relative', top: 3 }} />
        <Image source={AmericanExpress} resizeMode='cover'
        style={{ width: 40, height: 18, position: 'relative', top: 3 }} />
    </View>,
     value: 4 },
]


const paymentCards = [
    { label: 'Visa', value: 1 },
    { label: 'Mastercard', value: 2 },
    { label: 'Gcash', value: 3 },
    { label: 'Paypal', value: 4 },
]

const Payment = ({ navigation, route }) => {

    const order = route.params

    const [selectedMethod, setSelectedMethod] = useState()
    const [selectedCard, setSelectedCard] = useState()
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null)
    const [items, setItems] = useState(paymentCards)

    return (
        <View className='justify-center items-center bg-white h-full'>
            <Text className='text-xl font-bold text-center mb-5'>
                Choose a payment method
            </Text>
            <View className='w-[80%]'>
                <RadioButtonRN
                    data={methods}
                    selectedBtn={(e) => setSelectedMethod(e.value)}
                    box={true}
                    circleSize={13}
                    icon={
                        <Icon
                            name='check-circle'
                            size={20}
                            color='green'
                        />
                    }
                    activeColor='green'
                />

                {selectedMethod === 4 ? (
                    <View className='mt-5'>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            placeholder='Select a card'
                            placeholderStyle={{ color: 'gray' }}
                            containerStyle={{ height: 40, width: '100%'}}
                            className='border-[1px] border-gray-300 rounded-[10px] px-4 bg-white'
                            dropDownDirection='TOP'
                            onChangeValue={(value) => setSelectedCard(value)}
                            selectedValue={selectedCard}
                        />
                    </View>
                ) : null}
            </View>
               
            <TouchableOpacity
                className='bg-gray-800 w-[80%] h-[50px] rounded-[10px] flex justify-center items-center mt-10'
                onPress={() => navigation.navigate('Confirm', { order })}>
                <Text className='text-white text-lg font-bold'>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Payment