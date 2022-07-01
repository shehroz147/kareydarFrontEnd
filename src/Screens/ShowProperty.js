
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable, Linking,
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import server from "../server/server";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function ShowProperty({ navigation, route }) {
    const { property } = route.params;
    const [mobile_no, setNumber] = useState('');
    const requestHouse = async () => {
        let id = await AsyncStorage.getItem('userId');
        const _id = JSON.parse(id);
        const data = {
            houseId: property._id,
            userId: _id
        }
        const response = await server.post('RequestHouse/', data)
        if (response.status === 200) {
            alert('Request Submitted Successfully')
        }
        // console.log(response);
    }


    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>


                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '60%',
                        alignSelf: 'center',
                        top: '10%'
                    }}>

                        <Image
                            source={{ uri: property?.profileImage }}
                            style={{
                                height: 200, width: 240
                            }} />

                        <Text style={{ margin: 20, fontWeight: 'bold', textAlign: 'center' }} >{property?.name}</Text>
                        <Text style={{ margin: 20, fontWeight: 'bold', textAlign: 'center' }}>{property?.address}</Text>

                        {/* <TextInput
                                    value={mobile_no}
                                    onChangeText={mobile_no => setNumber({ mobile_no })}
                                    placeholder={'Enter Mobile to Send WhatsApp Message'}
                                    style={styles.input1}
                                    keyboardType={'numeric'}
                                /> */}
                        <Pressable
                            style={{
                                backgroundColor: 'black',
                                borderRadius: 36,
                                borderColor: 'white',
                                borderWidth: 2,
                            }}
                            onPress={requestHouse}>
                            <Text
                                style={{ color: 'white', textAlign: 'center', padding: 15 }}
                            // onPress={() => {
                            //     Linking.openURL(
                            //         'http://api.whatsapp.com/send?phone=923324650989'
                            //     );
                            // }}>
                            >
                                Send Request
                            </Text>
                        </Pressable>
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
        margin: 20
    },
    container: {
        backgroundColor: 'white',
        height: '100%',
    },
    input1: {
        alignSelf: 'center',
        width: 250,
        height: 44,
        padding: 10,
        right: '20%',
        top: '120%',
        backgroundColor: '#D3D3D3',

    }
});
