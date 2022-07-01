import React, { useState, useEffect, Image } from 'react';
import { View, Text, Pressable, ScrollView, Platform } from 'react-native';
import PixelImage from '../common/PixelImage';
import { fontPixel, heightPixel, widthPixel, pixelSizeHorizontal, pixelSizeVertical } from '../../lib/style/adjust';
import { useStyles } from '../../lib/style/useStyle';
// import Hormone from './Hormone';
// import MainChart from './MainChart';
import SpermChart from './SpermChart';
import auth from '../../lib/api/auth';


const DashboardScore = () => {

    const commonStyle = useStyles();
    const [blawgs, setBlawgs] = useState([]);


    const getBlawgs = async () => {
        const response = await auth.post('blawgs/viewBlawgs');
        setBlawgs(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        getBlawgs()
    }, []);
    return (
        <View
            style={{
                backgroundColor: '#29406C',
                marginTop: heightPixel(20),
                paddingVertical: heightPixel(16),
                paddingHorizontal: widthPixel(20),
                marginBottom: 60,
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
                        elevation: 5,
                    },
                }),
            }}>
            <View>
                <Text
                    style={
                        {
                            textAlign: 'center',
                            color: '#FFFFFF',
                            fontSize: fontPixel(22),
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                        }
                    }>
                    Blawgs
                </Text>
            </View>

            <View style={
                {
                    borderColor: 'white',
                    borderWidth: 2,
                    borderRadius: 10,
                    margin: 10,
                    height: '100%'
                }
            }>
                {blawgs.map((data, index) => {
                    <View key={index} style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <Image
                            source={{ uri: data?.imageUrl }}
                            style={{ width: 50, height: 50 }}
                        />

                        <View style={{
                            flex: 1,
                        }}>
                            <Text
                                style={

                                    {
                                        color: 'white',
                                        fontSize: fontPixel(11),
                                        fontWeight: '500',
                                        textTransform: 'uppercase',
                                        letterSpacing: pixelSizeHorizontal(2),
                                        position: 'absolute',
                                        left: 10,
                                        marginTop: 60
                                    }
                                }>
                                {data?.title}
                            </Text>
                        </View>
                    </View>

                })}
            </View>
        </View>
    );
};

export default DashboardScore;
