import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
export default function Paynow({ navigation }) {

    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        width: '80%',
                        // alignSelf: 'center',
                        top: '10%'
                    }}>


                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            // marginLeft: 30
                        }}>
                            <Text style={{ marginLeft: '10%' }} >House Kitchen</Text>
                            <Text style={{ marginLeft: '10%', color: '#42DF0B' }}>Approved</Text>
                            <Text style={{ marginLeft: '10%', }}>Rs 5000</Text>
                            <Text style={{ borderRadius: 36, marginLeft: '10%', backgroundColor: '#FFC700', textAlign: 'center' }}>Paynow</Text>
                        </View>
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
    }
});
