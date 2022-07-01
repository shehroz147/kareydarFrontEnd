// import React from 'react';
// import {Text, View} from 'react-native';
// // import {PieChart} from 'react-native-svg-charts';
// import {fontPixel, widthPixel} from '../../lib/style/adjust';
// import {useStyles} from '../../lib/style/useStyle';

// const GoalsPieChart = () => {
//   const commonStyle = useStyles();
// //   const pieChartData = [
//     {
//       key: 1,
//       value: 100,
//       svg: {fill: '#d966ff'},
//       arc: {outerRadius: widthPixel(95)},
//     },
//     {
//       key: 2,
//       value: 80,
//       svg: {fill: '#c61aff'},
//       arc: {outerRadius: widthPixel(85)},
//     },
//     {
//       key: 3,
//       value: 60,
//       svg: {fill: '#9900cc'},
//       arc: {outerRadius: widthPixel(75)},
//     },
//     {
//       key: 4,
//       value: 40,
//       svg: {fill: '#600080'},
//       arc: {outerRadius: widthPixel(70)},
//     },
//   ];

//   return (
//     <View style={{paddingVertical: 20}}>
//       <PieChart
//         style={{
//           width: widthPixel(200),
//           height: widthPixel(200),
//           alignSelf: 'center',
//           flex: 1,
//         }}
//         startAngle={0}
//         padAngle={0}
//         innerRadius={widthPixel(60)}
//         data={pieChartData}
//       />
//       <View style={{position: 'absolute', top: 0, right: 0}}>
//         <Text
//           style={[
//             commonStyle.rubik,
//             {
//               color: '#222222',
//               fontSize: fontPixel(24),
//               fontWeight: '500',
//             },
//           ]}>
//           100%
//         </Text>
//         <Text
//           style={[
//             commonStyle.rubik,
//             {
//               color: '#222222',
//               fontSize: fontPixel(13),
//               fontWeight: '500',
//               opacity: 0.5,
//             },
//           ]}>
//           Exercies
//         </Text>
//       </View>
//       <View style={{position: 'absolute', bottom: 0, right: 0}}>
//         <Text
//           style={[
//             commonStyle.rubik,
//             {
//               color: '#222222',
//               fontSize: fontPixel(24),
//               fontWeight: '500',
//             },
//           ]}>
//           90%
//         </Text>
//         <Text
//           style={[
//             commonStyle.rubik,
//             {
//               color: '#222222',
//               fontSize: fontPixel(13),
//               fontWeight: '500',
//               opacity: 0.5,
//             },
//           ]}>
//           Calories Burned
//         </Text>
//       </View>
//       <View style={{position: 'absolute', top: 0, left: 0}}>
//         <Text
//           style={[
//             commonStyle.rubik,
//             {
//               color: '#222222',
//               fontSize: fontPixel(24),
//               fontWeight: '500',
//             },
//           ]}>
//           50%
//         </Text>
//         <Text
//           style={[
//             commonStyle.rubik,
//             {
//               color: '#222222',
//               fontSize: fontPixel(13),
//               fontWeight: '500',
//               opacity: 0.5,
//             },
//           ]}>
//           Steps
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default GoalsPieChart;
