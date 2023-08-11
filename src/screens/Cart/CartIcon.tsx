import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import { Text, TouchableHighlight } from 'react-native'


const CartIcon = () => {

    const cartItems = useSelector((state: any) => state.cartItems)

    return (
        <>
            {cartItems.length ? (
                <TouchableHighlight className='bg-red-500 rounded-full w-5 h-5 flex items-center justify-center absolute left-6 content-center'>
                    <Text className='text-white text-xs font-bold'>
                        {cartItems.length}
                    </Text>

                </TouchableHighlight>
            ) : null}
        </>
    )
}

export default CartIcon