import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable, Linking
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import server from "../server/server";
import whatsapp from '../../assets/hi.png';
import appWhat from '../../assets/what.png';

import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
export default function PendingRequests({ route }) {
    const [name, setName] = useState('');
    const [addres, setAddress] = useState('');
    const [charges, setCharges] = useState('');
    const createFormData = (photo, body = {}) => {
        const data = new FormData();
        const { kitchenId } = route.params;
        data.append('photo', {
            name: photo.fileName,
            type: photo.type,
            uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
        });

        Object.keys(body).forEach((key) => {
            data.append(key, body[key]);
        });

        return data;
    };

    const navigation = useNavigation();
    const [image, setImage] = useState(null);
    const [requests, setRequest] = useState([]);
    const { kitchenId } = route.params;
    const [user, setUser] = useState();
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

    const EditKitchen = async () => {

        const data = {
            id: kitchenId._id,
            name: name,
            address: addres,
            charges: charges,
            profileImage: image
        }
        const response = await server.post('Kitchen', data);
        if (response.status === 200) {
            alert('Kitchen Edited');
            navigation.navigate('MyKitchen');
        }

    }

    const getPendingRequest = async () => {
        const value = {
            id: kitchenId.user._id
        }
        const data = {
            kitchenId: kitchenId._id
        }
        console.log(value);
        const user = await server.post('User/GetById', value);
        setUser(user.data);
        console.log(data);
        const response = await server.post('RequestKitchen/UserRequest/', data);
        if (response.data === 200) {
            alert('Successfull')
        }
        else {
            alert('Something went wrong')
        }
    }
    const acceptRequest = async (requestId) => {
        const data = {
            reqId: requestId
        }
        const response = await server.post('RequestKitchen/AcceptRequest', data);
        console.log(response);
        if (response.status === 200) {
            Linking.openURL(
                `http://api.whatsapp.com/send?phone=${user.phone}`
            ); alert('Request Accepted');
        }
    }
    useEffect(() => {
        // CheckIfLocationEnabled();
        // alert(JSON.stringify(cart))
        getPendingRequest();

    }, []);
    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>
                    <Pressable
                        onPress={pickImage}>
                        {!image && <Image
                            source={{ uri: kitchenId.profileImage }}
                            style={{
                                width: 100, height: 100, alignSelf: 'center', borderRadius: 36,
                                borderWidth: 2,
                                borderColor: '#FBC62C'
                            }} />}
                    </Pressable>
                    {/* <Pressable style={{
                        backgroundColor: '#FBC62C',
                        borderRadius: 36,
                        width: '50%',
                        padding: 10,
                        alignSelf: 'center'
                    }}
                        onPress={pickImage}>
                        <Text style={{
                            textAlign: 'center',
                            color: '#FFFFFF',
                            color: 'black'
                        }}>
                            Add Image
                        </Text>
                    </Pressable> */}

                    {image && <Image source={{ uri: image }} style={{
                        width: 100, height: 100, alignSelf: 'center', borderRadius: 36,
                        borderWidth: 2,
                        borderColor: '#FBC62C'
                    }} />}
                    <TextInput
                        style={styles.input}
                        onChangeText={setName}
                        value={name}
                        placeholder="Enter Kitchen Name"
                        placeholderTextColor={'black'}

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setAddress}
                        value={addres}
                        placeholder="Enter Address"
                        placeholderTextColor={'black'}

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setCharges}
                        value={charges}
                        placeholder="Kitchen Charges"
                        placeholderTextColor={'black'}

                    />

                    <Pressable style={{
                        width: '50%',
                        alignSelf: 'center',
                        marginTop: '10%',
                        backgroundColor: '#FBC62C',
                        height: 42,
                        borderRadius: 25
                    }}
                        onPress={EditKitchen}
                    >
                        <Text
                            style={{
                                color: '#000000', alignSelf: 'center', marginTop: '3%', fontSize: 16, fontWeight: 'bold',
                            }}
                        >Save </Text>
                    </Pressable>
                    <View>


                        {requests.map((data, index) => (
                            <View key={index}>

                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 22,
                                    alignSelf: 'center'
                                }}>Pending Requests</Text>
                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignSelf: 'center',
                                }}>
                                    <Image
                                        style={{ width: 60, height: 60 }}
                                        source={whatsapp}
                                    />
                                    <Text style={{
                                        fontWeight: 'bold',
                                        color: 'black',
                                        textAlign: 'center',
                                        fontSize: 16,
                                        paddingTop: 15,
                                        marginLeft: 10
                                    }}>{data.user.firstName}</Text>
                                    <Pressable style={{
                                        margin: 10,
                                        backgroundColor: '#3DEB00', borderRadius: 20,
                                        padding: 10, height: 40
                                    }}
                                        onPress={() => {
                                            acceptRequest(data._id)
                                        }}>
                                        <Text style={{
                                            textAlign: 'center',
                                            color: '#FFFFFF'
                                        }}>
                                            Accept
                                        </Text>
                                    </Pressable>


                                    <Pressable style={{
                                        margin: 10,
                                        backgroundColor: 'red', borderRadius: 20,
                                        padding: 10, height: 40
                                    }}
                                    >
                                        <Text style={{
                                            textAlign: 'center',
                                            color: '#FFFFFF'
                                        }}>
                                            Reject
                                        </Text>
                                    </Pressable>
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
                    </View>
                    <View style={{
                        display: 'flex'
                    }}>
                        <Pressable style={{
                            width: '50%',
                            alignSelf: 'center',
                            marginTop: '10%',
                            backgroundColor: '#FBC62C',
                            height: 42,
                            borderRadius: 25
                        }}
                            onPress={() => { navigation.navigate('AllDishes', { kitchenId: kitchenId._id }) }}
                        >
                            <Text
                                style={{
                                    color: '#000000', alignSelf: 'center', marginTop: '3%', fontSize: 16, fontWeight: 'bold',
                                }}
                            >All Dishes </Text>
                        </Pressable>
                        <Pressable style={{
                            width: '50%',
                            alignSelf: 'center',
                            marginTop: '10%',
                            backgroundColor: '#FBC62C',
                            height: 42,
                            borderRadius: 25
                        }}
                            onPress={() => { navigation.navigate('AddDish', { kitchenId: kitchenId._id }) }}
                        >
                            <Text
                                style={{
                                    color: '#000000', alignSelf: 'center', marginTop: '3%', fontSize: 16, fontWeight: 'bold',
                                }}
                            >+ Add Dish </Text>
                        </Pressable>

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
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    container: {
        backgroundColor: 'white',
        width: '100%'
    }
});
