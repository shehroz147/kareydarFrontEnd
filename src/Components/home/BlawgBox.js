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
const BlawgBox = () => {
    const commonStyle = useStyles();
    const navigation = useNavigation();
    return (
        <View
            style={{
                flex: 1,
                marginLeft: 5,
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
                        elevation: 10,
                    },
                }),
            }}>

            <LinearGradient
                colors={['#FFFFFF', '#FFFFFF']}
                style={{
                    padding: pixelSizeHorizontal(20),
                    justifyContent: 'space-between',
                    height: heightPixel(170),
                    borderColor: '#29406C',
                    borderWidth: 2,
                    borderRadius: 10
                }}>
                <View style={{ justifyContent: 'flex-start', flex: 1 }}>
                    <Text
                        style={
                            {
                                color: '#29406C',
                                fontSize: fontPixel(16),
                            }
                        }>
                        Add B-Lawgs
                    </Text>


                </View>
                <Pressable
                    onPress={() => {
                        navigation.navigate('AddBlawgs')
                    }}>
                    <Text
                        style={{
                            backgroundColor: '#29406C',
                            borderRadius: 36,
                            color: '#FFFFFF',
                            textAlign: 'center',
                            padding: 8,
                            fontSize: 12
                        }
                        }>
                        B-Lawgs
                    </Text>

                </Pressable>
            </LinearGradient>
        </View>
    );
};

export default BlawgBox;
