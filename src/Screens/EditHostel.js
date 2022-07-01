import React, { useState, useEffect } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { Modal } from "react-native-paper";

import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
// import CheckBox from '@react-native-community/checkbox';
import { DevSettings } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import Images from '../Img/Images';
import server from "../server/server";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
// import Checkbox from 'expo-checkbox';
export default function EditHostel({ route }) {
    const navigation = useNavigation();
    const { property } = route.params
    let [kitchen, setKitchen] = useState('');
    const [image, setImage] = useState(null);
    const [user, setUser] = useState([]);
    let [address, setAddress] = useState('');
    let [bedRoom, setBedRoom] = useState('')
    let [size, setSize] = useState('')
    let [floors, setFloors] = useState('')
    let [province, setProvince] = useState('')

    let [bathroom, setBathrooms] = useState('');
    let [city, setCity] = useState('');
    let [price, setPrice] = useState('');
    let [CNIC, setCNIC] = useState('');
    const [url, setURL] = useState('');
    const [urls, setURLs] = useState('');
    const [isChecked, setChecked] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
    const [toggleCheckBox3, setToggleCheckBox3] = useState(false)
    const [toggleCheckBox4, setToggleCheckBox4] = useState(false)

    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };

    const Logout = async () => {
        await AsyncStorage.removeItem("userId");
        DevSettings.reload();
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library


        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    const editProfile = async () => {
        const id = await AsyncStorage.getItem("userId");
        const _id = JSON.parse(id);
        const data = {
            id: property._id,
            profileImage: url,
            city: city,
            province: province,
            address: address,
            images: urls
        }
        console.log(data)
        const response = await server.post('Hostel/update', data);
        console.log(response);
    }

    const getUser = async () => {
        const id = await AsyncStorage.getItem("userId");
        const _id = JSON.parse(id);
        const data = {
            id: _id
        }
        const user = await server.post('User/GetById', data);
        setUser(user.data);

    }
    useEffect(() => {
        // CheckIfLocationEnabled();
        // alert(JSON.stringify(cart))
        getUser();

    }, []);
    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <View
                        style={{
                            backgroundColor: "#FFFFFF",
                            height: '100%'
                        }}
                    >
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 18,
                            fontWeight: 'bold',

                        }}>HOSTEL</Text>

                        <View style={{
                            width: '90%',
                            alignSelf: 'center',
                        }}>
                            {/* <Pressable style={{
                                width: '50%',
                                alignSelf: 'center',
                                backgroundColor: '#FBC62C',
                                height: 42,
                                borderRadius: 25,
                                margin: 10
                            }}
                                onPress={showModal}>
                                <Text
                                    style={{
                                        color: '#000000', alignSelf: 'center', marginTop: '3%', fontSize: 16, fontWeight: 'bold'
                                    }}
                                >Add Photo</Text>
                            </Pressable> */}
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
                        </View>
                        <View>

                            {/* <Pressable
                                onPress={pickImage}>
                                {!image && <Image
                                    source={{ uri: 'https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=' }}
                                    style={{
                                        width: 100, height: 100, alignSelf: 'center', borderRadius: 36,
                                        borderWidth: 2,
                                        borderColor: '#FBC62C'
                                    }} />}
                            </Pressable>
                            {image && <Image source={{ uri: image }} style={{ width: 80, height: 80, alignSelf: 'center', margin: 10, borderRadius: 36, }} />} */}
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '90%'
                            }}>
                                <TextInput
                                    style={styles.inputRow}
                                    onChangeText={setCity}
                                    value={city}
                                    placeholder={`${property.city} "City"`}
                                    placeholderTextColor={'black'}

                                />
                                <TextInput
                                    style={styles.inputRow}
                                    onChangeText={setProvince}
                                    value={province}
                                    placeholder={`${property.province} "Province"`}
                                    placeholderTextColor={'black'}

                                />
                            </View>
                            <TextInput
                                style={styles.input}
                                onChangeText={setAddress}
                                value={address}
                                placeholder={`${property.address} "Address" `}
                                placeholderTextColor={'black'}

                            />
                            {/* <TextInput
                                style={styles.input}
                                onChangeText={setCity}
                                value={city}
                                placeholder={`${property?.city} "City"`}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={setPrice}
                                value={price}
                                placeholder={`${property?.price} "Price"`}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={setBedRoom}
                                value={bedRoom}
                                placeholder={`${property?.bedRoom} "BedRooms"`}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={setFloors}
                                value={floors}
                                placeholder={`${property?.floors} "Floors"`}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={setSize}
                                value={size}
                                placeholder={`${property?.size} "Size"`}
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={setProvince}
                                value={province}
                                placeholder={`${property?.province} "province"`}
                            /> */}
                            {/* <View style={styles.section} >

                            </View> */}


                            {/* 
                            <View >
                                <CheckBox
                                    disabled={false}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                />
                                <Text>Dependant</Text>
                                <CheckBox
                                    disabled={false}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                />
                                <Text>Independant</Text>
                            </View> */}

                        </View>
                        <Pressable style={{
                            width: '50%',
                            alignSelf: 'center',
                            backgroundColor: '#FBC62C',
                            height: 42,
                            borderRadius: 25,
                            margin: 10
                        }}
                            onPress={editProfile}>
                            <Text
                                style={{
                                    color: '#000000', alignSelf: 'center', marginTop: '3%', fontSize: 16, fontWeight: 'bold'
                                }}
                            >Save </Text>
                        </Pressable>
                        <Pressable style={{
                            width: '90%',
                            alignSelf: 'center',
                            marginTop: '10%',
                            backgroundColor: '#FBC62C',
                            height: 42,
                            borderRadius: 25
                        }}
                            onPress={() => {
                                navigation.navigate('ViewRooms', { property: property })
                            }}
                        >
                            <Text
                                style={{
                                    color: '#000000', alignSelf: 'center', marginTop: '3%', fontSize: 16, fontWeight: 'bold'
                                }}
                            >View Rooms</Text>
                        </Pressable>

                        <Pressable style={{
                            width: '90%',
                            alignSelf: 'center',
                            marginTop: '10%',
                            backgroundColor: '#FBC62C',
                            height: 42,
                            borderRadius: 25
                        }}
                            onPress={() => {
                                navigation.navigate('AddRooms', { property: property })
                            }}
                        >
                            <Text
                                style={{
                                    color: '#000000', alignSelf: 'center', marginTop: '3%', fontSize: 16, fontWeight: 'bold'
                                }}
                            >Add Rooms</Text>
                        </Pressable>
                    </View>
                </ScrollView>
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
        borderRadius: 25
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
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    paragraph: {
        fontSize: 15,
    },
    checkbox: {
        margin: 8,
    },
});
