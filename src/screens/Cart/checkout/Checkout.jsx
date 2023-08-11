import { useEffect, useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import FormContainer from '@src/components/form/FormContainer'
import Input from '@src/components/form/Input'

import { connect } from 'react-redux'

const countries = require('@src/constants/countries.json')

import DropDownPicker from 'react-native-dropdown-picker'

import {CountryPicker} from "react-native-country-codes-picker";

DropDownPicker.setListMode('SCROLLVIEW')

const Checkout = ({ cartItems, navigation }) => {

  const [orderItems, setOrderItems] = useState()
  const [shippingAddress, setShippingAddress] = useState()
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const [postalCode, setPostalCode] = useState()
  const [country, setCountry] = useState()
  const [phone, setPhone] = useState()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)

  const [show, setShow] = useState(false)
  const [countryCode, setCountryCode] = useState('')

  const [items, setItems] = useState(countries)


  useEffect(() => {
    // set order items
    setOrderItems(cartItems)

    // clean up
    return () => {
      setOrderItems()
    }
  }, [])

  const checkOut = () => {
    let order = {
      orderItems,
      shippingAddress,
      dateOrdered: new Date().toISOString(),
      address,
      city,
      postalCode,
      country,
      phone,
    }
    navigation.navigate('Payment', { order: order })
  }

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
      showsVerticalScrollIndicator={false}
      className='bg-white h-full'>
        
        <FormContainer title='Shipping Address'>
          <Input
            placeholder='Phone'
            name='phone'
            value={phone}
            onChangeText={(text) => setPhone(text)}
            keyboardType='numeric'
          />
          <Input
            placeholder='Shipping Address'
            name='address'
            value={shippingAddress}
            onChangeText={(text) => setShippingAddress(text)}
          />
          <Input
            placeholder='Shipping Address 2'
            name='address2'
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
          <Input
            placeholder='City'
            name='city'
            value={city}
            onChangeText={(text) => setCity(text)}
          />
          <Input
            placeholder='Postal Code'
            name='postalCode'
            value={postalCode}
            onChangeText={(text) => setPostalCode(text)}
            keyboardType='numeric'
          />
          {/* <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder='Select a country'
            onChangeValue={(value) => setCountry(value)}
            containerStyle={{ height: 40, width: '80%'}}
            className='border-[1px] border-gray-300 rounded-[10px] px-4 bg-white'
            searchable={true}
            searchPlaceholder="Search for a country"
            translation={{ NOTHING_TO_SHOW: 'No countries found..'}}
            placeholderStyle={{ color: 'gray' }}    
            dropDownDirection='TOP'
          /> */}

          <TouchableOpacity className='w-[80%] h-[50px] border-[1px] border-gray-300 rounded-[10px] px-4 mb-5' onPress={() => setShow(true)}>
            <Text className='text-gray-500 mt-[14px]'>
              {countryCode}
            </Text>
          </TouchableOpacity>

          <CountryPicker
            show={show}
            pickerButtonOnPress={(item) => {
              setCountryCode(item.code)
              setShow(false)
            }}
            searchMessage="Search for a country"
            inputPlaceholder="Search for a country"
            inputPlaceholderTextColor="gray"
            inputStyle={{ color: 'black' }}
            inputContainerStyle={{ backgroundColor: 'white' }}
            itemStyle={{ backgroundColor: 'white' }}
            />

          <TouchableOpacity
            className='bg-gray-800 w-[80%] h-[50px] rounded-[10px] flex justify-center items-center mt-10'
            onPress={checkOut}>
            <Text className='text-white text-lg font-bold'>Check Out</Text>
          </TouchableOpacity>
          
        </FormContainer>

      </KeyboardAwareScrollView>

   

  )

}

const mapStateToProps = ({ cartItems }) => {
  return {
    cartItems: cartItems,
  }
}
export default connect(mapStateToProps)(Checkout)
