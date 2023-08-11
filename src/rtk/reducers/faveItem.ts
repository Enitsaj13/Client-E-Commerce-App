import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    CLEAR_FAVORITES
} from '@src/rtk/reducers/hook'

const FaveItemReducer = (state = [], action: any) => {

    switch (action.type) {
        case ADD_TO_FAVORITES:
            return [...state, action.payload]

        case REMOVE_FROM_FAVORITES:
            return state.filter((item: any) => item.id !== action.payload.id)

        case CLEAR_FAVORITES:
            return state = []

    }
    return state
}

export default FaveItemReducer