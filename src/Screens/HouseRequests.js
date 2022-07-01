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
export default function HouseRequest({ route }) {
    const createFormData = (photo, body = {}) => {
        const data = new FormData();
        const { property } = route.params;
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
    const { property } = route.params;
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
    const getPendingRequest = async () => {
        const value = {
            houseId: property._id
        }
        const response = await server.post('RequestHouse/UserRequest/', value);
        if (response.data === 200) {
            alert('Successfull')
        }
        else {
            alert('Something went wrong')
        }
        setRequest(response.data)
    }
    const acceptRequest = async (requestId) => {
        const data = {
            reqId: requestId
        }
        const response = await server.post('RequestHouse/Accept', data);
        console.log(response);
        if (response.status === 200) {
            Linking.openURL(
                'http://api.whatsapp.com/send?phone=923324650989'
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
