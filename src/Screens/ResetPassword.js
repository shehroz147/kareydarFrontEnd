import React, { useState } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import server from "../server/server";
import AsyncStorage from '@react-native-async-storage/async-storage';
import curve from '../../assets/curve.png';

export default function ResetPassword({ navigation, route }) {
    let [password, setPassword] = useState('');
    const { email } = route.params;
    const Login = async () => {
        const params = {
            email: email,
            password: password
        }

        console.log(params);
        const response = await server.post("User/ResetPassword/", params);
        console.log(response);
        navigation.navigate('Login')
    }

    return (
        <>
            <SafeAreaView>
                <View
                    style={{
                        backgroundColor: "#FFFFFF",
                        height: '100%',
                        width: '100%'
                    }}
                >
                    <View style={{ display: 'flex' }}>
                        <Image
                            source={curve}
                        />

                        <Text style={{ fontSize: 40, fontWeight: "bold", position: 'absolute', alignSelf: 'center', justifyContent: 'center', marginTop: '20%' }}>
                            Kareydar
                        </Text>
                        <View style={{
                            width: '90%',
                            alignSelf: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                alignSelf: 'center',
                                fontSize: 28,
                                fontWeight: 'bold'
                            }}>
                                Reset Password
                            </Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={setPassword}
                                value={password}
                                placeholder="Password"
                                placeholderTextColor={'black'}

                            />

                            <Pressable style={{
                                width: '40%',
                                alignSelf: 'center',
                                marginTop: '10%',
                                backgroundColor: '#FBC62C',
                                height: 42,
                                borderRadius: 25
                            }}
                                onPress={Login}>
                                <Text
                                    style={{
                                        color: '#000000', alignSelf: 'center', marginTop: '5%', fontSize: 16, fontWeight: 'bold'
                                    }}
                                >DONE</Text>
                            </Pressable>

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
});
