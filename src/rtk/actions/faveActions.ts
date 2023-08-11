
import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    CLEAR_FAVORITES
} from '@src/rtk/reducers/hook'

export const addToFavorite = (payload: any) => {
    return {
        type: ADD_TO_FAVORITES,
        payload
    }
}

export const removeFromFavorite = (payload: any) => {
    return {
        type: REMOVE_FROM_FAVORITES,
        payload
    }
}

export const clearFavorite = () => {
    return {
        type: CLEAR_FAVORITES
    }
}




