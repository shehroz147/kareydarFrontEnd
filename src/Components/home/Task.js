import React from 'react';
import { useStyles } from '../../lib/style/useStyle';
import { WebView } from 'react-native-webview';

// const Task = () => {
//     const commonStyle = useStyles();

//     const DATA = [
//         {
//             id: '1',
//             avatar: require('../../assets/images/action/avatar1.png'),
//             name: 'Consultation with Dr. Jones ',
//             time: 'Monday nov. 12, 2021 at 10:00 am',
//         },
//         {
//             id: '2',
//             avatar: require('../../assets/images/action/avatar2.png'),
//             name: 'HIIT Training with Derick',
//             time: 'tuesday nov. 13, 2021 at 11:00 am',
//         },
//         {
//             id: '3',
//             avatar: require('../../assets/images/action/avatar1.png'),
//             name: 'Consultation with Dr. Jones ',
//             time: 'Monday nov. 12, 2021 at 10:00 am',
//         },
//         {
//             id: '4',
//             avatar: require('../../assets/images/action/avatar2.png'),
//             name: 'HIIT Training with Derick',
//             time: 'tuesday nov. 13, 2021 at 11:00 am',
//         },
//         {
//             id: '5',
//             avatar: require('../../assets/images/action/avatar1.png'),
//             name: 'Consultation with Dr. Jones ',
//             time: 'Monday nov. 12, 2021 at 10:00 am',
//         },
//         {
//             id: '6',
//             avatar: require('../../assets/images/action/avatar2.png'),
//             name: 'HIIT Training with Derick',
//             time: 'tuesday nov. 13, 2021 at 11:00 am',
//         },
//         {
//             id: '7',
//             avatar: require('../../assets/images/action/avatar1.png'),
//             name: 'Consultation with Dr. Jones ',
//             time: 'Monday nov. 12, 2021 at 10:00 am',
//         },
//         {
//             id: '8',
//             avatar: require('../../assets/images/action/avatar2.png'),
//             name: 'HIIT Training with Derick',
//             time: 'tuesday nov. 13, 2021 at 11:00 am',
//         },
//         {
//             id: '9',
//             avatar: require('../../assets/images/action/avatar1.png'),
//             name: 'Consultation with Dr. Jones ',
//             time: 'Monday nov. 12, 2021 at 10:00 am',
//         },
//         {
//             id: '10',
//             avatar: require('../../assets/images/action/avatar2.png'),
//             name: 'HIIT Training with Derick',
//             time: 'tuesday nov. 13, 2021 at 11:00 am',
//         },
//         {
//             id: '11',
//             avatar: require('../../assets/images/action/avatar1.png'),
//             name: 'Consultation with Dr. Jones ',
//             time: 'Monday nov. 12, 2021 at 10:00 am',
//         },
//         {
//             id: '12',
//             avatar: require('../../assets/images/action/avatar2.png'),
//             name: 'HIIT Training with Derick',
//             time: 'tuesday nov. 13, 2021 at 11:00 am',
//         },
//     ];

//     return (
//         // <View
//         //   style={{
//         //     background: '#444444',
//         //     ...Platform.select({
//         //       ios: {
//         //         shadowColor: 'rgba(0, 0, 0, 0.2)',
//         //         shadowOffset: {
//         //           width: 0,
//         //           height: 11,
//         //         },
//         //         shadowOpacity: 0.57,
//         //         shadowRadius: 15.19,
//         //       },
//         //       android: {
//         //         elevation: 25,
//         //       },
//         //     }),
//         //   }}>
//         //   <LinearGradient
//         //     colors={['#971DE1', '#3821D5']}
//         //     style={{
//         //       marginTop: heightPixel(14),
//         //       padding: widthPixel(20),
//         //     }}>
//         //     <View style={{flexDirection: 'row', marginBottom: 20}}>
//         //       <Text
//         //         style={[
//         //           commonStyle.font14,
//         //           {flex: 1, fontWeight: 'bold', textTransform: 'uppercase'},
//         //         ]}>
//         //         Tasks
//         //       </Text>
//         //       <Pressable>
//         //         <PixelImage
//         //           imageSource={require('../../assets/images/action/slope.png')}
//         //           imageWidth={14}
//         //         />
//         //       </Pressable>
//         //     </View>
//         //     {DATA.map((item, index) => (
//         //       <View key={index}>
//         //         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//         //           <Pressable>
//         //             <PixelImage imageSource={item.avatar} imageWidth={34} />
//         //           </Pressable>
//         //           <View style={{flex: 1, marginHorizontal: 10}}>
//         //             <Text style={[commonStyle.font14, {fontWeight: 'bold'}]}>
//         //               {item.name}
//         //             </Text>
//         //             <Text
//         //               style={[
//         //                 commonStyle.font10,
//         //                 {textTransform: 'uppercase', opacity: 0.75},
//         //               ]}>
//         //               {item.time}
//         //             </Text>
//         //           </View>
//         //           <Pressable>
//         //             <PixelImage
//         //               imageSource={require('../../assets/images/action/dot.png')}
//         //               imageWidth={3}
//         //             />
//         //           </Pressable>
//         //         </View>
//         //         <View
//         //           style={{
//         //             width: widthPixel(263),
//         //             height: heightPixel(3),
//         //             alignSelf: 'flex-end',
//         //             marginVertical: heightPixel(20),
//         //             backgroundColor: 'rgba(255, 255, 255, 0.1)',
//         //           }}
//         //         />
//         //       </View>
//         //     ))}
//         //   </LinearGradient>
//         // </View>
//         // <WebView
//         //     source={{
//         //         uri: 'https://attornea.com/diary36'
//         //     }}
//         // />
//     // );
// };

// export default Task;
