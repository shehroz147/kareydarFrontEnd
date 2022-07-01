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


export default function HotelCard(props) {
    const [heart, setHeart] = useState(false)
    const [HEART, SETHEART] = useState(<Icon name="heart-o" size={30} color="#900" />)

    const HeartFunction = (heartBool, myBool) => {
        if (heartBool === false) {
            if (myBool) {
                SETHEART(<Icon name="heart-o" size={30} color="#900" />)
                setHeart(true)
                props.addToFavourite(props.item)
            }
        }
        else {
            SETHEART(<Icon name="heart" size={30} color="#900" />)
            setHeart(false)
        }
    }
    useEffect(() => {
        HeartFunction(false, false)
    }, [])
    return (
        <View>
            <Pressable onPress={() => HeartFunction(heart, true)}>
                <View>
                    {HEART}
                </View>
            </Pressable>
        </View>
    )
}