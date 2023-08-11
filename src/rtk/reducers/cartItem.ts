import {
    ADD_TO_CART,
    INCREMENT,
    DECREMENT,
    REMOVE_FROM_CART,
    CLEAR_CART
} from '@src/rtk/reducers/hook'


interface ICartItem {
    id: number
    name: string
    price: number
    quantity: number
}

const cartItemReducer = (state: ICartItem[] = [], action: any) => {

    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]

        case INCREMENT:
            const itemInCart = state.find(item => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.push(action.payload);
            }

        case DECREMENT:
            return state.map(cartItem => cartItem.id === action.payload.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem)

        case REMOVE_FROM_CART:
            return state.filter(cartItem => cartItem !== action.payload)

        case CLEAR_CART:
            return state = []
    }
    return state
}

export default cartItemReducer