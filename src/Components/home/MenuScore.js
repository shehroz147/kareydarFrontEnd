import React from 'react';
import { Text, Pressable, Platform, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PixelImage from '../common/PixelImage';
import {
    fontPixel,
    heightPixel,
    pixelSizeHorizontal,
    pixelSizeVertical,
} from '../../lib/style/adjust';
import { useStyles } from '../../lib/style/useStyle';
import { useNavigation } from '@react-navigation/native';
const MenuScore = () => {
    const commonStyle = useStyles();
    const navigation = useNavigation();
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

    // const Shadow = ({ line }) => (
    // <Path
    //     key={'shadow'}
    //     y={15}
    //     d={line}
    //     fill={'none'}
    //     strokeWidth={4}
    //     stroke={'rgba(0, 0, 0, 0.15)'}
    // />
    // );

    return (
        <View
            style={{
                // borderRadius: 10,
                flex: 1,
                marginRight: 5,
                marginTop: pixelSizeVertical(15),
                height: heightPixel(170),
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
                        elevation: 20,
                        shadowOffset: {
                            width: 0,
                            height: 100,
                        },
                        shadowOpacity: 0.9,
                        shadowRadius: 20,
                    },
                }),
            }}>
            {/* <Pressable
                style={{
                    backgroundColor: 'rgba(68, 68, 68, 0.0001)',
                    ...Platform.select({
                        ios: {
                            shadowColor: 'rgba(0, 0, 0, 0.16)',
                            shadowOffset: { width: 0, height: 10 },
                            shadowOpacity: 1,
                            shadowRadius: 1,
                        },
                        android: {
                            elevation: 30,
                        },
                    }),
                }}> */}
            <LinearGradient
                colors={['#FFFFFF', '#FFFFFF']}
                style={{
                    padding: pixelSizeHorizontal(20),
                    justifyContent: 'space-between',
                    height: '100%',
                    borderColor: '#29406C',
                    borderWidth: 2,
                    borderRadius: 10
                }}>
                <Text
                    style={{
                        color: '#29406C',
                        fontSize: fontPixel(12),
                        // fontWeight: 'bold',
                        // textTransform: 'uppercase',
                        lineHeight: pixelSizeVertical(18),
                    }
                    }>
                    Ask questions and get answers from experts lawyers all over the world
                </Text>
                <Pressable
                    onPress={() => {
                        navigation.navigate('AskQuestion')
                    }}>
                    <Text style={{
                        backgroundColor: '#29406C',
                        color: '#FFFFFF',
                        textAlign: 'center',
                        borderRadius: 36,
                        padding: 8,
                        fontSize: 12,
                        paddingLeft: 8,
                    }}>
                        Post a Question
                    </Text>

                </Pressable>
            </LinearGradient>
            {/* </Pressable> */}
        </View>
    );
};

export default MenuScore;
