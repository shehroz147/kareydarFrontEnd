import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect, useDebugValue } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import server from "../server/server";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
export default function AllDishes({ route }) {
    const navigation = useNavigation();
    const [kitchen, setKitchen] = useState([]);
    const { kitchenId } = route.params
    const getKitchen = async () => {
        const data = {
            id: kitchenId
        }
        console.log(data);
        const response = await server.post('Dish/byKitchenId', data);
        console.log(response.data)
        setKitchen(response.data)
    }
    const deleteDish = async (dishId) => {
        const data = {
            id: dishId
        }
        console.log(data);
        const res = await server.post('Dish/Delete', data);
        if (res.status === 200) {
            alert('Dish deleted successfully');
            navigation.goBack()
        }
        else if (res.status === 201) {
            alert('Dish not deleted');
        }
        console.log(res.data);
    }
    useEffect(() => {
        // CheckIfLocationEnabled();
        // alert(JSON.stringify(cart))
        getKitchen();

    }, []);


    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={{
                            marginTop: '6%',
                            marginLeft: '3%',
                            justifyContent: 'center',
                            fontSize: 18,
                            fontWeight: '800',
                            textAlign: 'center'
                        }}>All Available Dishes </Text>
                        <View style={{ flex: 1 }}>
                            {kitchen.map((data, index) => (
                                <View key={index}>
                                    <View style={{
                                        margin: 15,
                                        display: 'flex',
                                        flexDirection: 'row',

                                    }}>
                                        <View style={{
                                            display: 'flex',
                                            flexDirection: 'column',

                                        }}>
                                            <Image style={{
                                                width: 140,
                                                height: 140
                                            }}
                                                // source={item.profileImage}
                                                // source={require(`${item?.profileImage}`)}
                                                source={{ uri: 'https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=' }}
                                            />
                                            <Pressable
                                                style={{
                                                    backgroundColor: 'red',
                                                    height: 30, borderRadius: 12,
                                                    padding: 5
                                                }}
                                                onPress={() => { deleteDish(data._id) }}>
                                                <Text> Delete Dish</Text>
                                            </Pressable>
                                        </View>
                                        <View style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}>
                                            <Text style={{
                                                fontWeight: 'bold',
                                                fontSize: 14,
                                                margin: 5
                                            }}>{data?.name}</Text>
                                            <Text style={{

                                                fontWeight: 'bold',
                                                fontSize: 14,
                                                marginLeft: 18
                                            }}> {data?.discription}</Text>

                                            <Text style={{

                                                fontWeight: 'bold',
                                                fontSize: 14,
                                                margin: 5
                                            }}> {data?.price}</Text>
                                            <Text style={{

                                                fontWeight: 'bold',
                                                fontSize: 14,
                                                margin: 5
                                            }}> {data?.time}</Text>
                                            <Text style={{

                                                fontWeight: 'bold',
                                                fontSize: 14,
                                                margin: 5
                                            }}> {data?.days}</Text>
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
