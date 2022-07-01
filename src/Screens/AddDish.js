import React, { useState, useEffect } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from "lodash";
import { RadioButton } from 'react-native-paper';

import { Divider } from "react-native-paper";
// import server from '../Component/server'
import * as Location from 'expo-location';
import server from "../server/server";
// import Checkbox from 'expo-checkbox';
export default function AddDish({ route }) {
    const [address, setAddress] = React.useState([]);
    const { kitchenId } = route.params;
    let [kitchen, setKitchen] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState([])
    const [days, setDays] = useState([])
    const [availability, setAvalaible] = useState(false)
    const [price, setPrice] = useState('')
    const addDish = async () => {
        let day = days.map((data) => { return data.item });
        let times = time.map((data) => { return data.item });

        const data = {
            name: name,
            discription: description,
            time: times,
            days: day,
            avalability: availability,
            price: price,
            kitchenId: kitchenId
        }
        console.log(day, times);
        console.log(data);
        const response = await server.post('Dish/', data);
        console.log(response.data);
        if (response.status === 200) {
            alert("Dish added successfully");
            navigation.navigate('AllDishes');
        }
    }

    const K_OPTIONS = [
        {
            item: "Breakfast",
            id: "1",
        },
        {
            item: "Lunch",
            id: "2",
        },
        {
            item: "Dinner",
            id: "3",
        }];
    const Days = [
        {
            item: "Monday",
            id: "1",
        },
        {
            item: "Tuesday",
            id: "2",
        },
        {
            item: "Wednesday",
            id: "3",
        }, {
            item: "Thursday",
            id: "4",
        },
        {
            item: "Friday",
            id: "5",
        },
        {
            item: "Saturday",
            id: "6",
        }, {
            item: "Sunday",
            id: '7'
        }];
    const onMultiChange = () => {
        return (item) => setTime(xorBy(time, [item], "id"));
    };
    const onMulti = () => {
        return (item) => setDays(xorBy(days, [item], "id"));
    };
    // create the handler method



    useEffect(() => {
        // CheckIfLocationEnabled();
        // alert(JSON.stringify(cart))


    }, []);


    return (
        <>


            <View
                style={{
                    backgroundColor: '#FFFFFF',
                    height: "100%"
                }}
            >
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                    textAlign: 'center',
                }}>
                    Add Dish
                </Text>
                <View style={{
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: 10
                }}>

                    <TextInput
                        style={styles.input}
                        onChangeText={setName}
                        value={name}
                        placeholder="Dish Name"
                        placeholderTextColor={'black'}

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setDescription}
                        value={description}
                        placeholder="Description"
                        placeholderTextColor={'black'}

                    />

                    <RadioButton
                        color="#FBC62C"
                        value={availability}
                        status={availability === true ? 'checked' : 'unchecked'}
                        onPress={() => { setAvalaible(true) }}

                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={setPrice}
                        value={price}
                        placeholder="Enter Price "
                        placeholderTextColor={'black'}

                    />
                    <SelectBox
                        label="Timings"
                        options={K_OPTIONS}
                        selectedValues={time}
                        onMultiSelect={onMultiChange()}
                        onTapClose={onMultiChange()}
                        isMulti
                        multiOptionContainerStyle={{ backgroundColor: '#FBC62C' }}
                        // labelStyle={{backgroundColor: "#244e78"}}
                        // selectedItemStyle={{backgroundColor: "#244e78"}}
                        arrowIconColor='#FBC62C'
                        searchIconColor='#FBC62C'
                        toggleIconColor='#FBC62C'
                        inputFilterContainerStyle={{ color: '#FBC62C' }}
                    />
                    <SelectBox
                        label="Days"
                        options={Days}
                        selectedValues={days}
                        onMultiSelect={onMulti()}
                        onTapClose={onMulti()}
                        isMulti
                        multiOptionContainerStyle={{ backgroundColor: '#FBC62C' }}
                        // labelStyle={{ backgroundColor: "#244e78" }}
                        // selectedItemStyle={{ backgroundColor: "#244e78" }}
                        arrowIconColor='#FBC62C'
                        searchIconColor='#FBC62C'
                        toggleIconColor='#FBC62C'
                        inputFilterContainerStyle={{ color: '#FBC62C' }}
                    />


                    <Pressable style={{
                        top: '5%',
                        width: '40%',
                        alignSelf: 'center',
                        backgroundColor: '#FBC62C',
                        height: 42,
                        borderRadius: 25
                    }}
                        onPress={addDish}>
                        <Text
                            style={{
                                color: '#000000', alignSelf: 'center', marginTop: '6%', fontSize: 16, fontWeight: 'bold', alignContent: 'center'
                            }}
                        >Save </Text>
                    </Pressable>
                </View>
            </View>

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
