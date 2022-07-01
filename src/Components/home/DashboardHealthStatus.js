import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PixelImage from '../../Components/common/PixelImage';
import {
    fontPixel,
    heightPixel,
    pixelSizeHorizontal,
    widthPixel,
} from '../../lib/style/adjust';
import { useStyles } from '../../lib/style/useStyle';
// import GoalsPieChart from './GoalsPieChart';

const DashboardHealthStatus = () => {
    const commonStyle = useStyles();

    return (
        <View
            style={{
                backgroundColor: '#F2F2F2',
                marginTop: heightPixel(20),
                paddingVertical: heightPixel(25),
                paddingHorizontal: widthPixel(16),
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    <Text
                        style={[
                            commonStyle.rubik,
                            {
                                color: '#222222',
                                fontSize: fontPixel(22),
                                fontWeight: '500',
                                textTransform: 'uppercase',
                            },
                        ]}>
                        health stats
                    </Text>
                    <Text
                        style={[
                            commonStyle.rubik,
                            {
                                color: '#888888',
                                fontSize: fontPixel(12),
                                fontWeight: '500',
                            },
                        ]}>
                        Today, November 13, 2021
                    </Text>
                </View>
                <Pressable>
                    <PixelImage
                        imageSource={require('../../assets/images/action/dot.png')}
                        imageWidth={4}
                        secondStyle={{
                            tintColor: '#A01DE3',
                        }}
                    />
                </Pressable>
            </View>
            <View
                style={{
                    backgroundColor: '#FFFFFF',
                    padding: 20,
                    marginTop: 15,
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowOffset: {
                        width: 0,
                        height: 80,
                    },
                    shadowOpacity: 0.57,
                    shadowRadius: 15.19,

                    elevation: 25,
                }}>
                <Text
                    style={[
                        commonStyle.rubik,
                        {
                            color: '#888888',
                            fontSize: fontPixel(18),
                            fontWeight: '500',
                            marginBottom: 10,
                        },
                    ]}>
                    Completed Goals
                </Text>

                {/* <GoalsPieChart /> */}

                <LinearGradient
                    colors={['#E36DF9', '#B029E7']}
                    style={{
                        marginTop: heightPixel(14),
                        padding: 15,
                        borderRadius: 10,
                        flex: 1,
                    }}>
                    <Text
                        style={[
                            commonStyle.rubik,
                            {
                                color: '#FFFFFF',
                                fontSize: fontPixel(24),
                                fontWeight: '500',
                                textTransform: 'uppercase',
                            },
                        ]}>
                        Reach your goal
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text
                            style={[
                                commonStyle.rubik,
                                {
                                    color: '#FFFFFF',
                                    fontSize: fontPixel(16),
                                    fontWeight: '500',
                                    marginTop: 10,
                                    opacity: 0.75,
                                    flex: 1,
                                },
                            ]}>
                            Take HIIT Training
                        </Text>
                        <Pressable>
                            <PixelImage
                                imageSource={require('../../assets/images/action/slope.png')}
                                imageWidth={16}
                                secondStyle={{
                                    tintColor: 'white',
                                }}
                            />
                        </Pressable>
                    </View>
                </LinearGradient>
            </View>
            <View style={{ padding: 20, marginTop: 8 }}>
                <LinearGradient
                    colors={['#E36DF9', '#B029E7']}
                    style={{
                        padding: widthPixel(20),
                        flexDirection: 'row',
                        borderRadius: 10,
                        alignItems: 'center',
                    }}>
                    <View style={{ flex: 1 }}>
                        <Text
                            style={[
                                commonStyle.rubik,
                                {
                                    color: '#FFFFFF',
                                    fontSize: fontPixel(30),
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                    letterSpacing: pixelSizeHorizontal(0.5),
                                },
                            ]}>
                            436
                        </Text>
                        <Text
                            style={[
                                commonStyle.rubik,
                                {
                                    color: '#FFFFFF',
                                    fontSize: fontPixel(13),
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                    opacity: 0.75,
                                    letterSpacing: pixelSizeHorizontal(1),
                                },
                            ]}>
                            Calories Burned
                        </Text>
                    </View>
                    <PixelImage
                        imageSource={require('../../assets/images/action/calories.png')}
                        imageWidth={34}
                        secondStyle={{
                            tintColor: 'white',
                        }}
                    />
                </LinearGradient>
                <View style={{ flexDirection: 'row' }}>
                    <LinearGradient
                        colors={['#B72FE9', '#891DDF']}
                        style={{
                            marginTop: heightPixel(14),
                            padding: widthPixel(20),
                            flex: 1,
                            marginRight: 10,
                            borderRadius: 10,
                        }}>
                        <View style={{ flex: 1 }}>
                            <Text
                                style={[
                                    commonStyle.rubik,
                                    {
                                        color: '#FFFFFF',
                                        fontSize: fontPixel(30),
                                        fontWeight: '500',
                                        textTransform: 'uppercase',
                                        letterSpacing: pixelSizeHorizontal(0.5),
                                    },
                                ]}>
                                2122
                            </Text>
                            <Text
                                style={[
                                    commonStyle.rubik,
                                    {
                                        color: '#FFFFFF',
                                        fontSize: fontPixel(13),
                                        fontWeight: '500',
                                        textTransform: 'uppercase',
                                        opacity: 0.75,
                                        letterSpacing: pixelSizeHorizontal(1),
                                    },
                                ]}>
                                Steps
                            </Text>
                        </View>
                    </LinearGradient>
                    <LinearGradient
                        colors={['#C33EED', '#921DE0']}
                        style={{
                            marginTop: heightPixel(14),
                            padding: widthPixel(20),
                            flex: 1,
                            borderRadius: 10,
                        }}>
                        <View style={{ flex: 1 }}>
                            <Text
                                style={[
                                    commonStyle.rubik,
                                    {
                                        color: '#FFFFFF',
                                        fontSize: fontPixel(30),
                                        fontWeight: '500',
                                        textTransform: 'uppercase',
                                        letterSpacing: pixelSizeHorizontal(0.5),
                                    },
                                ]}>
                                122
                            </Text>
                            <Text
                                style={[
                                    commonStyle.rubik,
                                    {
                                        color: '#FFFFFF',
                                        fontSize: fontPixel(13),
                                        fontWeight: '500',
                                        textTransform: 'uppercase',
                                        opacity: 0.75,
                                        letterSpacing: pixelSizeHorizontal(1),
                                    },
                                ]}>
                                Exercise (min)
                            </Text>
                        </View>
                    </LinearGradient>
                </View>
                <LinearGradient
                    colors={['#971DE1', '#3821D5']}
                    style={{
                        marginTop: heightPixel(14),
                        padding: widthPixel(20),
                        flexDirection: 'row',
                        borderRadius: 10,
                        alignItems: 'center',
                    }}>
                    <View style={{ flex: 1 }}>
                        <Text
                            style={[
                                commonStyle.rubik,
                                {
                                    color: '#FFFFFF',
                                    fontSize: fontPixel(30),
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                    letterSpacing: pixelSizeHorizontal(0.5),
                                },
                            ]}>
                            125
                        </Text>
                        <Text
                            style={[
                                commonStyle.rubik,
                                {
                                    color: '#FFFFFF',
                                    fontSize: fontPixel(13),
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                    opacity: 0.75,
                                    letterSpacing: pixelSizeHorizontal(1),
                                },
                            ]}>
                            Weight (lbs)
                        </Text>
                    </View>
                    <PixelImage
                        imageSource={require('../../assets/images/action/weight.png')}
                        imageWidth={34}
                        secondStyle={{
                            tintColor: 'white',
                        }}
                    />
                </LinearGradient>
            </View>
        </View>
    );
};

export default DashboardHealthStatus;
