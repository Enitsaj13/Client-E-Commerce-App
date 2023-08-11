import { useState } from 'react'
import { Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { Formik } from 'formik'

{/* --- imported components --- */ }
import Input from '@src/components/TextInput'
import Button from '@src/components/Button'

{/* --- imported images --- */ }
import fb from '@src/assets/images/icons/facebook.png'
import google from '@src/assets/images/icons/google.png'


interface LoginTypes {
    navigation?: any
}

const Login = ({ navigation }: LoginTypes) => {


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
                    Welcome Back!
                </Text>
                <View>
                    <Text className='text-md'>
                        Please login to your account
                    </Text>
                </View>
            </View>

            {/* --- input form --- */}
            <View className='mt-[30px] px-[30px]'>

                <View className={`flex w-full flex-row items-center h-[50px] px-[10px] rounded-lg mt-3 border border-light`}>
                    <Icon name='mail-outline' size={20} color='#475569' />
                    <Input
                        placeholder='Enter your email'
                        secureTextEntry={false}
                        keyboardType='email-address'
                        autoCorrect={false}
                        id='email'
                        autoCapitalize='none'
                        placeholderTextColor={'#94a3b8'}
                    />
                </View>

                <View className={`flex w-full flex-row items-center h-[50px] px-[10px] rounded-lg mt-3 border border-light`}>
                    <Icon name='lock-closed-outline' size={20} color='#475569' />

                    <Input
                        placeholder='Enter your password'
                        secureTextEntry={passwordShown}
                        placeholderTextColor={'#94a3b8'}
                    />
                    <TouchableOpacity
                        className='p-[4px]'
                        onPress={() => setPasswordShown(!passwordShown)}>

                        <Icon name={passwordShown ? 'eye-off-outline' : 'eye-outline'} size={20} color='#475569' />
                    </TouchableOpacity>

                </View>
                {/* --- ending input --- */}

                {/* --- forgot password --- */}
                <TouchableOpacity>
                    <Text className='text-sm text-primary text-right mt-4'>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>

                {/* --- login --- */}
                <TouchableOpacity
                    className='flex flex-row items-center justify-center h-[50px] rounded-lg bg-primary mt-3'
                    onPress={() => {
                        startLoading()
                        navigation.navigate('BottomNavigator')
                    }} >

                    {loading ? (
                        <ActivityIndicator size='small' color='#fff' />
                    ) : (
                        <Text className='text-base tracking-wide text-white'>
                            Login
                        </Text>

                    )}
                </TouchableOpacity>

                {/* --- or continue with --- */}
                <View className='flex flex-row items-center justify-center mt-3'>
                    <View className='h-[0.4px] w-[30%] bg-light' />
                    <Text className='text-sm text-gray px-[10px]'>
                        or continue with
                    </Text>
                    <View className='h-[0.4px] w-[30%] bg-light' />
                </View>

                {/* --- social media login --- */}
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
                        By continuing, you agree to our
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

            {/* --- sign up --- */}
            <View className='flex-row self-center absolute bottom-[50px]'>
                <Text className='text-sm text-gray'>
                    Don't have an account?
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Registration')}>
                    <Text className='text-sm text-primary'>
                        {' '}Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
            {/* ending sign up */}

        </SafeAreaView >
    )
}

export default Login

