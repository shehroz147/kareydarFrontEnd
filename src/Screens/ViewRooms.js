import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable, FlatList
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "react-native-paper";
import server from "../server/server";
import { ScrollView } from "react-native-gesture-handler";
import { SearchBar } from 'react-native-elements';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RadioButton } from 'react-native-paper';
import SelectDropdown from "react-native-select-dropdown";

import Icon from 'react-native-vector-icons/FontAwesome';
import HotelCard from "./HotelCard";


export default function ViewRooms({ route }) {
    const { property } = route.params;
    const [checkAll, setAll] = useState(false);
    const [rooms, setRooms] = useState([]);
    const [checkAppartment, setAppartment] = useState(false);
    const [checkHostel, setHostel] = useState(false);
    const range = [20000, 30000, 40000, 50000]
    const [myRange, setMyRange] = useState()

    const [heart, setHeart] = useState(false)
    const [HEART, SETHEART] = useState(<Icon name="heart-o" size={30} color="#900" />)
    const [allHouses, setAllHouses] = useState([]);
    const [allHostels, setAllHostels] = useState([]);
    const [allApartments, setAllApartments] = useState([]);
    const [search, setSearch] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);
    const getKitchen = async () => {
        const data = {
            id: property._id
        }
        console.log(data)
        const response = await server.post('Room/getHostelRoom', data);
        if (response.data === 200) {
            alert('Successfull')
        }
        else {
            alert('Something went wrong')
        }
        console.log(response.data);
        setRooms(response.data);
        // console.log("All Kitchen:", allKitchen)
        // console.log(await AsyncStorage.getItem('userId'))
    }

    const searchHouse = async () => {
        const data = {
            city: searchQuery
        }
        const res = await server.get('AllProperty');
        console.log(res.data.appartmentList);

    }
    const addToFavourite = async (houseId) => {
        const id = await AsyncStorage.getItem("userId");
        const _id = JSON.parse(id)
        const data = {
            userId: _id,
            houseId: houseId
        }
        console.log(data);
        const response = await server.post('Favourite/UserAddHouse', data)
        console.log(response);
    }




    const HeartFunction = (heartBool) => {
        console.log(heart)
        if (heartBool === false) {
            // Heart = <Icon name="heart-o" size={30} color="#900" />
            SETHEART(<Icon name="heart-o" size={30} color="#900" />)
            setHeart(true)
        }
        else {
            // Heart = <Icon name="heart" size={30} color="#900" />
            SETHEART(<Icon name="heart" size={30} color="#900" />)
            setHeart(false)
        }
    }

    useEffect(() => {
        // CheckIfLocationEnabled();
        // alert(JSON.stringify(cart))
        getKitchen();

    }, []);

    return (
        <SafeAreaView style={styles.input
        }>
            <View style={{ height: '100%', width: '100%', alignContent: 'center', marginTop: 10 }}>


                <ScrollView>

                    {rooms.map((data, index) => (
                        <View key={index}>

                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignSelf: 'center',
                            }}>
                                {/* <Image
                                    style={{ width: 60, height: 60 }}
                                    source={whatsapp}
                                /> */}
                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        color: 'black',
                                        textAlign: 'center',
                                        fontSize: 16,
                                        paddingTop: 15,
                                        marginLeft: 10
                                    }}>Floor NO: {data.floorNo}</Text>

                                    <Text style={{
                                        fontWeight: 'bold',
                                        color: 'black',
                                        textAlign: 'center',
                                        fontSize: 16,
                                        paddingTop: 15,
                                        marginLeft: 10
                                    }}>Room No: {data.roomNo}</Text>

                                    <Text style={{
                                        fontWeight: 'bold',
                                        color: 'black',
                                        textAlign: 'center',
                                        fontSize: 16,
                                        paddingTop: 15,
                                        marginLeft: 10
                                    }}>Size: {data.size}</Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        color: 'black',
                                        textAlign: 'center',
                                        fontSize: 16,
                                        paddingTop: 15,
                                        marginLeft: 10
                                    }}>Seats: {data.totalSeats}</Text>



                                </View>
                            </View>

                            <Pressable style={{
                                margin: 10,
                                backgroundColor: '#FFFFFF',
                                alignSelf: 'center', padding: 10
                            }}
                            >


                            </Pressable>
                        </View>

                    ))}
                </ScrollView>
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
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    }

});



