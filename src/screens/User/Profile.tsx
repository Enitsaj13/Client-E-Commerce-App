import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/Ionicons'
import Phone from 'react-native-vector-icons/AntDesign'

import BackButton from '@src/components/BackButton'

import profile from '@src/assets/images/user/profile.jpeg'

import Input from '@src/components/TextInput'


const Profile = ({ navigation }: any) => {

    const [passwordShown, setPasswordShown] = useState<boolean>(true)


    return (
        <SafeAreaView className='bg-white h-full flex-1'>
            <View className='flex-row items-center justify-between px-5 py-5 bg-white'>
                <BackButton navigation={navigation} />

                <Text className='text-lg font-medium text-center'>
                    Edit Profile
                </Text>

                <TouchableOpacity
                    onPress={() => Alert.alert('Profile Updated')}
                    className='p-1 rounded-xl border border-white bg-white bottom-[1px]'>
                    <Icons name='checkmark-outline' size={30} color='#4287f5' />
                </TouchableOpacity>
            </View>

            <View className='items-center mt-2'>
                <View className='w-[118px] h-[118px] rounded-full justify-center items-center bg-slate-100'>
                    <Image source={profile} className='w-[100px] h-[100px] rounded-full' />
                    <TouchableOpacity
                        className='z-10 absolute top-[100px]'>
                        <Icon name='camera' size={20} color='#37383b' />
                    </TouchableOpacity>
                </View>
            </View>

            <Text className='text-lg font-medium text-center mt-5'>
                Your Information
            </Text>

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
                    <Phone name='phone' size={20} color='#475569' />
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

                {/* address */}
                <View className='flex w-full flex-row items-center h-[50px] px-[10px] rounded-lg mt-3 border border-light'>
                    <Icons name='location-outline' size={20} color='#475569' />
                    <Input
                        placeholder='Address'
                        secureTextEntry={false}
                        keyboardType='email-address'
                        autoCorrect={false}
                        id='email'
                        autoCapitalize='none'
                        placeholderTextColor={'#94a3b8'}
                    />

                </View>

            </View>

        </SafeAreaView>
    )
}

export default Profile