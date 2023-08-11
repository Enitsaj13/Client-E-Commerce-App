import { TouchableOpacity, Text } from 'react-native'

interface ButtonTypes {
    navigation?: any
    title?: string
    onPress?: () => void
    children?: React.ReactNode
}

const Button = ({ navigation, title }: ButtonTypes) => {
    return (
        <TouchableOpacity activeOpacity={0.8}
            className='flex flex-row items-center justify-center h-[50px] rounded-lg bg-blue-500 mt-3'
        >
            <Text className='text-white text-lg font-bold'>
                {title}
            </Text>

        </TouchableOpacity>
    )
}

export default Button