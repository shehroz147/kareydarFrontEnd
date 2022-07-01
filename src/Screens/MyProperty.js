import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect, useDebugValue } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable, RefreshControl
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";

import { Divider } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import server from "../server/server";
import { ScrollView } from "react-native-gesture-handler";

const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function MyProperty({ navigation }) {
    const [count, setCount] = useState(0);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setCount(count + 1);
        wait(1000).then(() => setRefreshing(false));
    });

    const [appartmentList, setAppartmentList] = useState([]);
    const [hostelList, setHostelList] = useState([]);
    const [houseList, setHouseList] = useState([]);

    const getKitchen = async () => {
        const id = await AsyncStorage.getItem('userId');
        const _id = JSON.parse(id);
        const data = {
            userId: _id
        }
        const response = await server.post('AllProperty/User', data);
        console.log(response.data)
        setAppartmentList(response.data.appartmentList)
        setHouseList(response.data.houseList)
        setHostelList(response.data.hostelList)
    }
    useEffect(() => {
        // CheckIfLocationEnabled();
        // alert(JSON.stringify(cart))
        getKitchen();

    }, [count]);


    return (
        <>
            <SafeAreaView>
                <ScrollView
                    style={styles.container1}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                >
                    <View style={styles.container}>
                        <Text style={{
                            marginTop: '6%',
                            marginLeft: '3%',
                            justifyContent: 'center',
                            fontSize: 18,
                            fontWeight: '800',
                            textAlign: 'center'
                        }}>My Property  </Text>
                        <View style={{ flex: 1 }}>
                            {hostelList.map((data, index) => (
                                <View key={index}>
                                    <View style={{
                                        marginBottom: 20
                                    }}>
                                        <View style={{ alignSelf: 'center', margin: 15 }}
                                        >
                                            <Pressable onPress={() => { navigation.navigate('EditHostel', { property: data }) }}>
                                                <Image
                                                    source={{ uri: data.profileImage }}
                                                    style={{ width: 300, height: 150 }}
                                                />
                                            </Pressable>
                                        </View>
                                        <View style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            left: '10%',
                                            alignSelf: 'center'
                                        }}>
                                            <Text style={{
                                                fontWeight: 'bold'
                                            }}>{data.address}</Text>
                                            <Text style={{
                                                fontWeight: 'bold'

                                            }}>{data.price}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                            {appartmentList.map((data, index) => (
                                <View key={index}>
                                    <View style={{
                                        marginBottom: 20
                                    }}>
                                        <View style={{ alignSelf: 'center', margin: 15 }}
                                        >
                                            <Pressable onPress={() => { navigation.navigate('EditAppartment', { property: data }) }}>
                                                <Image
                                                    source={{ uri: data.profileImage }}
                                                    style={{ width: 300, height: 150 }}
                                                />
                                            </Pressable>
                                        </View>
                                        <View style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignSelf: 'center'
                                        }}>
                                            <Text style={{
                                                fontWeight: 'bold'
                                            }}>{data.address}</Text>
                                            <Text style={{
                                                fontWeight: 'bold'

                                            }}>{data.price} Rs</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                            {houseList.map((data, index) => (
                                <View key={index}>
                                    <View style={{
                                        marginBottom: 20
                                    }}>
                                        <View style={{ alignSelf: 'center', margin: 15 }}
                                        >
                                            <Pressable onPress={() => { navigation.navigate('EditHouse', { property: data }) }}>
                                                <Image
                                                    source={{ uri: data.profileImage }}
                                                    style={{ width: 300, height: 150 }}
                                                />
                                            </Pressable>
                                        </View>
                                        <View style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            left: '10%',
                                            alignSelf: 'center'
                                        }}>
                                            <Text style={{
                                                fontWeight: 'bold'
                                            }}>{data.name}</Text>
                                            <Text style={{
                                                fontWeight: 'bold'

                                            }}>{data.address}</Text>
                                        </View>
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
