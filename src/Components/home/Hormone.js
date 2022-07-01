import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import {
    fontPixel,
    heightPixel,
    pixelSizeHorizontal,
    widthPixel,
} from '../../lib/style/adjust';
import { useStyles } from '../../lib/style/useStyle';
import auth from '../../lib/api/auth';
import { ScrollView } from 'react-native-gesture-handler';
const Hormone = () => {
    const [lawyersData, setLawyersData] = useState([]);

    const getUserData = async () => {
        const response = await auth.post('user/viewAllLawyers');
        console.log(response.data);
        setLawyersData(response.data);

    }

    useEffect(() => {
        getUserData();
    }, []);




    const commonStyle = useStyles();
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
        <ScrollView>
            <View
                style={{
                    width: '100%',
                    height: heightPixel(350),
                    borderRadius: 10,
                }}>
                {/* <ScrollView> */}
                {lawyersData.map((data, index) => (
                    <View key={index} style={{
                        // width: '100%'
                    }}>
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={{ uri: data?.profileImage }}
                        />
                        <Text
                            style={[
                                commonStyle.rubik,
                                {
                                    color: '#000000',
                                    fontSize: fontPixel(11),
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                    letterSpacing: pixelSizeHorizontal(2),
                                    position: 'absolute',
                                    left: 70,
                                    bottom: 30,
                                },
                            ]}>
                            {data.firstName}
                        </Text>
                        <Text
                            style={[
                                commonStyle.rubik,
                                {
                                    color: '#000000',
                                    fontSize: fontPixel(11),
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                    letterSpacing: pixelSizeHorizontal(2),
                                    position: 'absolute',
                                    left: 60,
                                    bottom: 10,
                                },
                            ]}>
                            50000 Rs
                        </Text>
                    </View>
                ))}
                {/* </ScrollView> */}
            </View>
        </ScrollView>
    );
};

export default Hormone;
