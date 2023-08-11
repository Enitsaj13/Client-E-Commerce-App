import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

/* --- root navigations --- */
import Login from '@src/screens/Landing/Login'
import Registration from '@src/screens/Landing/Registration'
import BottomNavigator from '@src/navigations/BottomNavigator'
import Cart from '@src/screens/Cart/Cart'
import ProductDetail from '@src/screens/Product/Details'



/* --- stack type --- */
export type RootStackParamList = {
    Login: undefined
    Registration: undefined
    BottomNavigator: undefined
    Cart: undefined
    Drawer: undefined
    ProductDetail: undefined
}

/* --- home stack --- */
const Stack = createStackNavigator<RootStackParamList>()

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />

            <Stack.Screen name='Registration' component={Registration}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />

            <Stack.Screen name='ProductDetail' component={ProductDetail}
                options={{
                    headerShown: false,
                    ...TransitionPresets.ModalPresentationIOS
                }}
            />

            <Stack.Screen name='Cart' component={Cart}
                options={{
                    headerShown: false,
                    ...TransitionPresets.ModalPresentationIOS
                }}
            />

            <Stack.Screen name='BottomNavigator' component={BottomNavigator}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />

        </Stack.Navigator>

    )
}

export default HomeStack