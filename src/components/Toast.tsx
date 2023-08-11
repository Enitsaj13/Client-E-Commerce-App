import { useState } from 'react'
import { TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import Toast from 'react-native-toast-message'

/* --- redux --- */
import { connect } from 'react-redux'
import * as actions from '@src/rtk/actions/faveActions'

const FavoriteToast = ({ addToFavorite, route }: any) => {

    const [item, setItem] = useState(route.params.item)

    const [isPressed, setIsPressed] = useState<boolean>(false)
    const handlerHeart = () => void setIsPressed((prevState) => !prevState)

    const toastMessage = () => {
        Toast.show({
            type: isPressed ? 'error' : 'success',
            position: 'top',
            text1: isPressed ? 'Removed from favorite! 🥹' : 'Added to favorite! 😍',
            visibilityTime: 3000,
        })

        handlerHeart()
    }

    return (
        <TouchableOpacity
            onPress={() => {
                addToFavorite({ name: item.name, price: item.price, image: item.image, countInStock: item.countInStock })
                Toast.show({
                    topOffset: 60,
                    type: 'success',
                    text1: `${item.name} added to cart`,
                    text2: 'Go to your cart to complete order'
                })
            }}
            className='px-1 py-1 rounded-lg shadow-lg bg-white'>
            <Icon name={isPressed ? 'ios-heart' : 'ios-heart-outline'} size={20} onPress={toastMessage} />
        </TouchableOpacity>
    )
}



// add to favorites dispatch //
const mapDispatchToProps = (dispatch: any) => {
    return {
        addToFavorite: (product: any) => dispatch(actions.addToFavorite({ quantity: 1, product }))
    }
}

export default connect(null, mapDispatchToProps)(FavoriteToast)