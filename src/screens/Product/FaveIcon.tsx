import { useSelector } from 'react-redux'
import { Text, TouchableHighlight } from 'react-native'
import React from 'react'

const FaveIcon = () => {

    const faveItems = useSelector((state: any) => state.faveItems)

    return (
        <React.Fragment>
            {faveItems.length ? (
                <TouchableHighlight className='bg-red-500 rounded-full w-5 h-5 flex items-center justify-center absolute top-1 right-6 content-center'>
                    <Text className='text-white text-xs font-bold'>
                        {faveItems.length}
                    </Text>

                </TouchableHighlight>
            ) : null}
        </React.Fragment>
    )
}

export default FaveIcon