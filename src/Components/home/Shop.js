import React, { useState, useEffect, } from 'react';
import { View, Text, Pressable, ScrollView, Platform, Image } from 'react-native';
import PixelImage from '../../components/common/PixelImage';
import { fontPixel, heightPixel, widthPixel, pixelSizeHorizontal } from '../../lib/style/adjust';
import { useStyles } from '../../lib/style/useStyle';
// import Hormone from './Hormone';
// import MainChart from './MainChart';
// import SpermChart from './SpermChart';
// import { WebView } from 'react-native-webview';
import auth from '../../lib/api/auth';
const Shop = () => {
    const [lawyersData, setLawyersData] = useState([]);

    const getUserData = async () => {
        const response = await auth.post('user/viewLawyers');
        console.log(response.data);
        setLawyersData(response.data);

    }

    useEffect(() => {
        getUserData();
    }, []);


    const commonStyle = useStyles();

    return (

        <View
            style={{
                backgroundColor: '#29406C',
                marginTop: heightPixel(20),
                height: '100%',
                paddingVertical: heightPixel(16),
                paddingHorizontal: widthPixel(20),
                ...Platform.select({
                    ios: {
                        shadowColor: 'rgba(0, 0, 0, 0.2)',
                        shadowOffset: {
                            width: 0,
                            height: 100,
                        },
                        shadowOpacity: 0.57,
                        shadowRadius: 15.19,
                    },
                    android: {
                        elevation: 25,
                    },
                }),
            }}>

            <Text
                style={[
                    commonStyle.rubik,
                    {
                        textAlign: 'center',
                        color: '#FFFFFF',
                        fontSize: fontPixel(22),
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    },
                ]}>
                Lawyers
            </Text>

            <ScrollView vertical>
                {lawyersData.map((data, index) => (
                    <View key={index} style={{
                        // flex: 1,
                        // height: '100%'
                    }}>

                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <Image
                                style={{ width: '80%', height: '80%', borderRadius: 36 }}
                                source={{ uri: data.profileImage }}
                            />
                            <Text
                                style={[
                                    commonStyle.rubik,
                                    {
                                        color: '#FFFFFF',
                                        fontSize: fontPixel(18),
                                        fontWeight: '500',
                                        textTransform: 'uppercase',
                                        letterSpacing: pixelSizeHorizontal(2),
                                    },
                                ]}>
                                {data.firstName}
                            </Text>
                            <Text
                                style={[
                                    commonStyle.rubik,
                                    {
                                        color: '#FFFFFF',
                                        fontSize: fontPixel(18),
                                        fontWeight: '500',
                                        textTransform: 'uppercase',
                                        letterSpacing: pixelSizeHorizontal(2),
                                        bottom: 10,
                                    },
                                ]}>
                                {data.consultationFee}

                            </Text>
                        </View>
                    </View>
                ))}</ScrollView>
        </View>
    );
};

export default Shop;
