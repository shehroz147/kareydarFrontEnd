import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, RefreshControl, Pressable, FlatList, ScrollView
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";

import { Divider } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import server from "../server/server";
const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function Favourite({ navigation }) {
    const [refreshing, setRefreshing] = React.useState(false);
    const [count, setCount] = useState(0);
    const onRefresh = React.useCallback(() => {
        setCount(count + 1);
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    const [hostel, setHostel] = useState([]);
    const [kitchen, setKitchen] = useState([]);
    const [house, setHouse] = useState([]);
    const [appartment, setAppartment] = useState([]);
    const getFavourite = async () => {

        const id = await AsyncStorage.getItem("userId");
        const _id = JSON.parse(id);
        const data = {
            userId: _id
        }
        console.log(data);
        const response = await server.post('Favourite/User', data);
        console.log("The response data is :", response.data);
        if (!(response.data.house.length === 0)) {
            setHouse(response.data.house);
        }
        if (!(response.data.kitchen.length === 0)) {
            setKitchen(response.data.kitchen);
        }
        if (!(response.data.appartment.length === 0)) {
            setAppartment(response.data.appartment);
        }
        if (!(response.data.hostel.length === 0)) {
            setHostel(response.data.hostel);
        }
        const newData = response.data?.house?.concat(response.data?.appartment);
        const Data = newData?.concat(response.data?.hostel);
        const DATA = Data?.concat(response.data?.kitchen);
        setHouse(DATA);



    }

    useEffect(() => {
        getFavourite();
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
                />
                <View style={styles.container}>


                    <View style={{
                        marginLeft: '10%',
                        marginTop: '10%',
                        marginBottom: '10%'
                    }}>
                        <Text style={{
                            textAlign: 'left',
                            fontSize: 22,
                            fontWeight: 'bold'
                        }}>
                            Favourites ----------------------
                        </Text>
                    </View>

                    <View style={{ height: '100%', width: '100%', alignContent: 'center', marginTop: 10 }}>
                        <FlatList
                            keyExtractor={(item) => item._id}
                            data={house}
                            style={{ paddingBottom: 40, marginTop: 10 }}
                            columnWrapperStyle={{ justifyContent: 'space-around' }}
                            renderItem={({ item }) => {
                                return (

                                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: "center" }} >

                                        <Pressable
                                        >
                                            <Image style={{
                                                width: 140,
                                                height: 140
                                            }}
                                                source={{ uri: item.profileImage }}
                                            />
                                        </Pressable>
                                        <View style={{
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}>

                                            <View style={{
                                                marginTop: 10,
                                                marginBottom: 15,
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "space-between"
                                            }}>
                                                <View>
                                                    <Text style={{
                                                        fontWeight: 'bold',
                                                        fontSize: 18, textAlign: 'center', margin: 15
                                                    }}>
                                                        {item.price}
                                                    </Text>
                                                    <Text>{item.province}</Text>
                                                    <Text>{ }</Text>
                                                </View>
                                                {/* <HotelCard addToFavourite={addToFavourite} item={item._id} /> */}

                                            </View>
                                        </View>
                                    </View>
                                );
                            }}
                            numColumns={2}
                            // pagingEnabled
                            horizontal={false}
                            showsHorizontalScrollIndicator={false}
                        />
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
    container1: {
        flex: 1,
        height: 1,
        width: 10,
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
