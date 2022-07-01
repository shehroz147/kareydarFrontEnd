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
// import { size } from "lodash";


export default function AddRooms({ route }) {
    const { property } = route.params;
    const [size, setSize] = useState('');
    const [floorNo, setFloor] = useState('');
    const [roomNo, setRoom] = useState('');
    const [washRoom, setWashRoom] = useState('');
    const [rent, setRent] = useState('');
    const [totalSeats, setTotal] = useState('');




    const addProperty = async () => {
        const data = {
            hostelId: property._id,
            // roomImages: images,
            size: size,
            floorNo: floorNo,
            roomNo: roomNo,
            totalSeats: totalSeats,
            washRoom: washRoom,
            rent: rent
        }
        console.log(data)
        const response = await server.post('Room/', data);
        if (response.status === 200) {
            alert('Successfull')
        }
        else {
            alert('Something went wrong')
        }
        console.log(response.data);
        // setRooms(response.data);
        // console.log("All Kitchen:", allKitchen)
        // console.log(await AsyncStorage.getItem('userId'))
    }

    useEffect(() => {
        // CheckIfLocationEnabled();
        // alert(JSON.stringify(cart))
        // getKitchen();

    }, []);

    return (
        <ScrollView>
            <View style={{ height: '100%', width: '100%', alignContent: 'center', marginTop: 10 }}>
                {/* <Text style={{
                    marginLeft: '8%',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: '500',
                    color: '#575757',

                }}>PROPERTY TYPE AND LOCATION</Text> */}
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '80%',
                    top: '5%'
                }}>
                    {/* <Text style={{
                        marginLeft: '5%'
                    }}>Property Type</Text> */}



                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '80%',
                    top: '10%'
                }}>


                </View>
                <Pressable
                    style={{
                        alignSelf: 'center',
                        top: '5%'
                    }}>
                    {/* <Text
                        style={{
                            color: "black",
                            letterSpacing: 1.5,
                            fontSize: 20,
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            marginLeft: 10,
                        }}
                    // onPress={showModal}
                    >
                        Add Photo
                    </Text> */}



                </Pressable>
                {/* <Modal
                    style={{
                        backgroundColor: '#FBC62C',
                        height: '20%',
                        width: '50%',
                        marginLeft: 120
                    }}
                    visible={visible}
                    onDismiss={hideModal}
                    contentContainerStyle={containerStyle}
                >
                    <ScrollView>
                        <Images setImage={setURL} />
                    </ScrollView>
                </Modal> */}
                <View style={{
                    display: 'flex',
                    flexDirection: 'column',
                    top: '5%',
                    alignItems: 'center'
                }}>
                    <TextInput
                        placeholder="size"
                        placeholderTextColor={'black'}

                        style={{
                            height: 40,
                            margin: 0,
                            borderWidth: 1,
                            padding: 10,
                            width: '60%',
                            borderRadius: 36
                        }}
                        onChangeText={setSize}
                        value={size}
                    />
                    <TextInput
                        placeholder="Room No"
                        placeholderTextColor={'black'}

                        style={{
                            height: 40,
                            margin: 8,
                            borderWidth: 1,
                            padding: 10,
                            width: '60%',
                            borderRadius: 36
                        }}
                        onChangeText={setRoom}
                        value={roomNo}
                    />


                    <TextInput
                        placeholder="Rent"
                        placeholderTextColor={'black'}

                        style={{
                            height: 40,
                            margin: 8,
                            borderWidth: 1,
                            padding: 10,
                            width: '60%',
                            borderRadius: 36
                        }}
                        onChangeText={setRent}
                        value={rent}
                    />


                    <TextInput
                        placeholder="washroom"
                        placeholderTextColor={'black'}

                        style={{
                            height: 40,
                            margin: 8,
                            borderWidth: 1,
                            padding: 10,
                            width: '60%',
                            borderRadius: 36
                        }}
                        onChangeText={setWashRoom}
                        value={washRoom}
                    />
                    <TextInput
                        placeholder="Floor"
                        placeholderTextColor={'black'}

                        style={{
                            height: 40,
                            margin: 0,
                            borderWidth: 1,
                            padding: 10,
                            width: '60%',
                            borderRadius: 36
                        }}
                        onChangeText={setFloor}
                        value={floorNo}
                    />

                    <TextInput
                        placeholder="Total Seats"
                        placeholderTextColor={'black'}

                        style={{
                            height: 40,
                            margin: 8,
                            borderWidth: 1,
                            padding: 10,
                            width: '60%',
                            borderRadius: 36
                        }}
                        onChangeText={setTotal}
                        value={totalSeats}
                    />

                    {/* <TextInput
                        placeholder=""
                        style={{
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                        onChangeText={setPrice}
                        value={price}
                    /> */}


                    <Pressable style={{
                        width: '60%',
                        backgroundColor: '#FBC62C',
                        borderWidth: 1,
                        margin: 35,
                        alignSelf: 'center',
                        height: 42,
                        borderRadius: 25,
                    }}
                        onPress={addProperty}>
                        <Text
                            style={{
                                color: '#000000', alignSelf: 'center', marginTop: '3%', fontSize: 16, fontWeight: 'bold'
                            }}
                        >Add </Text>
                    </Pressable>
                </View>
            </View>

        </ScrollView >

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



