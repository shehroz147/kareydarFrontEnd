import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useStyles } from '../lib/style/useStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AllProperty from '../../Screens/AllProperty';
import MyKitchen from '../../Screens/MyKitchen';
import { Searchbar } from 'react-native-paper';
import ShowProperty from '../../Screens/ShowProperty';
import EditProfile from '../../Screens/EditProfile';
import Favourite from '../../Screens/Favourite';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../../Screens/Home';
// import ViewBlawg from '../screens/Blawgs/ViewBlawg';
const Property = createNativeStackNavigator();

export const PropertyStackNavigator = () => {
    return (
        <Property.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Property.Screen name="AllProperty" component={AllProperty} />
            <Property.Screen name="ShowProperty" component={ShowProperty} />

        </Property.Navigator>
    );
};


const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName='HomeTab'
            // tabBar={props => <TabBar {...props} />}
            activeColor="#FFFFFF"
            inactiveColor="#FFFFFF"
            screenOptions={{
                headerShown: false
            }}

            barStyle={{ backgroundColor: '#FBC62C' }}
        >
            <Tab.Screen name="Home" component={PropertyStackNavigator} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }} />

            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarLabel: 'Favoutite',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="heart-circle" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={EditProfile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
