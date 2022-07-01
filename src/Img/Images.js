import * as ImagePicker from "expo-image-picker";
import { getApps, initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React from "react";
import {
    ActivityIndicator,
    Button,
    Image,
    Share,
    StatusBar,
    StyleSheet,
    Text,
    View,
    LogBox,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import uuid from "uuid";

const firebaseConfig = {

    apiKey: "AIzaSyBhHz0p_l1tYC-GmzfE8gDa3RQjiQLgqSc",

    authDomain: "kareydar-722d0.firebaseapp.com",

    databaseURL: "https://kareydar-722d0-default-rtdb.firebaseio.com",

    projectId: "kareydar-722d0",

    storageBucket: "kareydar-722d0.appspot.com",

    messagingSenderId: "1063037703109",

    appId: "1:1063037703109:web:7644fe840bb1904f6af1ac",

    measurementId: "G-MHRDX1HHMD"

};



// Editing this file with fast refresh will reinitialize the app on every refresh, let's not do that
if (!getApps().length) {
    initializeApp(firebaseConfig);
}

// Firebase sets some timeers for a long period, which will trigger some warnings. Let's turn that off for this example
LogBox.ignoreLogs([`Setting a timer for a long period`]);

export default class Images extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        image: null,
        uploading: false,
    };

    async componentDidMount() {
        if (Platform.OS !== "web") {
            const { status } =
                await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== "granted") {
                alert("Sorry, we need camera roll permissions to make this work!");
            }
        }
    }

    render() {
        let { image } = this.state;

        return (
            <View style={{ flex: 1, marginBottom: 150 }}>
                {!!image && (
                    <Text
                        style={{
                            fontSize: 20,
                            marginBottom: 20,
                            textAlign: "center",
                            marginHorizontal: 15,
                        }}
                    >
                        Uploaded
                    </Text>
                )}

                <Button
                    onPress={this._pickImage}
                    title="Pick an image from camera roll"
                />

                <Button onPress={this._takePhoto} title="Take a photo" />

                {this._maybeRenderImage()}
                {this._maybeRenderUploadingOverlay()}

                <StatusBar barStyle="default" />
            </View>
        );
    }

    _maybeRenderUploadingOverlay = () => {
        if (this.state.uploading) {
            return (
                <View
                    style={[
                        StyleSheet.absoluteFill,
                        {
                            backgroundColor: "rgba(0,0,0,0.4)",
                            alignItems: "center",
                            justifyContent: "center",
                        },
                    ]}
                >
                    <ActivityIndicator color="#fff" animating size="large" />
                </View>
            );
        }
    };

    _maybeRenderImage = () => {
        let { image } = this.state;
        if (!image) {
            return;
        }

        return (
            <View
                style={{
                    marginTop: 30,
                    width: 250,
                    borderRadius: 3,
                    elevation: 2,
                }}
            >
                {/* <View
          style={{
            borderTopRightRadius: 3,
            borderTopLeftRadius: 3,
            shadowColor: "rgba(0,0,0,1)",
            shadowOpacity: 0.2,
            shadowOffset: { width: 4, height: 4 },
            shadowRadius: 5,
            overflow: "hidden",
          }}
        >
          <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
        </View> */}
                <Text
                    onPress={this._copyToClipboard}
                    onLongPress={this._share}
                    style={{ paddingVertical: 10, paddingHorizontal: 10 }}
                >
                    {this.props.setImage(image)}
                </Text>
            </View>
        );
    };

    _share = () => {
        Share.share({
            message: this.state.image,
            title: "Check out this photo",
            url: this.state.image,
        });
    };

    _copyToClipboard = () => {
        Clipboard.setString(this.state.image);
        alert("Copied image URL to clipboard");
    };

    _takePhoto = async () => {
        let pickerResult = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        this._handleImagePicked(pickerResult);
    };

    _pickImage = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log({ pickerResult });
        // return pickerResult;
        this.setState({ image: pickerResult.uri });
        this._handleImagePicked(pickerResult);
    };

    _handleImagePicked = async (pickerResult) => {
        try {
            this.setState({ uploading: true });

            if (!pickerResult.cancelled) {
                const uploadUrl = await uploadImageAsync(pickerResult.uri);
                this.setState({ image: uploadUrl });
            }
        } catch (e) {
            console.log(e);
            alert("Upload failed, sorry :(");
        } finally {
            this.setState({ uploading: false });
        }
    };
}

async function uploadImageAsync(uri) {
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.onerror = function (e) {
            console.log(e);
            reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", uri, true);
        console.log("imageuri", uri);

        xhr.send(null);
    });

    const fileRef = ref(getStorage(), uuid.v4());
    const result = await uploadBytes(fileRef, blob);

    // We're done with the blob, close and release it
    blob.close();

    let finalUrl = await getDownloadURL(fileRef);
    console.log('final :', finalUrl);
    return finalUrl
}
