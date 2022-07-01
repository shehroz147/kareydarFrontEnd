
import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect, useDebugValue } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import server from "../server/server";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Mess({ navigation, route }) {
    const Days = [
        {
            key: 1,
            value: "Monday",
        },
        {
            key: 2,
            value: "Tuesday",
        },
        {
            key: 3,
            value: "Wednesday",
        },
        {
            key: 4,
            value: "Thursday",
        },
        {
            key: 5,
            value: "Friday",
        },
        {
            key: 6,
            value: "Saturday",
        },
        {
            key: 7,
            value: "Sunday",
        },
    ];

    const { kitchenId } = route.params;
    const [kitchen, setKitchen] = useState([]);

    const getKitchen = async () => {
        const data = {
            kitchenId: kitchenId
        }
        // const response = await server.post('CustomMess/OrderMessList', data);
        const response = await server.post('Dish/byKitchenId', data);
        console.log("Response mess:", response.data)
        setKitchen(response.data)
    }
    useEffect(() => {
        // CheckIfLocationEnabled();
        // alert(JSON.stringify(cart))
        getKitchen();

    }, []);


    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={{
                        marginTop: '6%',
                        marginLeft: '3%',
                        justifyContent: 'center',
                        fontSize: 18,
                        fontWeight: '800',
                        textAlign: 'center'
                    }}>All Available Dishes </Text>
                    <View style={{ flex: 1 }}>
                        {kitchen?.map((data, index) => (
                            <View key={index}>
                                <View style={{
                                    margin: 15,
                                    display: 'flex',
                                    flexDirection: 'row',

                                }}>

                                    <Image style={{
                                        width: 140,
                                        height: 140
                                    }}
                                        // source={item.profileImage}
                                        // source={require(`${item?.profileImage}`)}
                                        source={{ uri: 'https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=' }}
                                    />
                                    {/* {Days.map((data,index)=>())} */}
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignSelf: 'center',
                                        margin: 20
                                    }}>
                                        <Text style={{
                                            fontWeight: 'bold',
                                            fontSize: 14,
                                            margin: 5
                                        }}>{data?.name}</Text>
                                        <Text style={{

                                            fontWeight: 'bold',
                                            fontSize: 14,
                                            margin: 5
                                        }}> {data?.discription}</Text>

                                        <Text style={{

                                            fontWeight: 'bold',
                                            fontSize: 14,
                                            margin: 5
                                        }}> {data?.price}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>






                </View>
            </SafeAreaView>
        </>

    );
}
const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: '#E5E5E5',
        borderRadius: 25,
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    container: {
        backgroundColor: 'white',
        height: '100%',
    }
});
