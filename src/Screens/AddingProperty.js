import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable, ScrollView
} from "react-native";
import 'react-native-gesture-handler'
import { Modal } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Images from "../Img/Images";
import SelectDropdown from "react-native-select-dropdown";
import server from "../server/server";
import * as ImagePicker from 'expo-image-picker';
// import { ScrollView } from "react-native-gesture-handler";
export default function AddingProperty({ navigation }) {
    const [image, setImage] = useState(null);
    const [url, setURL] = useState('');
    const bedRooms = ["1", "2", "3", "4", "5"];
    const countries = ["Islamabad", "Karachi", "Lahore"];
    const propertyType = ["House", "Appartment", "Hostel"];
    const [city, setCity] = useState('');
    const [location, setLocation] = useState();
    const [title, setPropertyTitle] = useState('');
    const [price, setPrice] = useState('');
    const [bedRoom, setBedRooms] = useState('');
    const [Bathroom, setBathrooms] = useState('');

    const [size, setSize] = useState('');
    const [property, setProperty] = useState('');
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { padding: 20, backgroundColor: '#FBC62C' };

    const [kitchen, setKitchen] = useState('');
    const [floor, setFloor] = useState('');
    const [province, setProvince] = useState('');
    const addProperty = async () => {
        console.log(propertyType);
        let id = await AsyncStorage.getItem('userId');
        let _id = JSON.parse(id);
        const data = {
            user: _id,
            city: city,
            price: price,
            title: title,
            size: size,
            address: location,
            bedRoom: bedRoom,
            kitchen: kitchen,
            Bathroom: Bathroom,
            floorNo: floor,
            province: province,
            profileImage: url
        }
        const data1 = {
            user: _id,
            name: title,
            city: city,
            address: location,
            province: province,
            profileImage: url
        }
        if (property === 'House') {
            const response = await server.post('/House', data);
            if (response.status === 200)
                alert('House Added Successfully')
            navigation.navigate('MyProperty');
        }
        else if (property === 'Appartment') {
            const response = await server.post('/Appartments', data);
            if (response.status === 200)
                alert('Appartment Added Successfully')
            navigation.navigate('MyProperty');
        }
        else if (property === 'Hostel') {
            const response = await server.post('/Hostel', data1);
            if (response.status === 200)
                alert('Hostel Added Successfully')
            navigation.navigate('MyProperty');
        }
    }

    return (
        <>
            <ScrollView>
                <View style={{ height: '100%', width: '100%', alignContent: 'center', marginTop: 10 }}>
                    <Text style={{
                        marginLeft: '8%',
                        justifyContent: 'center',
                        fontSize: 14,
                        fontWeight: '500',
                        color: '#575757',

                    }}>PROPERTY TYPE AND LOCATION</Text>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '80%',
                        top: '5%'
                    }}>
                        <Text style={{
                            marginLeft: '5%'
                        }}>Property Type</Text>


                        <SelectDropdown
                            data={propertyType}
                            onSelect={(selectedItem, index) => {
                                setProperty(selectedItem)
                            }}
                            buttonStyle={{
                                margin: 0,
                                borderRadius: 36,
                                backgroundColor: '#FBC62C'

                            }}
                            dropdownStyle={{

                            }}
                            defaultButtonText={'House'}
                            dropdownIconPosition={'right'}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                return item
                            }}
                        />
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '80%',
                        top: '10%'
                    }}>
                        <Text style={{
                            marginLeft: 20,
                            fontSize: 16
                        }}>
                            City
                        </Text>
                        <SelectDropdown
                            data={countries}
                            onSelect={(selectedItem, index) => {
                                setCity(selectedItem)
                            }}
                            buttonStyle={{
                                margin: 0,
                                borderRadius: 36,
                                backgroundColor: '#FBC62C'

                            }}
                            dropdownStyle={{

                            }}
                            defaultButtonText={'City'}
                            dropdownIconPosition={'right'}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                return item
                            }}
                        />

                    </View>
                    <Pressable
                        style={{
                            alignSelf: 'center',
                            top: '5%'
                        }}>
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
                            Add Photo
                        </Text>



                    </Pressable>
                    <Modal
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
                    </Modal>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        top: '5%',
                        alignItems: 'center'
                    }}>
                        <TextInput
                            placeholder="Location"
                            placeholderTextColor={'black'}

                            style={{
                                height: 40,
                                margin: 0,
                                borderWidth: 1,
                                padding: 10,
                                width: '60%',
                                borderRadius: 36
                            }}
                            onChangeText={setLocation}
                            value={location}
                        />
                        <TextInput
                            placeholder="Title"
                            placeholderTextColor={'black'}

                            style={{
                                height: 40,
                                margin: 8,
                                borderWidth: 1,
                                padding: 10,
                                width: '60%',
                                borderRadius: 36
                            }}
                            onChangeText={setPropertyTitle}
                            value={title}
                        />

                        {!(property === 'Hostel') ?
                            <>

                                <TextInput
                                    placeholder="Price"
                                    placeholderTextColor={'black'}

                                    style={{
                                        height: 40,
                                        margin: 8,
                                        borderWidth: 1,
                                        padding: 10,
                                        width: '60%',
                                        borderRadius: 36
                                    }}
                                    onChangeText={setPrice}
                                    value={price}
                                />

                                <TextInput
                                    placeholder="Size"
                                    placeholderTextColor={'black'}

                                    style={{
                                        height: 40,
                                        margin: 8,
                                        borderWidth: 1,
                                        padding: 10,
                                        width: '60%',
                                        borderRadius: 36
                                    }}
                                    onChangeText={setSize}
                                    value={size}
                                />

                                <SelectDropdown
                                    data={bedRooms}
                                    onSelect={(selectedItem, index) => {
                                        setKitchen(selectedItem)
                                    }}
                                    buttonStyle={{
                                        margin: 0,
                                        borderRadius: 28,
                                        borderWidth: 1,
                                        height: 40,

                                    }}
                                    dropdownStyle={{

                                    }}
                                    defaultButtonText={'Kitchen'}
                                    dropdownIconPosition={'right'}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        // text represented after item is selected
                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                        return selectedItem
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        // text represented for each item in dropdown
                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                        return item
                                    }}
                                />
                                <SelectDropdown
                                    data={bedRooms}
                                    onSelect={(selectedItem, index) => {
                                        setBathrooms(selectedItem)
                                    }}
                                    buttonStyle={{
                                        margin: 0,
                                        borderRadius: 28,
                                        borderWidth: 1,
                                        height: 40,
                                        margin: 10

                                    }}
                                    dropdownStyle={{

                                    }}
                                    defaultButtonText={'Bathroom'}
                                    dropdownIconPosition={'right'}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        // text represented after item is selected
                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                        return selectedItem
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        // text represented for each item in dropdown
                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                        return item
                                    }}
                                />


                                <SelectDropdown
                                    data={bedRooms}
                                    onSelect={(selectedItem, index) => {
                                        setBedRooms(selectedItem)
                                    }}
                                    buttonStyle={{
                                        margin: 0,
                                        borderRadius: 28,
                                        borderWidth: 1,
                                        height: 40,
                                        margin: 10

                                    }}
                                    dropdownStyle={{

                                    }}
                                    defaultButtonText={'Bedrooms'}
                                    dropdownIconPosition={'right'}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        // text represented after item is selected
                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                        return selectedItem
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        // text represented for each item in dropdown
                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                        return item
                                    }}
                                />


                                <SelectDropdown
                                    data={bedRooms}
                                    onSelect={(selectedItem, index) => {
                                        setFloor(selectedItem)
                                    }}
                                    buttonStyle={{
                                        margin: 0,
                                        borderRadius: 28,
                                        borderWidth: 1,
                                        height: 40,

                                    }}
                                    dropdownStyle={{

                                    }}
                                    defaultButtonText={'Floors'}
                                    dropdownIconPosition={'right'}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        // text represented after item is selected
                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                        return selectedItem
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        // text represented for each item in dropdown
                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                        return item
                                    }}
                                />

                            </> : <>
                            </>}




                        <TextInput
                            placeholder="Province"
                            placeholderTextColor={'black'}

                            style={{
                                height: 40,
                                margin: 8,
                                borderWidth: 1,
                                padding: 10,
                                width: '60%',
                                borderRadius: 36
                            }}
                            onChangeText={setProvince}
                            value={province}
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

            </ScrollView>
        </>
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
        margin: 10
    },
    container: {
        backgroundColor: 'white',
        height: '100%'
    }
});
