import React, { useState } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import server from "../server/server";
import AsyncStorage from '@react-native-async-storage/async-storage';
import curve from '../../assets/curve.png';

export default function ForgotPassword({ navigation }) {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [id, setId] = useState('');
    const Login = async () => {
        const params = {
            email: email,
        }
        console.log(params);
        const response = await server.post("User/ForgotPassword/", params);
        navigation.navigate("WriteOTP", { email: email });
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
                                Forgot Your Password?
                            </Text>
                            <Text style={{
                                fontSize: 12,
                                width: '60%'
                            }} >Enter your email address to recover your password through an OTP</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={setEmail}
                                value={email}
                                placeholder="Email"
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
                                >Get OTP </Text>
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
