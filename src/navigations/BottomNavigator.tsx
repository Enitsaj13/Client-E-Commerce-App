import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeIcon from 'react-native-vector-icons/Feather'
import SearchIcon from 'react-native-vector-icons/EvilIcons'
import UserIcon from 'react-native-vector-icons/FontAwesome'
import FaveIcon from 'react-native-vector-icons/Fontisto'

/* --- screen stack navigator --- */
import Home from '@src/navigations/HomeStack'
import User from '@src/navigations/UserStack'
import Search from '@src/screens/Product/Search'
import Wishlist from '@src/screens/Product/Favorite'

import FaveIcons from '@src/screens/Product/FaveIcon'

/* --- tab type --- */
export type RootTabParamList = {
    Home: { screen: string }
    Search: { screen: string }
    Wishlist: { screen: string }
    User: { screen: string }
}

/* --- tab navigator --- */
const Tab = createBottomTabNavigator<RootTabParamList>()

const MainNavigator = ({ faveItems }: any) => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#1e293b',
                tabBarInactiveTintColor: '#b8bece',
            }}>

            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HomeIcon name='home' color={color} size={22} />
                    ),
                }}
            />

            <Tab.Screen
                name='Search'
                component={Search}
                options={{
                    tabBarIcon: ({ color }) => (
                        <SearchIcon name='search' color={color} size={30} />
                    ),
                }}
            />

            <Tab.Screen
                name='Wishlist'
                component={Wishlist}
                options={{
                    tabBarIcon: ({ color }) => (
                        <>
                            <FaveIcon name='heart-alt' color={color} size={18} />
                            <FaveIcons faveItems={faveItems} />
                        </>
                    ),
                }}
            />

            <Tab.Screen
                name='User'
                component={User}
                options={{
                    tabBarIcon: ({ color }) => (
                        <UserIcon name='user-o' color={color} size={21} />
                    ),
                }}
            />

        </Tab.Navigator>

    )
}

export default MainNavigator