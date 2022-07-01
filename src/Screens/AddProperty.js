import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable, RefreshControl, Dimensions
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "react-native-paper";
// import server from "../Component/server";
import server from "../server/server";
const { height, width } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";
const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};
export default function AddProperty() {
    const [refreshing, setRefreshing] = useState(false);
    const [count, setCount] = useState(0);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setCount(count + 1);
        wait(1000).then(() => setRefreshing(false));
    });
    const [userData, setUserData] = useState([]);
    const [providor, setProvider] = useState([]);
    const navigation = useNavigation();
    const getUser = async () => {

        let id = await AsyncStorage.getItem('userId');
        let _id = JSON.parse(id);
        const data = {
            id: _id
        }
        const response = await server.post('User/GetById', data)
        console.log(response.data);

        setUserData(response.data);
        setProvider(response.data.providor);
    }
    const propertySwitch = async () => {
        navigation.navigate('Adding')
    }

    useEffect(() => {
        getUser();

    }, [count]);


    const becomeProvider = async () => {
        let id = await AsyncStorage.getItem('userId');
        let _id = JSON.parse(id);
        console.log(_id);
        const data = {
            user: _id
        }
        const response = await server.post('MessProviderRequest/', data);
        if (response.status === 200)
            alert("Request Submitted");
    }

    const becomePropertyProvider = async () => {
        let id = await AsyncStorage.getItem('userId');
        let _id = JSON.parse(id);
        const data = {
            user: _id
        }
        const response = await server.post('PropertyProviderRequest/', data);
        console.log(response.data);
        if (response.status === 200)
            alert("Request Submitted");
    }
    return (

        <View style={{ height: '100%', width: '100%', alignContent: 'center' }}>
            <ScrollView
                style={styles.container1}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >

                {providor?.includes('Mess') ?
                    (

                        <View>
                            <Pressable style={{
                                backgroundColor: '#E5E5E5',
                                borderRadius: 36,
                                width: '60%',
                                alignSelf: 'center',
                                top: '5%'
                            }}
                                onPress={() => { navigation.navigate('Kitchen') }}
                            >
                                <Text style={{
                                    color: '#575757',
                                    textAlign: 'center',
                                    padding: 10
                                }}>
                                    Go To Kitchen
                                </Text>

                            </Pressable>
                        </View>

                    ) : (
                        <View>
                            <Pressable style={{
                                backgroundColor: '#E5E5E5',
                                borderRadius: 36,
                                width: '60%',
                                alignSelf: 'center',
                                top: '5%'
                            }}
                                onPress={becomeProvider}
                            >
                                <Text style={{
                                    color: '#575757',
                                    textAlign: 'center',
                                    padding: 10
                                }}>
                                    Become Mess Providor
                                </Text>

                            </Pressable>
                        </View>)}



                {providor?.includes('Property') ? (
                    <View style={{
                        flex: 1
                    }}>
                        <Pressable style={{
                            backgroundColor: '#E5E5E5',
                            borderRadius: 36,
                            height: 70,
                            width: '60%',
                            alignSelf: 'center',
                            top: '25%'
                        }}
                            onPress={() => {
                                navigation.navigate('Adding')
                            }}
                        >
                            <Text style={{
                                color: '#575757',
                                textAlign: 'center',
                                padding: 10
                            }}>
                                Go To Property
                            </Text>

                        </Pressable>
                    </View>

                ) : (
                    <View style={{
                        margin: 20
                    }}>
                        <Pressable style={{
                            backgroundColor: '#E5E5E5',
                            borderRadius: 36,
                            width: '60%',
                            alignSelf: 'center',
                            top: '5%'
                        }}
                            onPress={
                                becomePropertyProvider
                            }
                        >
                            <Text style={{
                                color: '#575757',
                                textAlign: 'center',
                                padding: 10
                            }}>
                                Become Property Provider

                            </Text>

                        </Pressable>
                    </View>)}
            </ScrollView>

        </View>

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
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    }, container1: {
        flex: 1,
        height: height / 1,
        width: width - 10,
    },
});
