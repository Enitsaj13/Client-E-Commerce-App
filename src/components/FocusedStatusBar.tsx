import React from 'react'
import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'

interface Props {
    barStyle?: 'default' | 'light-content' | 'dark-content'
    animated?: boolean
}

const FocusedStatusBar = (barStyle: Props) => {
    const isFocused = useIsFocused()

    return isFocused ? <StatusBar animated={true} {...barStyle} /> : null
}

export default FocusedStatusBar


