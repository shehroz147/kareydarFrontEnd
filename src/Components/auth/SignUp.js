import React, { useState } from "react";
import { Text, View, TextInput, Pressable, Platform } from "react-native";
// import CheckBox from '@react-native-community/checkbox';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from "../../lib/style/adjust";
import { useStyles } from "../../lib/style/useStyle";
import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
// import {AccessToken, Settings, LoginManager} from 'react-native-fbsdk-next';
import auth from "../../lib/api/auth";
import PixelImage from "../common/PixelImage";

import api from "../../lib/api/auth";

// import SelectDropdown from 'react-native-select-dropdown'

const SignUp = () => {
  const countries = ["User", "Lawyer", "Student"];
  const [error, setError] = React.useState("");
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);
  const [role, setRole] = useState("");
  const commonStyle = useStyles();
  // const { authStatus } = useSelector(state => state.user);
  let authStatus;
  const navigation = useNavigation();

  React.useEffect(() => {
    if (authStatus === "register_failed") {
      setError("register failed!");
    }
  }, [authStatus]);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      role: "Lawyer",
      firstName: "",
      lastName: "",
      password: "",
      email: "",
    },
    // mode: 'onBlur',
  });
  const onSubmit = async (data) => {
    setError("");
    // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // if (!passwordRegex.test(data.password)) {
    //   setError(
    //     "Password must contain 1 Capital,1 Number and Minimum 8 characters"
    //   );
    //   return;
    // }
    // if (data.password !== data.confirmPassword) {
    //     setError('Passwords must match');
    //     return;
    // }

    if (!emailRegex.test(data.email)) {
      setError("Invalid email format");
      return;
    }

   

    // const data = {
    //     role: role,
    //     firstName: data.firstName,
    //     lastName: data.lastName,
    //     email: data.email,
    //     password: data.password,
    // };
    // console.log(data)
    const response = await auth.post("/user/register", data);
    console.log(response);
    // const signUpUser = async () => {
    // console.log(auth);

    // }
    navigation.navigate("Auth");
  };
  const onErrors = (err) => {
    console.log(err);
    if (err.name) {
      setError(err.name.message);
      return;
    }
    if (err.password) {
      setError(err.password.message);
      return;
    }
    if (err.confirmPassword) {
      setError(err.confirmPassword.message);
      return;
    }
    if (err.email) {
      setError(err.email.message);
      return;
    }
  };

  const displayIcon = () => {
    return (
      <PixelImage
        imageSource={require("../../../assets/dropdown.png")}
        imageWidth={20}
        secondStyle={{
          marginRight: widthPixel(20),
        }}
      />
    );
  };

  return (
    <View
      style={{
        alignItems: "center",
        width: "90%",
        alignSelf: "center",
        height: "80%",
      }}
    >
      {/* <SelectDropdown
                data={countries}
                onSelect={(selectedItem, index) => {
                    setRole(selectedItem)
                }}
                buttonStyle={{
                    margin: 10,
                    borderRadius: 36,
                }}
                dropdownStyle={{

                }}
                defaultButtonText={'Role'}
                renderDropdownIcon={displayIcon}
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
            /> */}

      <Controller
        control={control}
        rules={{ required: "Full Name can not be blank" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={commonStyle.input}
            placeholderTextColor={"#AAAAAA"}
            autoCapitalize="none"
            autoCorrect={false}
            onBlur={onBlur}
            onChangeText={onChange}
            returnKeyType="next"
            placeholder="First Name"
            value={value}
          />
        )}
        name="firstName"
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={commonStyle.input}
            placeholderTextColor={"#AAAAAA"}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={onChange}
            returnKeyType="next"
            placeholder="Last Name"
            // secureTextEntry
            value={value}
          />
        )}
        name="lastName"
      />

      <Controller
        control={control}
        rules={{ required: "Email is required!" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={commonStyle.input}
            placeholderTextColor={"#AAAAAA"}
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
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={commonStyle.input}
            placeholderTextColor={"#AAAAAA"}
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            onBlur={onBlur}
            onChangeText={onChange}
            returnKeyType="next"
            placeholder="Password"
            secureTextEntry
            onSubmitEditing={handleSubmit(onSubmit)}
            value={value}
          />
        )}
        name="password"
      />

      <Text
        style={{
          textAlign: "center",
          color: "red",
          fontWeight: "500",
          fontSize: fontPixel(14),
          marginTop: pixelSizeVertical(16),
        }}
      >
        {error}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* <CheckBox
                    value={toggleCheckBox}
                    tintColor={'gray'}
                    onCheckColor={'#941DE1'}
                    lineWidth={1}
                    style={{
                        width: widthPixel(25),
                        height: widthPixel(25),
                        marginHorizontal: pixelSizeHorizontal(10),
                    }}
                    onValueChange={newValue => setToggleCheckBox(newValue)}
                /> */}
        <Text
          style={{
            flex: 1,
            color: "#222222",
            fontWeight: "500",
            fontSize: fontPixel(13),
            letterSpacing: pixelSizeHorizontal(1),
          }}
        >
          Agree to our &nbsp;
          <Text
            style={{
              flex: 1,
              color: "#941DE1",
              fontWeight: "500",
              fontSize: fontPixel(13),
              letterSpacing: pixelSizeHorizontal(1),
              textDecorationLine: "underline",
              textDecorationStyle: "solid",
            }}
          >
            Terms & Conditions
          </Text>
        </Text>
      </View>

      <Pressable
        style={{
          marginHorizontal: 20,
          width: "50%",
          height: heightPixel(50),
          borderRadius: heightPixel(31),
          marginTop: pixelSizeVertical(20),
          ...Platform.select({
            ios: {
              shadowColor: "rgba(0, 0, 0, 0.25)",
              shadowOffset: {
                width: 0,
                height: 15,
              },
              shadowOpacity: 0.6,
              shadowRadius: 5,
            },
            android: {
              backgroundColor: "#EEEEEE",
              elevation: 30,
            },
          }),
        }}
        onPress={handleSubmit(onSubmit)}
      >
        <LinearGradient
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            borderRadius: heightPixel(31),
            alignItems: "center",
            justifyContent: "center",
          }}
          colors={["#29406C", "#49494B"]}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: fontPixel(14),
              fontWeight: "500",
              letterSpacing: 1,
            }}
          >
            Sign Up
          </Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
};

export default SignUp;
