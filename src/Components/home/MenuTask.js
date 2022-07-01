import React from 'react';
import { View, Text, Pressable, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PixelImage from '../common/PixelImage';
import {
    fontPixel,
    heightPixel,
    pixelSizeHorizontal,
    pixelSizeVertical,
    widthPixel,
} from '../../lib/style/adjust';
import { useStyles } from '../../lib/style/useStyle';
import Task from './Task';

const MenuTask = (navigation) => {
    const commonStyle = useStyles();

    const DATA = [
        {
            id: '1',
            avatar: require('../../../assets/familylaw.png'),
            name: 'Family Law ',
            time: 'Monday nov. 12, 2021 at 10:00 am',
        },
        {
            id: '2',
            avatar: require('../../../assets/familylaw.png'),
            name: 'Family Law ',
            time: 'Monday nov. 12, 2021 at 10:00 am',
        },

        {
            id: '1',
            avatar: require('../../../assets/familylaw.png'),
            name: 'Family Law ',
            time: 'Monday nov. 12, 2021 at 10:00 am',
        },
        {
            id: '2',
            avatar: require('../../../assets/familylaw.png'),
            name: 'Family Law ',
            time: 'Monday nov. 12, 2021 at 10:00 am',
        },

    ];

    return (
        <Pressable
            style={{
                background: '#444444',
                ...Platform.select({
                    ios: {
                        shadowColor: 'rgba(0, 0, 0, 0.2)',
                        shadowOffset: {
                            width: 0,
                            height: 100,
                        },
                        shadowOpacity: 0.9,
                        shadowRadius: 20,
                    },
                    android: {
                        elevation: 50,
                    },
                }),
            }}>
            <LinearGradient
                colors={['#FFFFFF', '#FFFFFF',]}
                style={{
                    marginTop: pixelSizeVertical(15),
                    padding: pixelSizeHorizontal(20),
                }}>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <Text
                        style={
                            {
                                textAlign: 'center',
                                flex: 1,
                                color: '#29406C',
                                fontSize: fontPixel(20),
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                letterSpacing: pixelSizeHorizontal(1),
                            }
                        }>
                        Find Specialist of Each Field
                    </Text>

                </View>
                {DATA.map((item, index) => (
                    <View key={index}>
                        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginLeft: '10%' }}>
                            <View style={{ flexDirection: 'column', width: '50%' }}>
                                <Pressable
                                >
                                    <PixelImage imageSource={item.avatar} imageWidth={75} />
                                </Pressable>
                                <Text
                                    style={
                                        {
                                            color: '#29406C',
                                            fontSize: fontPixel(14),
                                            fontWeight: 'bold',
                                            letterSpacing: pixelSizeHorizontal(1),
                                        }
                                    }>
                                    {item.name}
                                </Text>
                            </View>
                            <View style={{ width: '50%', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Pressable>
                                    <PixelImage imageSource={item.avatar} imageWidth={75} />
                                </Pressable>
                                <Text
                                    style={
                                        {
                                            color: '#29406C',
                                            fontSize: fontPixel(14),
                                            fontWeight: 'bold',
                                            letterSpacing: pixelSizeHorizontal(1),
                                        }
                                    }>
                                    {item.name}
                                </Text>
                            </View>
                            <View
                                style={{
                                    width: widthPixel(263),
                                    height: heightPixel(3),
                                    alignSelf: 'flex-end',
                                    marginVertical: heightPixel(20),
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                }}
                            />
                        </View>
                    </View>
                ))}
            </LinearGradient>
        </Pressable>
    );
};

export default MenuTask;
