import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable, FlatList
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";

import server from "../server/server";
export default function MessServices({ navigation }) {
    const [allProviders, setAllProviders] = useState([]);

    const getProviders = async () => {
        const response = await server.get('User/MessProvider');
        console.log(response.data)
        setAllProviders(response.data)
    }
    useEffect(() => {
        // CheckIfLocationEnabled();
        // alert(JSON.stringify(cart))
        getProviders();

    }, []);


    return (
        <SafeAreaView style={styles.input
        }>
            <View style={{ height: '100%', width: '100%', alignContent: 'center', marginTop: 10 }}>
                <Text style={{
                    alignSelf: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 20
                }}>Mess Service Provider NearBy</Text>
                <FlatList
                    keyExtractor={(item) => item._id}
                    data={allProviders}
                    style={{ paddingBottom: 40 }}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    renderItem={({ item }) => {
                        return (

                            <View style={{ display: 'flex', flexDirection: 'column', margin: 10 }} >
                                <Image style={{
                                    width: 140,
                                    height: 140
                                }}
                                    source={{ uri: item?.profileImage }}
                                // source={require(`${item?.profileImage}`)}

                                />
                                <Text>{item.firstName} {item.lastName}</Text>
                                <Text>{item.phone}</Text>
                                <Text>{item.email}</Text>
                            </View>
                        );
                    }}
                    numColumns={2}
                    // pagingEnabled
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    input: {
        height: '100%',
        flex: 1,
        padding: 0,
        paddingTop: 0,
        backgroundColor: "white",
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    container: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start'
    },
    items: {
        width: '50%' // is 50% of container width
    }
});
