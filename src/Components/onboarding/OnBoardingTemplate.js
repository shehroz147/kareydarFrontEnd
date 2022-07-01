import React from 'react';
import { View, Text, Pressable, Platform } from 'react-native';
import DotStepper from '../common/DotStepper';
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/native';
import {
    fontPixel,
    heightPixel,
    pixelSizeHorizontal,
    pixelSizeVertical,
    widthPixel,
} from '../../lib/style/adjust';
import { useStyles } from '../../lib/style/useStyle';
import PixelImage from '../common/PixelImage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const OnBoardingTemplate = ({ item, prePage, nextPage }) => {
    const pagerList = [
        {
            index: 1,
            width: 235,
            imageSource: require('../../../assets/attornea.png'),
            text1: 'Ask a question!',
            text2:
                'Get your legal queries answered from multiple lawyers. Help yourself in making informed and rational decisions',
        },
        {
            index: 2,
            width: 326,
            imageSource: require('../../../assets/attornea.png'),
            text1: 'Talk to a Lawyer',
            text2:
                'Need legal opinion from best lawyers? Attornea connects you with best lawyers in town on a single click. Get your appointment',
        },
        {
            width: 301,
            index: 3,
            imageSource: require('../../../assets/attornea.png'),
            text1: 'Hire a Lawyer',
            text2:
                'Get rid of traditional hassle to hire a lawyer. Signup on Attornea and hire lawyers categorized by speciality and case type on single click',
        },
    ];



    const navigation = useNavigation();
    const commonStyle = useStyles();
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{
                paddingTop: 0,
                paddingBottom: 0,
                flex: 1,
                backgroundColor: '#FFFFFF',
            }}>


            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ alignItems: 'center' }}>
                    <PixelImage
                        imageSource={pagerList.imageSource}
                        imageWidth={pagerList.width}
                        secondStyle={{ marginVertical: pixelSizeVertical(20) }}
                    />
                    <PixelImage
                        imageSource={require('../../../assets/profile.png')}
                        imageWidth={300}
                        secondStyle={{ marginVertical: pixelSizeVertical(-120) }}
                    />
                    <Text
                        style={
                            {
                                top: '10%',
                                color: '#29406C',
                                letterSpacing: pixelSizeHorizontal(1),
                                fontSize: fontPixel(20),
                                fontWeight: '800',
                                textAlign: 'center',
                                paddingHorizontal: pixelSizeHorizontal(10),
                            }
                        }>
                        {pagerList.text1}
                    </Text>
                    <Text
                        style={
                            {
                                color: '#29406C',
                                letterSpacing: pixelSizeHorizontal(1),
                                fontSize: fontPixel(20),
                                fontWeight: '600',
                                textAlign: 'center',
                                marginTop: pixelSizeVertical(80),
                                paddingHorizontal: pixelSizeHorizontal(55),
                            }
                        }>
                        {pagerList.text2}
                    </Text>
                </View>
                <View style={{ alignItems: 'center', marginBottom: insets.bottom + 60 }}>
                    {pagerList.index === 1 ? (
                        <Pressable
                            style={{
                                width: widthPixel(313),
                                height: heightPixel(54),
                                borderRadius: heightPixel(27),
                                marginBottom: pixelSizeVertical(26),
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
                            onPress={() => nextPage()}>
                            <Text
                                style={
                                    {
                                        textAlign: 'center',
                                        justifyContent: 'center',
                                        padding: 10,
                                        color: '#29406C',
                                        fontSize: fontPixel(22),
                                        fontWeight: '500',
                                    }
                                }>
                                Next
                            </Text>
                        </Pressable>
                    ) : (
                        <View
                            style={{
                                flexDirection: 'row',
                                marginBottom: pixelSizeVertical(26),
                            }}>
                            <Pressable
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    borderColor: '#A01DE3',
                                    width: widthPixel(150),
                                    height: heightPixel(54),
                                    borderRadius: heightPixel(27),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: 10,
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
                                            elevation: 15,
                                        },
                                    }),
                                }}
                                onPress={() => prePage()}>
                                <Text
                                    style={
                                        {
                                            color: '#000000',
                                            fontSize: fontPixel(20),
                                            fontWeight: '500',
                                        }
                                    }>
                                    Back
                                </Text>
                            </Pressable>
                            <Pressable
                                style={{
                                    width: widthPixel(150),
                                    height: heightPixel(54),
                                    borderRadius: heightPixel(27),
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
                                            elevation: 15,
                                        },
                                    }),
                                }}
                                onPress={() => {
                                    if (item.index === 3) {
                                        navigation.push('Auth');
                                    } else {
                                        nextPage();
                                    }
                                }}>
                                <Text
                                    style={
                                        {
                                            textAlign: 'center',
                                            padding: 15,
                                            color: '#000000',
                                            fontSize: fontPixel(20),
                                            fontWeight: '500',
                                        }
                                    }>
                                    Next
                                </Text>
                            </Pressable>
                        </View>
                    )}
                    <DotStepper position={item.index} />
                </View>
            </View>
        </View>
    );
};

export default OnBoardingTemplate;
