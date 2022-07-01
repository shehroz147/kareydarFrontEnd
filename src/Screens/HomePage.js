// /* import * as React from 'react'; */
// import React, { useState, useEffect, useRef } from 'react';
// import { Text, View, StyleSheet, BackHandler } from 'react-native';
// import { WebView } from 'react-native-webview';
// // import { Came }
// // import {Camera}
// // import Cam


// // const [url, setUrl] = useState(props.route.params.url);

// // const handleWebViewNavigationStateChange = (url: string = '') => {
// //     if (
// //         (url && url.includes(PORTAL_DASHBOARD_URL)) ||
// //         url === PORTAL_DASHBOARD_URL
// //     ) {
// //         setUrl(LOGOUT_URL); //ToDo: Remove if not needed
// //         navigation.navigate('VirtualVisit');
// //     }
// //     if (url.includes(PORTAL_VIDEO_URL)) {
// //         setUrl(url);
// //     }
// // };








// // import { ActivityIndicator } from 'react-native';

// // export default function Call() {


// //     const [hasPermission, setHasPermission] = useState(null);
// //     const [type, setType] = useState(Camera.Constants.Type.back);
// //     const webViewRef = useRef(null)
// //     const Spinner = () => (
// //         <View style={styles.activityContainer}>
// //             <ActivityIndicator size="large" color="#f29900" />
// //         </View>
// //     );

// //     useEffect(() => {
// //         (async () => {
// //             const { status } = await Camera.requestCameraPermissionsAsync();
// //             setHasPermission(status === 'granted');
// //         })();
// //     }, []);
// //     useEffect(() => {
// //         const backAction = () => {
// //             webViewRef.current.goBack();
// //             return true;
// //         };

// //         const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

// //         return () => backHandler.remove();
// //     }, []);


// //     if (hasPermission === null) {
// //         return <View />;
// //     }
// //     if (hasPermission === false) {
// //         return <Text>No access to camera</Text>;
// //     }

// //     return (
//         // <View style={styles.container}>
//         //     <WebView
//         //         source={{ uri: 'https://example-2244-dev.twil.io/conference.html' }}
//         //         ref={webViewRef}
//         //         style={styles.view}
//         //         originWhitelist={['*']}
//         //         allowsInlineMediaPlayback
//         //         javaScriptEnabled
//         //         scalesPageToFit
//         //         mediaPlaybackRequiresUserAction={false}
//         //         javaScriptEnabledAndroid
//         //         useWebkit
//         //         startInLoadingState={true}
//         //         renderLoading={Spinner}
//         //     />
//         // </View>




//         // <WebView
//         //     ref={webViewRef}
//         //     source={{ uri: 'https://example-2244-dev.twil.io/conference.html' }}
//         //     javaScriptEnabled={true}
//         //     onLoadEnd={(syntheticEvent: WebViewEvent) => {
//         //         const { nativeEvent } = syntheticEvent;
//         //         if (url.includes(CUSTOM_URL)) {
//         //             if (nativeEvent.loading == false && reloadCount <= 1) {
//         //                 webViewRef.current?.reload();
//         //                 setCount(reloadCount + 1);
//         //             }
//         //         }
//         //         setLoaded(!nativeEvent.loading);
//         //     }}
//         //     onNavigationStateChange={(navigationState: WebViewNavigation) => {
//         //         handleWebViewNavigationStateChange(navigationState?.url);
//         //     }}
//         //     onLoadProgress={(event: WebViewEvent) =>
//         //         handleWebViewNavigationStateChange(event?.nativeEvent?.url)
//         //     }
//         //     allowsInlineMediaPlayback={true}
//         //     mediaPlaybackRequiresUserAction={false}
//         //     originWhitelist={['*']}
//         //     userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
//         //     onError={(e) => console.log('error: ', e)}
//         // />

//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#1c4154',
//         paddingTop: 20
//     },
//     activityContainer: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         backgroundColor: '#fff',
//         height: '100%',
//         width: '100%'
//     },
//     view: {
//         borderColor: 'red',

//     }
// });