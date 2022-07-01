import React, { useState, useEffect, Image } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
    fontPixel,
    heightPixel,
    pixelSizeHorizontal,
    widthPixel,
} from '../../lib/style/adjust';
import PixelImage from '../common/PixelImage';
import { useStyles } from '../../lib/style/useStyle';
// import { Path } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import auth from '../../lib/api/auth';


const SpermChart = () => {
    const [blawgs, setBlawgs] = useState([]);


    const getBlawgs = async () => {
        const response = await auth.post('blawgs/viewBlawgs');
        setBlawgs(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        getBlawgs()
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
        <View style={
            {
                borderColor: 'white',
                borderWidth: 2,
                borderRadius: 10,
                margin: 10,
            }
        }>

            {blawgs.map((data) => {
                <View>
                    <View style={{ flex: 1 }}>
                        <Image
                            source={{ uri: blawgs?.imageUrl }}
                            style={{ width: 120, height: 120 }}
                        />

                    </View>
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
                            {blawgs?.title}
                        </Text>
                    </View>
                </View>

            })}

        </View>
    );
};

export default SpermChart;
