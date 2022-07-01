import React, { useState, useEffect } from "react";
import editLogo from '../../assets/edit.png';
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { Modal } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Divider } from "react-native-paper";
import server from "../server/server";
import * as ImagePicker from 'expo-image-picker';
import Images from '../Img/Images';
import * as Location from 'expo-location';
import AsyncStorage from "@react-native-async-storage/async-storage";
// import Checkbox from 'expo-checkbox';
import { useNavigation } from "@react-navigation/native";
export default function AddServices() {
    const navigation = useNavigation();
    const [locationServiceEnabled, setLocationServiceEnabled] = React.useState(false);
    const [address, setAddress] = React.useState([]);
    const [userId, setUserId] = useState("");
    const [image, setImage] = useState(null);
    let [kitchen, setKitchen] = useState('');
    const [user, setUser] = useState([]);
    let [service, setService] = useState('');
    let [charges, setCharges] = useState('');
    const [url, setURL] = useState('');
    let [dish, setDish] = useState('');

    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: '#FBC62C', padding: 20, };
    const [isChecked, setChecked] = useState(false);
    const getUser = async () => {
        const id = await AsyncStorage.getItem('userId');
        const _id = JSON.parse(id);
        setUserId(_id);
    }
    const addKitchen = async () => {
        CheckIfLocationEnabled();
    }
    const CheckIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();

        if (!enabled) {
            setLocationServiceEnabled(enabled);
            GetCurrentLocation();

        } else {
            setLocationServiceEnabled(enabled);
            GetCurrentLocation();
        }
    };


    // create the handler method

    const GetCurrentLocation = async (values) => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            alert(
                'Permission not granted',
                'Allow the app to use location service.',
                [{ text: 'OK' }],
                { cancelable: false }
            );
        }

        let { coords } = await Location.getCurrentPositionAsync();

        if (coords) {
            const { latitude, longitude } = coords;
            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude
            });


            // const dis = getDistance(
            //     { latitude: latitude, longitude: longitude },
            //     { latitude: 51.4663848, longitude: -0.3759137, }
            // );
            // console.log(`Distance\n\n${dis} Meter\nOR\n${dis / 1000} KM`);
            // if (dis > 4828.03) {
            //     alert("We are Sorry, but we do not deliver at your location");
            //     navigation.navigate("Home");
            // }


            // console.log(response);
            for (let item of response) {
                const location = `${item.name}, ${item.city}`;

                setAddress(location);
                const data = {
                    name: kitchen,
                    // shippingAddress: city,
                    //  city: town,
                    address: location,
                };
                // console.log("DATA:", data);
                let values = {
                    user: userId,
                    longitude: longitude,
                    lattitude: latitude,
                    name: kitchen,
                    address: location,
                    imgURL: url
                }
                console.log(values);
                const response = await server.post('Kitchen/', values);
                console.log(response);
                if (response.status === 200) {
                    alert('Kitchen Added Successfully');
                    navigation.navigate('MyKitchen')
                }

                // if (address.length > 0) {
                // navigation.navigate('paypall', { item: data });


                // navigation.navigate("paypall", {
                //   totalPrice: totalPrice,
                //   data:data
                // }); 
                // };
            }
        }
    }

    useEffect(() => {
        getUser();
        // CheckIfLocationEnabled();
        // alert(JSON.stringify(cart))

        // console.log(params)

    }, []);


    return (
        <>
            <SafeAreaView>

                <View
                    style={{
                        backgroundColor: "#FFFFFF",
                        height: '100%'
                    }}
                >
                    <View style={{
                        top: '2%'
                    }}>
                        <Text style={{
                            top: '10%',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: 22
                        }}>Add Kitchen</Text>
                    </View>
                    <View style={{
                        width: '90%',
                        top: '3%',
                        // alignSelf: 'center',
                        margin: 10
                    }}>
                        <Pressable>
                            <Text
                                style={{
                                    color: "black",
                                    letterSpacing: 1.5,
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                    marginLeft: 10,
                                }}
                                onPress={showModal}
                            >
                                edit
                            </Text>



                        </Pressable>
                        <Modal
                            style={{
                                width: '50%',
                                marginTop: 30,
                                marginLeft: 120
                            }}
                            visible={visible}
                            onDismiss={hideModal}
                            contentContainerStyle={containerStyle}
                        >
                            <ScrollView>
                                <Images setImage={setURL} />
                            </ScrollView>
                        </Modal>

                        <TextInput
                            style={styles.input}
                            onChangeText={setKitchen}
                            value={kitchen}
                            placeholder="Enter Kitchen Name"
                            placeholderTextColor={'black'}

                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setService}
                            value={service}
                            placeholder="Enter Address"
                            placeholderTextColor={'black'}

                        />
                        {/* <TextInput
                            style={styles.input}
                            onChangeText={setCharges}
                            value={charges}
                            placeholder="Monthly Charges"
                        />
                        <View style={{
                            width: '40%'
                        }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={setDish}
                                value={dish}
                                placeholder="+ Add Dish"
                            />
                        </View> */}

                    </View>
                    <View style={{
                        height: '20%',
                        backgroundColor: '#FFFFFF',
                        justifyContent: 'center'
                    }}>
                        <Pressable style={{
                            width: '40%',
                            alignSelf: 'center',
                            backgroundColor: '#FBC62C',
                            height: 42,
                            borderRadius: 25
                        }}
                            onPress={addKitchen}>
                            <Text
                                style={{
                                    color: '#000000', alignSelf: 'center', marginTop: '6%', fontSize: 16, fontWeight: 'bold', alignContent: 'center'
                                }}
                            >Save </Text>
                        </Pressable>
                    </View>
                </View>

            </SafeAreaView>
        </>

    );
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: '#E5E5E5',
        borderRadius: 25,
        paddingLeft: 20,
        color: '#575757'
    },
    inputRow: {
        height: 40,
        margin: 14,
        padding: 10,
        backgroundColor: '#E5E5E5',
        borderRadius: 25,
        width: '45%'
    },
    section: {
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        margin: 10
    },
    paragraph: {
        fontSize: 15,
    },
    checkbox: {
        margin: 8,
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
});
