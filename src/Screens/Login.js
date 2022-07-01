import React, { useState } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import server from "../server/server";
import AsyncStorage from '@react-native-async-storage/async-storage';
import curve from '../../assets/curve.png';

export default function Login({ navigation }) {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [id, setId] = useState('');
    const Login = async () => {
        const params = {
            email: email,
            password: password
        }
        if (!email || !password) {
            alert('Missing Field')
            return;
        }
        console.log(params);
        const response = await server.post("User/login/", params);
        if (response.status === 200) {
            const id_ = JSON.stringify(response.data.userInfo._id);
            console.log(id_);
            // console.log(response.data.userInfo._id)
            // setId(response.data.userInfo._id);   

            await AsyncStorage.setItem("userId", JSON.stringify(response.data.userInfo._id));
            let _id = await AsyncStorage.getItem("userId");
            let id = JSON.parse(_id);
            // console.log(id);

            navigation.navigate("Home")
            console.log(response.data.userInfo._id);
        }
        else {
            alert('Wrong Email or Password');
        }
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
                                fontSize: 32,
                                fontWeight: 'bold'
                            }}>
                                Welcome
                            </Text>
                            <Text>Login to your account</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={setEmail}
                                value={email}
                                placeholder="Email/Username"
                                placeholderTextColor={'black'}

                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={setPassword}
                                value={password}
                                placeholderTextColor={'black'}

                                placeholder="Password"
                            />
                            <Pressable
                                onPress={() => { navigation.navigate('ForgotPassword') }}>
                                <Text style={{
                                    textAlign: 'right'
                                }}>Forget Password?</Text>
                            </Pressable>
                            <Pressable style={{
                                width: '90%',
                                alignSelf: 'center',
                                marginTop: '10%',
                                backgroundColor: '#FBC62C',
                                height: 42,
                                borderRadius: 25
                            }}
                                onPress={Login}>
                                <Text
                                    style={{
                                        color: '#000000', alignSelf: 'center', marginTop: '3%', fontSize: 16, fontWeight: 'bold'
                                    }}
                                >Login </Text>
                            </Pressable>
                            <Pressable style={{
                                width: '90%',
                                alignSelf: 'center',
                                marginTop: '10%',
                                backgroundColor: '#FFFFFF',
                                borderWidth: 1,
                                height: 42,
                                borderRadius: 25,
                            }}
                                onPress={() => navigation.navigate("Signup")}>

                                <Text
                                    style={{
                                        color: '#000000', alignSelf: 'center', marginTop: '3%', fontSize: 16, fontWeight: 'bold'
                                    }}
                                >Signup </Text>
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
