import React from 'react';
import { View, Text, Pressable, Platform, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PixelImage from '../common/PixelImage';
import {
    fontPixel,
    pixelSizeHorizontal,
    pixelSizeVertical,
    widthPixel,
} from '../../lib/style/adjust';
import { useStyles } from '../../lib/style/useStyle';

const MenuProfile = () => {
    const commonStyle = useStyles();

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
                colors={['#E36DF9', '#B029E7']}
                style={{
                    marginTop: pixelSizeVertical(15),
                    padding: pixelSizeHorizontal(20),
                }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text
                        style={[
                            commonStyle.rubik,
                            {
                                flex: 1,
                                color: '#FFFFFF',
                                fontSize: fontPixel(14),
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                            },
                        ]}>
                        Profile
                    </Text>
                    <Pressable>
                        <PixelImage
                            imageSource={require('../../assets/images/action/slope.png')}
                            imageWidth={14}
                        />
                    </Pressable>
                </View>
                <View
                    style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                    <Pressable
                        style={{
                            width: widthPixel(62),
                            height: widthPixel(62),
                            borderRadius: widthPixel(31),
                            borderWidth: 3,
                            borderColor: 'rgba(255, 255, 255, 0.25)',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <View
                            style={{
                                width: widthPixel(56),
                                height: widthPixel(56),
                                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                borderRadius: widthPixel(28),
                                ...Platform.select({
                                    ios: {
                                        shadowColor: 'rgba(0, 0, 0, 0.4)',
                                        shadowOffset: {
                                            width: 0,
                                            height: 25,
                                        },
                                        shadowOpacity: 0.9,
                                        shadowRadius: 10,
                                    },
                                    android: {
                                        elevation: 20,
                                    },
                                }),
                            }}>
                            <Image
                                style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                                source={require('../../assets/images/action/avatar.png')}
                            />
                        </View>
                    </Pressable>

                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text
                                style={[
                                    commonStyle.rubik,
                                    {
                                        flex: 1,
                                        color: '#FFFFFF',
                                        fontSize: fontPixel(14),
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                    },
                                ]}>
                                Ralph emerson
                            </Text>
                            <Pressable>
                                <PixelImage
                                    imageSource={require('../../assets/images/action/up.png')}
                                    imageWidth={14}
                                />
                            </Pressable>
                        </View>
                        <Text
                            style={[
                                commonStyle.rubik,
                                {
                                    flex: 1,
                                    color: '#FFFFFF',
                                    fontSize: fontPixel(12),
                                    fontWeight: 'bold',
                                    opacity: 0.75,
                                    letterSpacing: pixelSizeHorizontal(1),
                                },
                            ]}>
                            Premium Member
                        </Text>
                        <Text
                            style={[
                                commonStyle.rubik,
                                {
                                    flex: 1,
                                    color: '#FFFFFF',
                                    fontSize: fontPixel(12),
                                    fontWeight: 'bold',
                                    opacity: 0.75,
                                    letterSpacing: pixelSizeHorizontal(1),
                                },
                            ]}>
                            Last active 8h ago
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={[
                                commonStyle.rubik,
                                {
                                    flex: 1,
                                    color: '#FFFFFF',
                                    fontSize: fontPixel(12),
                                    fontWeight: 'bold',
                                    opacity: 0.75,
                                    letterSpacing: pixelSizeHorizontal(1),
                                },
                            ]}>
                            Activity
                        </Text>
                    </View>
                </View>
            </LinearGradient>
        </Pressable>
    );
};

export default MenuProfile;
