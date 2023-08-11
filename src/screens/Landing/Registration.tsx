import { useState } from 'react'
import { Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/Ionicons'
import { Formik } from 'formik'

import Input from '@src/components/TextInput'
import Button from '@src/components/Button'

import fb from '@src/assets/images/icons/facebook.png'
import google from '@src/assets/images/icons/google.png'


interface RegistrationTypes {
    navigation?: any
}

const Registration = ({ navigation }: RegistrationTypes) => {


    const [passwordShown, setPasswordShown] = useState<boolean>(true)

    const [loading, setLoading] = useState<boolean>(false)

    const startLoading = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    return (
        <SafeAreaView className='flex-1 bg-white'>
            <View className='flex items-center justify-center'>
                <Text className='text-2xl leading-[60px] font-bold'>
                    Create an account.
                </Text>
                <View>
                    <Text className='text-md'>
                        Please register down below
                    </Text>
                </View>
            </View>

            {/* input form */}
            <View className='mt-[30px] px-[30px]'>

                <View className='flex w-full flex-row items-center h-[50px] px-[10px] rounded-lg mt-3 border border-light'>
                    <Icon name='user-o' size={20} color='#475569' />
                    <Input
                        placeholder='Full Name'
                        secureTextEntry={false}
                        autoCorrect={false}
                        placeholderTextColor={'#94a3b8'}
                    />
                </View>

                <View className='flex w-full flex-row items-center h-[50px] px-[10px] rounded-lg mt-3 border border-light'>
                    <Icons name='mail-outline' size={20} color='#475569' />
                    <Input
                        placeholder='Email-Address'
                        secureTextEntry={false}
                        keyboardType='email-address'
                        autoCorrect={false}
                        id='email'
                        autoCapitalize='none'
                        placeholderTextColor={'#94a3b8'}
                    />
                </View>

                <View className='flex w-full flex-row items-center h-[50px] px-[10px] rounded-lg mt-3 border border-light'>
                    <Icons name='lock-closed-outline' size={20} color='#475569' />

                    <Input
                        placeholder='Password'
                        secureTextEntry={passwordShown}
                        placeholderTextColor={'#94a3b8'}
                    />
                    <TouchableOpacity
                        className='p-[4px]'
                        onPress={() => setPasswordShown(!passwordShown)}>

                        <Icons name={passwordShown ? 'eye-off-outline' : 'eye-outline'} size={20} color='#475569' />
                    </TouchableOpacity>

                </View>

                <View className='flex w-full flex-row items-center h-[50px] px-[10px] rounded-lg mt-3 border border-light'>
                    <Icons name='mail-outline' size={20} color='#475569' />
                    <Input
                        placeholder='Phone Number'
                        secureTextEntry={false}
                        keyboardType='email-address'
                        autoCorrect={false}
                        id='email'
                        autoCapitalize='none'
                        placeholderTextColor={'#94a3b8'}
                    />
                </View>
                {/* --- ending input --- */}

                {/* --- registration --- */}
                <TouchableOpacity
                    className='flex flex-row items-center justify-center h-[50px] rounded-lg bg-primary mt-5'
                    onPress={() => startLoading()}>
                    {loading ? (
                        <ActivityIndicator size='small' color='#fff' />
                    ) : (
                        <Text className='text-base tracking-wide text-white'>
                            Register
                        </Text>

                    )}
                </TouchableOpacity>

                {/* --- or continue with --- */}
                <View className='flex flex-row items-center justify-center mt-3'>
                    <View className='h-[0.4px] w-[30%] bg-light' />
                    <Text className='text-sm text-gray px-[10px]'>
                        or create with
                    </Text>
                    <View className='h-[0.4px] w-[30%] bg-light' />
                </View>

                {/* --- social media registration --- */}
                <View className='flex-col items-center mt-5'>
                    <TouchableOpacity className='h-[50px] w-full rounded-xl flex-row justify-center
                    items-center mb-4 border border-light'>
                        <Image source={fb} className='w-5 h-5 mr-3' />
                        <Text className='text-sm text-gray'>
                            Facebook
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='h-[50px] w-full rounded-xl flex-row justify-center
                    items-center mb-4 border border-light'>
                        <Image source={google} className='w-5 h-5 mr-3' />
                        <Text className='text-sm text-gray'>
                            Google
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* --- ending social --- */}

                {/* --- terms / conditions --- */}
                <View className='flex-col justify-center'>
                    <Text className='text-[13px] text-center text-gray'>
                        By signing up, you agree to our
                    </Text>
                    <View className='flex flex-row justify-center'>
                        <TouchableOpacity>
                            <Text className='text-[13px] text-primary'>
                                Terms of Service
                            </Text>
                        </TouchableOpacity>
                        <Text className='text-[13px] text-gray'>
                            {' '}and{' '}
                        </Text>
                        <TouchableOpacity>
                            <Text className='text-[13px] text-primary'>
                                Privacy Policy
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* --- ending terms --- */}

            {/* --- sign in --- */}
            <View className='flex-row self-center absolute bottom-[50px]'>
                <Text className='text-sm text-gray'>
                    Already have an account?
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}>
                    <Text className='text-sm text-primary'>
                        {' '}Sign In
                    </Text>
                </TouchableOpacity>
            </View>
            {/* ending sign in */}

        </SafeAreaView >
    )
}

export default Registration