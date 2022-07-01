import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { useStyles } from '../../lib/style/useStyle';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PixelImage from '../common/PixelImage';
import { pixelSizeVertical, pixelSizeHorizontal, fontPixel, heightPixel, widthPixel } from '../../lib/style/adjust';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const GetStarted = ({ nextPage }) => {
    const commonStyle = useStyles();
    const insets = useSafeAreaInsets();

    const navigation = useNavigation();
    return (
        <View
            style={{
                paddingTop: 0,
                paddingBottom: 0,
                flex: 1,
                backgroundColor: '#FFFFFF',
            }}>
            <View style={{
                justifyContent: 'center',
                alignSelf: 'center',
                top: '10%'
            }}>
                <Text style={{
                    color: '#29406C',
                    fontSize: 25,
                    fontWeight: '800'
                }}>
                    Welcome To
                </Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: pixelSizeVertical(100) }}>
                <PixelImage
                    imageSource={require('../../../assets/attornea.png')}
                    imageWidth={250}
                />
            </View>
            <View
                style={{
                    flex: 1,
                    width: '70%',
                    alignItems: 'center',
                    alignSelf: 'center'
                }}>
                <Text
                    style={

                        {
                            color: '#29406C',
                            fontWeight: '800',
                            letterSpacing: pixelSizeHorizontal(2),
                            fontSize: fontPixel(26),
                            textTransform: 'uppercase',
                            textAlign: 'center',
                        }
                    }>
                    Only Place to Find a Lawyer in Pakistan
                </Text>
                <Pressable
                    style={{
                        flexDirection: 'row',
                        backgroundColor: '#ecc40c',
                        borderColor: 'rgba(242, 242, 242, 0.5)',
                        borderWidth: 2,
                        width: widthPixel(208),
                        height: heightPixel(52),
                        borderRadius: heightPixel(26),
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: heightPixel(50),
                    }}
                    onPress={() => { navigation.navigate('OnBoarding') }} >
                    <Text
                        style={{
                            color: '#29406C',
                            fontWeight: '800',
                            fontSize: fontPixel(20),
                            textAlign: 'center',
                            letterSpacing: 2
                        }
                        }>
                        START
                    </Text>
                </Pressable>
            </View>


        </View>
    );
};

export default GetStarted;
