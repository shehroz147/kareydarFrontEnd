import React, { useState, useEffect, Component } from 'react';
import { Text, View, TextInput, Pressable, Platform, TouchableOpacityBase, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

import Spinner from 'react-native-loading-spinner-overlay';
import {
    fontPixel,
    heightPixel,
    pixelSizeHorizontal,
    pixelSizeVertical,
    widthPixel,
} from '../../lib/style/adjust';
import { useForm, Controller } from 'react-hook-form';
import { useStyles } from '../../lib/style/useStyle';
import { useDispatch, useSelector } from 'react-redux';
import { defaultLogin } from '../../Components/store/features/userSlice';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
AntDesign.loadFont();
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
// import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
// } from 'react-native-google-signin';

import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import server from '../../server/server';
import auth from '../lib/api/auth';
const Login = () => {

    const startLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    const navigation = useNavigation();
    const [userId, setUserId] = useState('');
    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [gettingLoginStatus, setGettingLoginStatus] = useState(true);
    useEffect(() => {
        // GoogleSignin.configure({
        //     scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        //     webClientId: 'AIzaSyCyGKTv08DGfYhGXTZwdANZZWOXyI6ZRRM',
        // });
        // _isSignedIn();
    }, []);

    // const _isSignedIn = async () => {
    //     const isSignedIn = await GoogleSignin.isSignedIn();
    //     if (isSignedIn) {
    //         alert('User is already signed in');
    //         // Set User Info if user is already signed in
    //         _getCurrentUserInfo();
    //     } else {
    //         console.log('Please Login');
    //     }
    //     setGettingLoginStatus(false);
    // };

    // const _getCurrentUserInfo = async () => {
    //     try {
    //         let info = await GoogleSignin.signInSilently();
    //         console.log('User Info --> ', info);
    //         setUserInfo(info);
    //     } catch (error) {
    //         if (error.code === statusCodes.SIGN_IN_REQUIRED) {
    //             alert('User has not signed in yet');
    //             console.log('User has not signed in yet');
    //         } else {
    //             alert("Something went wrong. Unable to get user's info");
    //             console.log("Something went wrong. Unable to get user's info");
    //         }
    //     }
    // };
    // const _signIn = async () => {
    //     // It will prompt google Signin Widget
    //     try {
    //         await GoogleSignin.hasPlayServices({
    //             // Check if device has Google Play Services installed
    //             // Always resolves to true on iOS
    //             showPlayServicesUpdateDialog: true,
    //         });
    //         const userInfo = await GoogleSignin.signIn();
    //         console.log('User Info --> ', userInfo);
    //         setUserInfo(userInfo);
    //     } catch (error) {
    //         console.log('Message', JSON.stringify(error));
    //         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //             alert('User Cancelled the Login Flow');
    //         } else if (error.code === statusCodes.IN_PROGRESS) {
    //             alert('Signing In');
    //         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //             alert('Play Services Not Available or Outdated');
    //         } else {
    //             alert(error.message);
    //         }
    //     }
    // };


    // const _signOut = async () => {
    //     setGettingLoginStatus(true);
    //     // Remove user session from the device.
    //     try {
    //         await GoogleSignin.revokeAccess();
    //         await GoogleSignin.signOut();
    //         // Removing user Info
    //         setUserInfo(null);
    //     } catch (error) {
    //         console.error(error);
    //     }
    //     setGettingLoginStatus(false);
    // };



    const [error, setError] = React.useState('');
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

    const commonStyle = useStyles();
    // const { authStatus } = useSelector(state => state.user);
    let authStatus;
    const dispatch = useDispatch();

    // React.useEffect(() => {
    //     if (authStatus === 'login_failed') {
    //         setError('username or password is wrong');
    //     }
    // }, [authStatus, error]);

    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur',
    });



    const onSubmit = data => {
        startLoading();
        setError('');
        console.log('***********', data);

        // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        // const emailRegex =
        // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        // if (!emailRegex.test(data.email)) {
        //     setError('Invalid email format');
        //     return;
        // }

        // if (!passwordRegex.test(data.password)) {
        //   setError(
        //     'Password must contain 1 Capital,1 Number and Minimum 8 characters',
        //   );
        //   return;
        // }
        // dispatch(defaultLogin(data));
        const loginUser = async () => {
            startLoading();
            const response = await auth.post('user/login', data);
            console.log(response.data)
            // await AsyncStorage.setItem("role", JSON.stringify(response.data.role));
            // let role = await AsyncStorage.getItem('userRole');
            // role = JSON.stringify(role);
            const user = response.data.role;
            // console.log(user, role)
            await AsyncStorage.setItem("userId", JSON.stringify(response.data._id));
            // const id = await AsyncStorage.getItem("userId");
            if (user === 'Lawyer') {
                navigation.navigate('LawyerHome')
            }
            else {
                alert('Invalid Email or Password');
            }
        }
        loginUser();
        // const checkRole = getUserRole();
        // navigation.navigate('Home')


    };

    const getUserRole = async () => {

        const userRole = await AsyncStorage.getItem('userRole');
        let role1 = JSON.parse(userRole);
        const role = await AsyncStorage.getItem('role');
        // console.log(role);
        let role2 = JSON.parse(role);
        if ((role1 === role2) && (role1 === 'User')) {
            navigation.navigate('Home')
        }
        else if ((role1 === role2) && (role1 === 'Lawyer')) {
            navigation.navigate("LawyerHome")
        }
        alert('You cannot Login with a Different role')
    }

    const onErrors = err => {
        console.log(err);
        if (err.email) {
            setError(err.email.message);
            return;
        }
        if (err.password) {
            setError(err.password.message);
            return;
        }
    };

    return (
        // <WebView
        //     source={{
        //         uri: 'https://attornea.com/mobile-signin'
        //     }}
        // />
        <View style={{ alignItems: 'center', padding: 20 }}>
            <Controller
                control={control}
                rules={{ required: 'Username is required!' }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={commonStyle.input}
                        placeholderTextColor={'#AAAAAA'}
                        autoCapitalize="none"
                        autoCompleteType="email"
                        autoCorrect={false}
                        keyboardType="email-address"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        returnKeyType="next"
                        placeholder="Email"
                        value={value}
                    />
                )}
                name="email"
            />
            <Controller
                control={control}
                rules={{
                    required: 'Password is required!',

                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={commonStyle.input}
                        placeholderTextColor={'#AAAAAA'}
                        autoCapitalize="none"
                        autoCompleteType="password"
                        autoCorrect={false}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        returnKeyType="next"
                        placeholder="Password"
                        secureTextEntry
                        onSubmitEditing={handleSubmit(onSubmit, onErrors)}
                        value={value}
                    />
                )}
                name="password"
            />
            <Text
                style={
                    {
                        textAlign: 'center',
                        color: 'red',
                        fontWeight: '500',
                        fontSize: fontPixel(14),
                        marginTop: pixelSizeVertical(16),
                    }
                }>
                {error}
            </Text>


            <Pressable
                style={{
                    marginHorizontal: 20,
                    width: '100%',
                    height: heightPixel(63),
                    borderRadius: heightPixel(31),
                    marginTop: pixelSizeVertical(20),
                    ...Platform.select({
                        ios: {
                            shadowColor: 'rgba(0, 0, 0, 0.25)',
                            shadowOffset: {
                                width: 0,
                                height: 15,
                            },
                            shadowOpacity: 0.6,
                            shadowRadius: 5,
                        },
                        android: {
                            backgroundColor: '#EEEEEE',
                            elevation: 30,
                        },
                    }),
                }}
                onPress={handleSubmit(onSubmit, onErrors, startLoading)}>
                <LinearGradient
                    style={{
                        flex: 1,
                        width: '100%',
                        height: '100%',
                        borderRadius: heightPixel(31),
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    colors={['#29406C', '#49494B']}>
                    <Spinner visible={loading} textContent={'loading...'} />

                    <Text
                        style={
                            {
                                color: '#FFFFFF',
                                fontSize: fontPixel(20),
                                fontWeight: '500',
                                letterSpacing: 1,
                            }
                        }>
                        Login
                    </Text>
                </LinearGradient>

            </Pressable>
            {/* <View style={{
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexDirection: 'row',
                width: '65%'
            }}>
                <TouchableOpacity>
                    <IconFill name="facebook"
                        size={40}
                        color={'#4267B2'} />
                </TouchableOpacity>
                <GoogleSigninButton
                    style={{ width: 50, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Light}
                    onPress={_signIn}
                />



            </View> */}
        </View>
    );
};

export default Login;
