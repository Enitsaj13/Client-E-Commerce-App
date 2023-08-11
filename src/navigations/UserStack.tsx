import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

/* --- user screens --- */
import Profile from '@src/screens/User/Profile'
import Settings from '@src/screens/User/Settings'


/* --- stack type --- */
export type RootStackParamList = {
    Profile: undefined
    Settings: undefined
}

/* --- home stack --- */
const Stack = createStackNavigator<RootStackParamList>()


const UserStack = ({ navigation }: any) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Profile' component={Profile}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />

            <Stack.Screen name='Settings' component={Settings}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />
        </Stack.Navigator>
    )
}

export default UserStack