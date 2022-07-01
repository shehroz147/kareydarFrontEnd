import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable, FlatList, RefreshControl, Dimensions,

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
const { height, width } = Dimensions.get("window");

import Icon from 'react-native-vector-icons/FontAwesome';
import HotelCard from "./HotelCard";
const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};


export default function AllProperty({ navigation }) {
    const [houseLength, setHouseLength] = useState();
    const [hotelLength, setHotelLength] = useState();
    const [appartmentLength, setAppartmentLength] = useState();

    let [choose, setChoose] = useState('');
    const [refreshing, setRefreshing] = React.useState(false);
    const [count, setCount] = useState(0);
    const onRefresh = React.useCallback(() => {
        setCount(count + 1);
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    const [checkAll, setAll] = useState(false);
    const range = [20000, 30000, 40000, 50000]
    const [heart, setHeart] = useState(false)
    const [HEART, SETHEART] = useState(<Icon name="heart-o" size={30} color="#900" />)
    const [allHouses, setAllHouses] = useState([]);
    const getKitchen = async () => {
        const response = await server.get('AllProperty');
        setHouseLength(response.data?.houseList?.length);
        setAppartmentLength(response.data?.appartmentList?.length);
        setHotelLength(response.data?.hotelList?.length);
        setAllHouses(response.data.houseList);
    }
    const getProperty = async (category) => {
        setChoose(category);
        const response = await server.get('AllProperty');
        setAllHouses(response.data?.houseList);
        if (category === 'All') {
            const newData = response.data?.houseList.concat(response.data?.appartmentList);
            const Data = newData.concat(response.data?.hostelList);
            setAllHouses(Data)
        }
        if (category === 'House') {
            setAllHouses(response.data?.houseList)
        }
        if (category === 'Appartment') {
            setAllHouses(response.data?.appartmentList)
        }
        if (category === 'Hostel') {
            setAllHouses(response.data?.hostelList)
        }
        // setAll(!checkAll)
        // if (response.status === 200) {
        //     const list1 = setAllHouses(response?.data?.houseList)
        //     const list2 = setAllApartments(response?.data?.appartmentList)
        //     const list3 = setAllHostels(response?.data?.hostelList)
        //     const newList = list1.Concat(list2)
        //     const List4 = newList.Concat(list3);
        //     setAllHouses(List4);
        // }
    }

    const addToFavourite = async (item) => {
        const id = await AsyncStorage.getItem("userId");
        const _id = JSON.parse(id);

        // console.log(houseId);
        if (item.type === 'House') {
            let data = {
                userId: _id,
                houseId: item._id
            }
            let response = await server.post('Favourite/UserAddHouse', data);

        }
        if (item.type === 'Appartment') {
            let data = {
                userId: _id,
                AppartmentId: item._id
            }
            let response = await server.post('Favourite/UserAddAppartment', data);

        }
        if (item.type === 'Hostel') {
            let data = {
                userId: _id,
                hostelId: item._id
            }
            let response = await server.post('Favourite/UserAddHostel', data);

        }

        // switch (choose) {
        //     case 'All':
        //         break;
        //     case 'Hostel':
        //         data = {
        //             userId: _id,
        //             hostelId: houseId
        //         }
        //         response = await server.post('Favourite/UserAddHostel', data)
        //         break;
        //     case 'House':
        //         data = {
        //             userId: _id,
        //             houseId: houseId
        //         }
        //         response = await server.post('Favourite/UserAddHouse', data)
        //         break;
        //     default: // For appartment
        //         const data = {
        //             userId: _id,
        //             appartmentId: houseId
        //         }
        //         const response = await server.post('Favourite/UserAddAppartment', data)
        //         break;
        // }

    }




    const HeartFunction = (heartBool) => {
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

        getKitchen();
        HeartFunction(false);

    }, []);
    useEffect(() => {

        getProperty('All');
        HeartFunction(false);

    }, [count]);

    return (
        <SafeAreaView style={styles.input
        }>
            <ScrollView
                style={styles.container1}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />

            <View style={{ height: '100%', width: '100%', alignContent: 'center', marginTop: 10 }}>


                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                    <View style={{ paddingRight: 20, marginTop: 30, flexDirection: "row", alignItems: "center" }}>
                        <RadioButton
                            color="#FBC62C"
                            value={checkAll}
                            status={checkAll === true ? 'checked' : 'unchecked'}
                            onPress={() => { getProperty('All') }}

                        />
                        <Text style={{ color: "black" }}>All</Text>
                    </View>
                    <View style={{ marginTop: 30, flexDirection: "row", alignItems: "center" }}>
                        <RadioButton
                            color="#FBC62C"
                            value={checkAll}
                            status={checkAll === true ? 'checked' : 'unchecked'}
                            onPress={() => { getProperty('House') }}
                        />
                        <Text style={{ color: "black" }}>House</Text>
                    </View>
                    <View style={{ marginTop: 30, flexDirection: "row", alignItems: "center" }}>
                        <RadioButton
                            color="#FBC62C"
                            value={checkAll}
                            status={checkAll === true ? 'checked' : 'unchecked'}
                            onPress={() => { getProperty('Appartment') }}
                        />
                        <Text style={{ color: "black" }}>Appartment</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 19 }}>
                    <View style={{ paddingRight: 20, marginTop: 10, flexDirection: "row", alignItems: "center" }}>
                        <RadioButton
                            color="#FBC62C"
                            value={checkAll}
                            status={checkAll === true ? 'checked' : 'unchecked'}
                            onPress={() => { getProperty('Hostel') }}

                        />
                        <Text style={{ color: "black" }}>Hostel</Text>
                    </View>
                    {/* <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}>
                        <RadioButton
                            color="#FBC62C"
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                        />
                        <Text style={{ color: "black" }}>Portion</Text>
                    </View> */}
                </View >
                <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginLeft: 30, marginTop: 10, marginBottom: 10 }}>
                    <Text style={{ fontSize: 14 }}>Range Price</Text>
                    <SelectDropdown
                        data={range}
                        onSelect={(selectedItem, index) => {
                            setMyRange(selectedItem)
                        }}
                        buttonStyle={{
                            borderRadius: 36,
                            width: 100,
                            fontSize: 7,
                            padding: 0,
                            height: 25,
                        }}
                        dropdownStyle={{

                        }}
                        defaultButtonText={'Min Range'}
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
                    <View>
                        <Text>To</Text>
                    </View>
                    <SelectDropdown
                        data={range}
                        onSelect={(selectedItem, index) => {
                            setMyRange(selectedItem)
                        }}
                        buttonStyle={{
                            borderRadius: 36,
                            width: 100,
                            fontSize: 7,
                            padding: 0,
                            height: 25,
                            marginLeft: 20,
                        }}
                        dropdownStyle={{

                        }}
                        defaultButtonText={'Max Range'}
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

                <View>
                    <FlatList
                        keyExtractor={(item) => item._id}
                        data={allHouses}
                        style={{ paddingBottom: 40, marginTop: 10 }}
                        columnWrapperStyle={{ justifyContent: 'space-around' }}
                        renderItem={({ item, index }) => {
                            return (

                                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: "center" }} >
                                    <Pressable
                                        onPress={() => {
                                            navigation.navigate('ShowProperty', { property: item })
                                        }}>
                                        <Image style={{
                                            width: 140,
                                            height: 140
                                        }}
                                            source={{ uri: item?.profileImage }}
                                        />
                                    </Pressable>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>

                                        <View style={{
                                            marginTop: 10,
                                            marginBottom: 15,
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between"
                                        }}>
                                            <View style={{
                                                flex: 1
                                            }}>
                                                <Text style={{
                                                    fontWeight: 'bold'
                                                }}>{item.price}</Text>
                                                <Text style={{
                                                    fontWeight: 'bold'
                                                }}>{item.name}</Text>
                                                <Text style={{
                                                    fontWeight: 'bold'
                                                }}>{item.address}</Text>
                                            </View>
                                            <HotelCard addToFavourite={addToFavourite} item={item} />

                                        </View>
                                    </View>
                                </View>
                            );
                        }}
                        numColumns={2}
                        // pagingEnabled
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
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
    },
    container1: {
        flex: 1,
        height: height / 1,
        width: width - 10,
    },
    number: {
        fontSize: 24,
        color: "#244e78",
        alignSelf: "center",
    },
    table: {
        width: "100%",
    },
    tableHeading: {
        fontWeight: "bold",
        color: "black",
    },
    header: {
        width: 125,
        borderWidth: 1,
        paddingLeft: "3%",
    },
});



