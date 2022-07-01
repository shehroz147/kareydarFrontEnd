import React, { useState } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
// import Checkbox from 'expo-checkbox';
export default function EditProfile2({ navigation }) {
    let [email, setEmail] = useState('');
    let [DOB, setDOB] = useState('');
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    let [CNIC, setCNIC] = useState('');
    let [guardianName, setGuardianName] = useState('');
    let [guardianPhoneNumber, setGuardianPhoneNumber] = useState('');
    let [guardianCNIC, setGuardianCNIC] = useState('');
    const [isChecked, setChecked] = useState(false);

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
                        <View style={{
                            width: '90%',
                            alignSelf: 'center',
                        }}>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '90%'
                            }}>
                                <TextInput
                                    style={styles.inputRow}
                                    onChangeText={setFirstName}
                                    value={firstName}
                                    placeholder="First Name"
                                />
                                <TextInput
                                    style={styles.inputRow}
                                    onChangeText={setLastName}
                                    value={lastName}
                                    placeholder="Last Name"
                                />
                            </View>
                            <TextInput
                                style={styles.input}
                                onChangeText={setEmail}
                                value={email}
                                placeholder="Email Address"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={setPhoneNumber}
                                value={phoneNumber}
                                placeholder="Phone Number"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={setCNIC}
                                value={CNIC}
                                placeholder="CNIC"
                            />

                            <TextInput
                                style={styles.input}
                                onChangeText={setDOB}
                                value={DOB}
                                placeholder="DD/MM/YYYY"
                            />
                            <View style={styles.section}>
                                <Text>Male</Text>
                                <Text>Female</Text>
                            </View>

                            <View style={styles.section}>
                                <Text>Dependant</Text>
                                <Text>Independant</Text>
                            </View>

                            <TextInput
                                style={styles.input}
                                onChangeText={setGuardianName}
                                value={guardianName}
                                placeholder="Guardian Name"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={setGuardianPhoneNumber}
                                value={guardianPhoneNumber}
                                placeholder="Guardian Phone Number"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={setGuardianCNIC}
                                value={guardianCNIC}
                                placeholder="Guardian CNIC"
                            />
                            <Pressable style={{
                                width: '90%',
                                alignSelf: 'center',
                                backgroundColor: '#FBC62C',
                                height: 42,
                                borderRadius: 25
                            }}>
                                <Text
                                    style={{
                                        color: '#000000', alignSelf: 'center', marginTop: '3%', fontSize: 16, fontWeight: 'bold'
                                    }}
                                >Save </Text>
                            </Pressable>
                        </View>
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
