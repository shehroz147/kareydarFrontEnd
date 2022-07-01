import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Platform, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
    fontPixel,
    heightPixel,
    pixelSizeVertical,
    widthPixel,
} from '../../lib/style/adjust';
import { useStyles } from '../../lib/style/useStyle';
import PixelImage from '../common/PixelImage';

const PlanCard = ({ item }) => {
    const commonStyle = useStyles();
    const navigation = useNavigation();

    let itemImageWidth = 33;
    if (item.type === 'Ultra') {
        itemImageWidth = 40;
    }
    if (item.type === 'Personal') {
        itemImageWidth = 21;
    }
    return (
        <View style={{ alignItems: 'center' }}>
            <View
                style={{
                    backgroundColor: '#F4F4F4',
                    alignItems: 'center',
                    width: widthPixel(337),
                    marginBottom: 20,
                    ...Platform.select({
                        ios: {
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowOffset: { width: 0, height: 20 },
                            shadowOpacity: 0.9,
                            shadowRadius: 5,
                        },
                        android: {
                            elevation: 15,
                        },
                    }),
                }}>
                <View
                    style={{
                        backgroundColor: 'blue',
                        alignSelf: 'flex-end',
                        transform: [{ rotate: '45deg' }],
                        top: '5%',
                        left: '10%',
                        width: '45%',
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',

                        ...Platform.select({
                            ios: {
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 7,
                                },
                                shadowOpacity: 0.41,
                                shadowRadius: 9.11,
                            },
                            android: {
                                elevation: 14,
                            },
                        }),
                    }}>
                    <LinearGradient
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1.2 }}
                        colors={['#F180FE', '#A01DE3', '#2B23D4']}>
                        <Text
                            style={[
                                commonStyle.rubik,
                                {
                                    fontSize: fontPixel(9),
                                    fontWeight: 'bold',
                                    letterSpacing: 2,
                                    color: '#FFFFFF',
                                    opacity: 0.5,
                                    textTransform: 'uppercase',
                                },
                            ]}>
                            Best offer
                        </Text>
                    </LinearGradient>
                </View>
                <LinearGradient
                    colors={['#F180FE', '#A01DE3', '#2B23D4']}
                    style={{
                        marginTop: heightPixel(45),
                        width: widthPixel(82),
                        height: widthPixel(82),
                        borderRadius: widthPixel(41),
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1.2 }}>
                    <PixelImage imageSource={item.image} imageWidth={itemImageWidth} />
                </LinearGradient>
                <Text
                    style={[
                        commonStyle.rubik,
                        {
                            fontSize: fontPixel(33),
                            letterSpacing: -1,
                            color: '#222222',
                            marginTop: heightPixel(25),
                        },
                    ]}>
                    {item.type}
                </Text>
                <Text
                    style={[
                        commonStyle.rubik,
                        {
                            fontSize: fontPixel(14),
                            fontWeight: 'bold',
                            letterSpacing: 2,
                            color: '#222222',
                            opacity: 0.5,
                            textTransform: 'uppercase',
                        },
                    ]}>
                    {item.price}
                </Text>
                <View
                    style={{
                        backgroundColor: 'rgba(204, 204, 204, 0.2)',
                        width: widthPixel(284),
                        height: heightPixel(53),
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: heightPixel(20),
                    }}>
                    <Text
                        style={[
                            commonStyle.rubik,
                            {
                                fontSize: fontPixel(14),
                                fontWeight: '500',
                                letterSpacing: 1,
                                color: '#222222',
                            },
                        ]}>
                        {item.testCount}
                    </Text>
                </View>
                <Text
                    style={[
                        commonStyle.rubik,
                        {
                            fontSize: fontPixel(14),
                            fontWeight: '500',
                            letterSpacing: 2,
                            color: '#222222',
                            opacity: 0.5,
                            textTransform: 'uppercase',
                            marginTop: heightPixel(20),
                        },
                    ]}>
                    {item.capacity}
                </Text>
                <View
                    style={{
                        backgroundColor: 'rgba(204, 204, 204, 0.2)',
                        width: widthPixel(284),
                        height: heightPixel(53),
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: heightPixel(20),
                    }}>
                    <Text
                        style={[
                            commonStyle.rubik,
                            {
                                fontSize: fontPixel(14),
                                fontWeight: '500',
                                letterSpacing: 1,
                                color: '#222222',
                            },
                        ]}>
                        {item.usersCount}
                    </Text>
                </View>
                <Text
                    style={[
                        commonStyle.rubik,
                        {
                            fontSize: fontPixel(14),
                            fontWeight: '500',
                            letterSpacing: 2,
                            color: '#222222',
                            opacity: 0.5,
                            textTransform: 'capitalize',
                            marginTop: heightPixel(20),
                        },
                    ]}>
                    {item.limit}
                </Text>
                <Pressable
                    style={{
                        width: widthPixel(313),
                        height: heightPixel(65),
                        borderRadius: heightPixel(32),
                        marginVertical: pixelSizeVertical(35),
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
                    onPress={() => navigation.push('Primium')}>
                    <LinearGradient
                        style={{
                            width: widthPixel(313),
                            height: heightPixel(65),
                            borderRadius: heightPixel(32),
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        colors={['#F180FE', '#A01DE3', '#2B23D4']}>
                        <Text
                            style={[
                                commonStyle.rubik,
                                {
                                    color: '#FFFFFF',
                                    fontSize: fontPixel(14),
                                    fontWeight: '500',
                                },
                            ]}>
                            Get Started
                        </Text>
                    </LinearGradient>
                </Pressable>
            </View>
        </View>
    );
};

export default PlanCard;
