import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import SelectDropdown from 'react-native-select-dropdown'
import server from "../server/server";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";
export default function HouseKitchen({ navigation }) {
    const countries = ["Kofta", "Omlette", "Daal", "Chicken"]
    const [dishes, setDishes] = useState([]);
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
    const [userData, setUserData] = useState([]);
    const getUser = async () => {

        let id = await AsyncStorage.getItem('userId');
        let _id = JSON.parse(id);
        const data = {
            userId: _id
        }
        console.log(data);
        const response = await server.post('CustomMess/User', data)
        if (response.status === 200) {
            console.log(response.data);
            setUserData(response.data);
        }
    }

    const Dishes = async () => {
        const data = {
            id: '628fb92eedbf5eedd30de2f0'
        }
        const response = await server.post('Dish/byKitchenId', data);
        console.log(response.data);
        setDishes(response.data);
    }

    useEffect(() => {
        getUser();
        Dishes();
    }, []);

    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={{
                            textAlign: 'center',
                            margin: 10,
                            fontSize: 18,
                            fontWeight: '400'
                        }}>House Kitchen</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            {Days.map((data, index) => (

                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 150,
                                    width: 365,
                                    margin: 10,
                                    justifyContent: 'center',
                                    backgroundColor: '#F8F8F8',
                                    alignSelf: 'center'
                                }}>
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        textAlign: 'center'
                                    }}>{data.value}</Text>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: 241,
                                        alignSelf: 'center'

                                    }}>

                                        <Text>Breakfast</Text>
                                        <SelectDropdown
                                            data={countries}
                                            buttonStyle={{
                                                width: 100, height: 20
                                            }}
                                            onSelect={(selectedItem, index) => {
                                                console.log(selectedItem, index)
                                            }}
                                            buttonTextAfterSelection={(selectedItem, index) => {
                                                // text represented after item is selected
                                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                                return selectedItem
                                            }}
                                            rowTextForSelection={(item, index) => {
                                                // text represented for each item in dropdown
                                                // if data array is an array of objects then return item.property to represent item in dropdown
                                                return item
                                            }}
                                        />

                                    </View>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: 241,
                                        paddingLeft: 10,
                                        alignSelf: 'center'

                                    }}>
                                        <Text>Lunch</Text>
                                        <SelectDropdown
                                            data={countries}
                                            buttonStyle={{
                                                width: 100, height: 20
                                            }}
                                            onSelect={(selectedItem, index) => {
                                                console.log(selectedItem, index)
                                            }}
                                            buttonTextAfterSelection={(selectedItem, index) => {
                                                // text represented after item is selected
                                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                                return selectedItem
                                            }}
                                            rowTextForSelection={(item, index) => {
                                                // text represented for each item in dropdown
                                                // if data array is an array of objects then return item.property to represent item in dropdown
                                                return item
                                            }}
                                        />
                                    </View>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: 241,
                                        paddingLeft: 10,
                                        alignSelf: 'center'
                                    }}>
                                        <Text>Dinner</Text>
                                        <SelectDropdown
                                            buttonStyle={{
                                                width: 100, height: 20
                                            }}
                                            data={countries}
                                            onSelect={(selectedItem, index) => {
                                                console.log(selectedItem, index)
                                            }}
                                            buttonTextAfterSelection={(selectedItem, index) => {
                                                // text represented after item is selected
                                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                                return selectedItem
                                            }}
                                            rowTextForSelection={(item, index) => {
                                                // text represented for each item in dropdown
                                                // if data array is an array of objects then return item.property to represent item in dropdown
                                                return item
                                            }}
                                        />
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </ScrollView>
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
