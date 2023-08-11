import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

/* --- product screens --- */
import ProductContainer from '@src/screens/Product/ProductContainer'

/* --- stack type --- */
export type RootStackParamList = {
    ProductContainer: undefined
}

/* --- home stack --- */
const Stack = createStackNavigator<RootStackParamList>()

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='ProductContainer' component={ProductContainer}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />
        </Stack.Navigator>

    )
}

export default HomeStack