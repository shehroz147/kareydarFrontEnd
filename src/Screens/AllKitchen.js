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
import Images from "../Img/Images";
import Icon from 'react-native-vector-icons/FontAwesome';
import HotelCard from "./HotelCard";
import Modal from "react-native-paper";

export default function AllKitchen({ navigation }) {
    const [url, setURL] = useState('');

    const [allHouses, setAllHouses] = useState([]);
    const [isSelected, setSelection] = useState(false);
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [searchQuery, setSearchQuery] = React.useState('');
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };
    const onChangeSearch = query => setSearchQuery(query);
    const getKitchen = async () => {
        const response = await server.get('Kitchen');
        console.log(response.data)
        setAllHouses(response.data)
        // console.log("All Kitchen:", allKitchen)
        // console.log(await AsyncStorage.getItem('userId'))
    }

    const searchHouse = async () => {
        const data = {
            city: searchQuery
        }
        const res = await server.post('House/ByCity', data);
        console.log(res.data);

    }
    const addToFavourite = async (houseId) => {
        const id = await AsyncStorage.getItem("userId");
        const _id = JSON.parse(id)
        const data = {
            userId: _id,
            houseId: houseId
        }
        console.log(data);
        const response = await server.post('Favourite/UserAddHouse', data)
        console.log(response);
    }




    const [checkAll, setAll] = useState(false);
    const [checkHouse, setHouse] = useState(false);
    const [checkAppartment, setAppartment] = useState(false);
    const [checkHostel, setHostel] = useState(false);
    const range = [20000, 30000, 40000, 50000]
    const [myRange, setMyRange] = useState()

    const [heart, setHeart] = useState(false)
    const [HEART, SETHEART] = useState(<Icon name="heart-o" size={30} color="#900" />)

    const HeartFunction = (heartBool) => {
        console.log(heart)
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
        // CheckIfLocationEnabled();
        // alert(JSON.stringify(cart))
        getKitchen();
        HeartFunction(false);

    }, []);

    return (
        <SafeAreaView style={styles.input
        }>
            <View style={{ height: '100%', width: '100%', alignContent: 'center', marginTop: 10 }}>


                <FlatList
                    keyExtractor={(item) => item._id}
                    data={allHouses}
                    style={{ paddingBottom: 40, marginTop: 10 }}
                    columnWrapperStyle={{ justifyContent: 'space-around' }}
                    renderItem={({ item }) => {
                        return (

                            <View style={{ display: 'flex', flexDirection: 'column' }} >

                                <Pressable
                                    onPress={() => {
                                        navigation.navigate('RequestScreen', { kitchen: item })
                                    }}>
                                    <View>
                                        <Image
                                            source={{ uri: item.profileImage }}
                                            style={{
                                                width: 140,
                                                height: 140
                                            }}
                                        />


                                    </View>
                                </Pressable>
                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    {/* <View style={{
                                        marginLeft: 100,
                                    }}>
                                        <Pressable
                                            style={{
                                                paddingTop: 20
                                            }}
                                            onPress={() => { addToFavourite(item._id) }}>

                                            <Image style={{
                                                width: 25,
                                                height: 20
                                            }}
                                                // source={item.profileImage}
                                                // source={require(`${item?.profileImage}`)}
                                                source={require('../../assets/heart1.png')}
                                            />
                                        </Pressable>
                                    </View> */}
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
                                            }}>{item.name}</Text>
                                            <Text style={{
                                                fontWeight: 'bold'
                                            }}>{item.address}</Text>

                                        </View>

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
    }

});



