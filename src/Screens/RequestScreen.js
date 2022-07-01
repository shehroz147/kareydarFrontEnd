import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import server from "../server/server";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function RequestScreen({ navigation, route }) {
    const { kitchen } = route.params;

    const requestKitchen = async () => {
        let id = await AsyncStorage.getItem('userId');
        const _id = JSON.parse(id);
        const data = {
            kitchenId: kitchen._id,
            userId: _id
        }
        const response = await server.post('RequestKitchen/', data)
        if (response.status === 200) {
            alert('Successfull')
        }
        else {
            alert('Something went wrong')
        }
    }
    useEffect(() => {
        // CheckIfLocationEnabled();
        // alert(JSON.stringify(cart))
        console.log("params::", route.params);

    }, []);
    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>


                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        width: '80%',
                        alignSelf: 'center',
                        top: '10%'
                    }}>

                        <Image
                            source={{ uri: kitchen?.profileImage }}
                            style={{
                                height: 200, width: 300, alignSelf: 'center'
                            }} />

                        <Text style={{ fontWeight: 'bold', color: '#black', textAlign: 'center', top: "5%" }} >{kitchen?.name}</Text>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', top: "5%" }}>{kitchen?.address}</Text>
                        <Pressable style={{
                            backgroundColor: 'black',
                            width: '50%',
                            borderRadius: 36,
                            top: '10%',
                            alignSelf: 'center'
                        }}
                            onPress={requestKitchen}><Text style={{ color: 'white', padding: 10, textAlign: 'center' }}>Request</Text></Pressable>
                    </View>
                    <Pressable style={{
                        backgroundColor: 'black',
                        width: '50%',
                        borderRadius: 36,
                        top: '20%',
                        alignSelf: 'center'
                    }}
                        onPress={() => {
                            navigation.navigate('Mess', { kitchenId: kitchen._id })
                        }}><Text style={{ color: 'white', padding: 10, textAlign: 'center' }}>Get Mess</Text></Pressable>
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
        margin: 20
    },
    container: {
        backgroundColor: 'white',
        height: '100%',
    }
});
