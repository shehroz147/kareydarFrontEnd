import React, { useState, useEffect } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { Modal, Portal } from "react-native-paper";

import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
// import CheckBox from '@react-native-community/checkbox';
import { DevSettings } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import Images from '../Img/Images';
import server from "../server/server";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import Checkbox from 'expo-checkbox';
export default function EditProfile({ navigation }) {
    let [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [user, setUser] = useState([]);
    let [DOB, setDOB] = useState('');
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    let [CNIC, setCNIC] = useState('');
    const [url, setURL] = useState('');
    const [isChecked, setChecked] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
    const [toggleCheckBox3, setToggleCheckBox3] = useState(false)
    const [toggleCheckBox4, setToggleCheckBox4] = useState(false)

    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { height: 200, width: 150, margin: 100, marginTop: -300 };

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
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            dob: DOB,
            id: _id,
            profileImage: url
        }
        console.log(data)
        const response = await server.post('User/editProfile', data);
        if (response.status === 200) {
            alert('Successfull')
        }
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
                        <Pressable style={{
                            borderRadius: 36,
                            borderWidth: 2,
                            borderColor: '#FBC62C',
                            width: 120,
                            alignSelf: 'center'
                        }}
                            onPress={showModal}>
                            {/* <Text
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
                            </Text> */}
                            <Image
                                source={{ uri: user?.profileImage }}
                                style={{
                                    width: 100, height: 100, alignSelf: 'center', borderRadius: 36,
                                    borderWidth: 2,
                                }} />

                            {/* {image && <Image
                                source={{ uri: user.profileImage }}
                                style={{
                                    width: 100, height: 100, alignSelf: 'center', borderRadius: 36,
                                    borderWidth: 2,
                                    borderColor: '#FBC62C'
                                }} />} */}


                        </Pressable>
                        <Modal
                            style={{
                            }}
                            visible={visible}
                            onDismiss={hideModal}
                            contentContainerStyle={containerStyle}
                        >
                            <ScrollView>
                                <Images setImage={setURL} />
                            </ScrollView>
                        </Modal>
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
                                    onChangeText={setFirstName}
                                    value={firstName}
                                    placeholder={`${user.firstName}`}
                                    placeholderTextColor={'black'}

                                />
                                <TextInput
                                    style={styles.inputRow}
                                    onChangeText={setLastName}
                                    value={lastName}
                                    placeholder={`${user.lastName}`}
                                    placeholderTextColor={'black'}

                                />
                            </View>
                            <TextInput
                                style={styles.input}
                                onChangeText={setEmail}
                                value={email}
                                placeholder={`${user.email}`}
                                placeholderTextColor={'black'}

                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={setPhoneNumber}
                                value={phoneNumber}
                                placeholder={`${user?.phone}`}
                                placeholderTextColor={'black'}

                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={setCNIC}
                                value={CNIC}
                                placeholder={`${user?.guardianCNIC}`}
                                placeholderTextColor={'black'}

                            />

                            <TextInput
                                style={styles.input}
                                onChangeText={setDOB}
                                value={DOB}
                                placeholder={`${user?.dob}`}
                                placeholderTextColor={'black'}

                            />

                            <View style={styles.section} >

                            </View>


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
                            width: '30%',
                            alignSelf: 'center',
                            backgroundColor: '#FBC62C',
                            height: 42,
                            borderRadius: 25,
                            margin: 10
                        }}
                            onPress={Logout}>
                            <Text
                                style={{
                                    color: '#000000', alignSelf: 'center', marginTop: '3%', fontSize: 16, fontWeight: 'bold'
                                }}
                            >Logout </Text>
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
