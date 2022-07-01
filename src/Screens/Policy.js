import React, { useState } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
// import Checkbox from 'expo-checkbox';
export default function Policy({ navigation }) {
    let [email, setEmail] = useState('');
    let [DOB, setDOB] = useState('');
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    let [CNIC, setCNIC] = useState('');
    const [isChecked, setChecked] = useState(false);

    return (
        <>
            <SafeAreaView>

                <View
                    style={{
                        backgroundColor: "#FFFFFF",
                        height: '100%',
                        alignItems: 'center',

                    }}
                >
                    <View style={{ width: '80%', marginTop: '5%' }}>
                    </View>

                    <View style={{
                        width: '90%',
                        alignItems: 'center',
                        margin: 12
                    }}>

                        <Text style={{
                            fontSize: 32,
                            fontWeight: '700',
                            fontFamily: 'Comfortaa'
                        }}>Data & Privacy</Text>
                        {/* </View>
                    <View style={{
                        width: 312,
                        height: 335,
                        alignItems: 'center',
                        margin: 20
                    }}> */}

                        <Text style={{
                            textAlign: 'center',
                            lineHeight: 13.38,
                            margin: 12,
                            width: 312,
                            marginLeft: 32,
                            marginRight: 31
                        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus nisl, maximus at dictum sed, blandit sed nunc. Donec eleifend eleifend orci, porta commodo arcu sollicitudin nec. Nulla lobortis quam felis, egestas lobortis ligula molestie sit amet. Ut semper vitae nulla vel faucibus. Sed elementum nunc in sapien semper, ac vulputate arcu finibus. Aliquam iaculis mi a posuere ullamcorper. Quisque tincidunt tincidunt mi, ut eleifend risus lobortis quis. Nam at velit ipsum.
                        </Text>
                        <Text style={{
                            textAlign: 'center',
                            lineHeight: 13.38,
                            width: 312,
                            marginLeft: 32,
                            marginRight: 31
                        }}>
                            Donec cursus sapien nibh, ut tempor magna convallis at. Cras nec vulputate lectus, quis gravida elit. Mauris non nisl erat. In hac habitasse platea dictumst. Etiam quam erat, accumsan a pulvinar interdum, luctus quis augue. Integer tincidunt suscipit est ac tempus. In sollicitudin dui vitae urna cursus, eu bibendum nibh commodo. Quisque ornare, orci sed lacinia bibendum, libero turpis venenatis nibh, in tristique sapien nunc in elit. Sed ex ipsum, lobortis id condimentum non, sagittis et risus. Vestibulum fringilla a orci sit amet porttitor. Donec pharetra diam eu ultricies interdum.
                        </Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: '80%',
                    }}>
                        <Pressable style={{
                            backgroundColor: '#FBC62C',
                            height: 42,
                            borderRadius: 25
                        }}>
                            <Text
                                style={{
                                    color: '#000000', alignSelf: 'center', marginTop: '3%', fontSize: 16, fontWeight: 'bold'
                                }}
                            >Accept & Continue </Text>
                        </Pressable>
                        <Pressable style={{
                            backgroundColor: '#FFFFFF',
                            height: 42,
                            borderWidth: 1,
                            borderRadius: 25,
                            top: '25%'
                        }}>
                            <Text
                                style={{
                                    color: '#000000', alignSelf: 'center', marginTop: '3%', fontSize: 16, fontWeight: 'bold'
                                }}
                            >Learn More </Text>
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
});
