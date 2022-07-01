import React from 'react';
import {View, Platform} from 'react-native';
import {fontPixel, heightPixel} from '../../lib/style/adjust';
import {LineChart, XAxis, YAxis, Grid} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import * as scale from 'd3-scale';

const MainChart = () => {
  const data = [50, 10, 40, 35, 0, 24, 81];
  const xAxisData = [
    'MAR 21',
    'JAN 21',
    'SEP 20',
    'JUN 20',
    'MAR 20',
    'JAN 20',
    'JUN 21',
  ];

  const contentInset = {top: 20, bottom: 20};

  return (
    <View
      style={{
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        paddingVertical: 15,
        flexDirection: 'row',
      }}>
      <YAxis
        data={data}
        contentInset={{top: 20, bottom: heightPixel(70)}}
        svg={{
          fill: '#BBBBBB',
          fontSize: fontPixel(8),
          fontFamily:
            Platform.OS === 'ios' ? 'Rubik' : 'Rubik-VariableFont_wght',
          fontWeight: 'bold',
        }}
        scale={scale.scaleLinear}
        spacing={0.2}
        // yAccessor={({index}) => index}
        numberOfTicks={5}
        formatLabel={value => value}
      />
      <View style={{flex: 1, marginLeft: 10, height: heightPixel(221)}}>
        <LineChart
          style={{flex: 1}}
          data={data}
          width={5}
          svg={{stroke: '#7F1DDE', strokeWidth: 5}}
          gridMin={0}
          curve={shape.curveNatural}
          numberOfTicks={5}
          contentInset={contentInset}>
          <Grid />
        </LineChart>
        <XAxis
          data={data}
          numberOfTicks={7}
          style={{height: heightPixel(51)}}
          formatLabel={(value, index) => xAxisData[index]}
          contentInset={{left: 0, right: 30}}
          svg={{
            fill: '#BBBBBB',
            fontSize: fontPixel(8),
            fontFamily:
              Platform.OS === 'ios' ? 'Rubik' : 'Rubik-VariableFont_wght',
            fontWeight: 'bold',
            rotation: -45,
            originY: 0,
            y: 20,
          }}
        />
      </View>
    </View>
  );
};

export default MainChart;
