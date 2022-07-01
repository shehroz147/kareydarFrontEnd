import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
    createDrawerNavigator,
    DrawerContent,
    DrawerContentScrollView,
} from "@react-navigation/drawer";
import CustomDrawerContent from "./src/Components/CustomDrawerContent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { Image } from "react-native";
import BottomTabNavigator from './src/Components/navigators/BottomTabNavigator';
import ActiveServices from './src/Screens/ActiveServices';
import AddDish from './src/Screens/AddDish';
import AddingProperty from './src/Screens/AddingProperty';

import AddServices from './src/Screens/AddServices';

import AllDishes from './src/Screens/AllDishes';

import AllProperty from './src/Screens/AllProperty';

import EditKitchen from './src/Screens/EditKitchen';

import EditProfile2 from './src/Screens/EditProfile2';

import EditProfile from './src/Screens/EditProfile';

import Favourite from './src/Screens/Favourite';

import Home from './src/Screens/Home';
import ForgotPassword from "./src/Screens/ForgotPassword";
import HomePage from './src/Screens/HomePage';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';


import HouseKitchen from './src/Screens/HouseKitchen';


import Login from './src/Screens/Login';

import Mess from './src/Screens/Mess';

import MessServices from './src/Screens/MessServices';


import MyKitchen from './src/Screens/MyKitchen';
import OrderList from './src/Screens/OrderList';

import PendingRequests from './src/Screens/PendingRequests';

import Policy from './src/Screens/Policy';
import RequestScreen from './src/Screens/RequestScreen';
import Services from './src/Screens/Services';



import ShowProperty from './src/Screens/ShowProperty';
import Signup from './src/Screens/Signup';








// import BottomTabNavigator from "./src/Components/navigators/BottomTabNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AddProperty from "./src/Screens/AddProperty";
import AllKitchen from "./src/Screens/AllKitchen";
import MyProperty from "./src/Screens/MyProperty";
import EditHouse from "./src/Screens/EditHouse";
import EditAppartment from "./src/Screens/EditAppartment";
import EditHostel from "./src/Screens/EditHostel";
import HouseRequest from "./src/Screens/HouseRequests";
import AppartmentRequest from "./src/Screens/AppartmentRequest";
import HostelRequest from "./src/Screens/HostelRequest";
import ViewRooms from "./src/Screens/ViewRooms";
import WriteOTP from "./src/Screens/WriteOTP";
import ResetPassword from "./src/Screens/ResetPassword";
import AddRooms from "./src/Screens/AddRooms";



const Stack = createNativeStackNavigator();




const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={DrawerNavigator} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="WriteOTP" component={WriteOTP} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />

        </Stack.Navigator>
    );
};

// const LawNavigator = () => {
//     return (
//         <Stack.Navigator
//             initialRouteName="HomeScreen"
//             screenOptions={{
//                 headerShown: false,
//             }}
//         >
//             <Stack.Screen name="HomeScreen" component={DrawerNavigator} />
//             <Stack.Screen name="AddProperty" component={AddProperty} />
//             <Stack.Screen name="Adding" component={AddingProperty} />
//             <Stack.Screen name="ActiveServices" component={ActiveServices} />
//             <Stack.Screen name="MyKitchen" component={MyKitchen} />
//             <Stack.Screen name="EditKitchen" component={EditKitchen} />
//             <Stack.Screen name="Home" component={AuthNavigator} />
//             <Stack.Screen name="AddDish" component={AddDish} />
//         </Stack.Navigator>
//     );
// };

export const KitchenStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="MyKitchen"
            component={MyKitchen}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="MyKitchen" component={MyKitchen} />
            <Stack.Screen name="PendingRequestScreen" component={PendingRequests} />
            <Stack.Screen name="EditKitchen" component={EditKitchen} />
            <Stack.Screen name="AddDish" component={AddDish} />
            <Stack.Screen name="AllDishes" component={AllDishes} />
            <Stack.Screen name="RequestScreen" component={RequestScreen} />
        </Stack.Navigator>
    );
};

export const KitchenStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="AllKitchen" component={AllKitchen} />
            <Stack.Screen name="RequestScreen" component={RequestScreen} />
            <Stack.Screen name="Mess" component={Mess} />

        </Stack.Navigator>
    );
};

export const ProviderNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="BecomeProvider" component={AddProperty} />
            <Stack.Screen name="Kitchen" component={AddServices} />
            <Stack.Screen name="Adding" component={AddingProperty} />

            <Stack.Screen name="MyKitchen" component={MyKitchen} />
            <Stack.Screen name="MyProperty" component={MyProperty} />
        </Stack.Navigator>
    );
};

export const PropertyNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="MyProperty" component={MyProperty} />
            <Stack.Screen name="EditHouse" component={EditHouse} />
            <Stack.Screen name="EditAppartment" component={EditAppartment} />
            <Stack.Screen name="EditHostel" component={EditHostel} />
            <Stack.Screen name="PropertyRequest" component={HouseRequest} />
            <Stack.Screen name="ViewRooms" component={ViewRooms} />
            <Stack.Screen name="AddRooms" component={AddRooms} />

            <Stack.Screen name="AppartmentRequest" component={AppartmentRequest} />
        </Stack.Navigator>
    );
};
const Drawer = createDrawerNavigator();


export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                // headerRight: () => <LogoTitle />,
                // headerTitleAlign: "center",
            }}
            // initialRouteName="Home"
            style={{ color: "#244e78" }}
        >
            <Drawer.Screen name="HomeScreen" component={BottomTabNavigator} />
            <Drawer.Screen name="BecomeProvider" component={ProviderNavigator} />

            {/* <Drawer.Screen name="HomePage" component={ActiveServices} /> */}
            {/* <Drawer.Screen name="Mess" component={Mess} /> */}
            <Drawer.Screen name="My Property" component={PropertyNavigator} />
            {/* <Drawer.Screen name="Messservice" component={MessServices} /> */}
            <Drawer.Screen name="MyKitchen" component={KitchenStackNavigator} />
            {/* <Drawer.Screen name="Order" component={OrderList} /> */}
            <Drawer.Screen name="AllKitchen" component={KitchenStack} />
            {/* <Drawer.Screen name="Active Services" component={HouseKitchen} /> */}
            {/* <Drawer.Screen name="Request" component={RequestScreen} /> */}
            {/* <Drawer.Screen name="Services" component={Services} /> */}
            {/* <Drawer.Screen name="AllProperty" component={AllProperty} /> */}











            {/* <Drawer.Screen name="DisplaySingleCase" component={DisplaySingleCase} /> */}
            {/* <Drawer.Screen name="Show Posts" component={AllPosts} /> */}
            {/* <Drawer.Screen name="Call" component={Call} /> */}
        </Drawer.Navigator>
    );
};

export default function Routes() {
    const [userToken, setUserToken] = useState(null);

    const onReady = async () => {
        try {
            const user_id = await AsyncStorage.getItem("userId");
            const id = JSON.parse(user_id);
            setUserToken(id);
        } catch (e) {
            console.error("Error:", e);
        }
    };

    return (
        <NavigationContainer onReady={onReady}>
            {userToken === null ? <AuthNavigator /> : <DrawerNavigator />}
            {/* <AuthNavigator /> */}
        </NavigationContainer>
    );
}
