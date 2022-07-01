import React from 'react';
import { View, Pressable, Image, Platform } from 'react-native';
import { heightPixel, widthPixel } from '../../lib/style/adjust';

function TabBar({ state, descriptors, navigation }) {
    return (
        <View
            style={{
                flexDirection: 'row',
                height: heightPixel(80),
                backgroundColor: '#29406C',
                ...Platform.select({
                    ios: {
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowOffset: {
                            width: 0,
                            height: -15,
                        },
                        shadowOpacity: 0.8,
                        shadowRadius: 10,
                    },
                    android: {
                        elevation: 5,
                    },
                }),
            }}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                var icon;
                if (route.name === 'Home') {
                    icon = require('../../../assets/profile.png');
                } else if (route.name === 'Profile') {
                    icon = require('../../../assets/home.png');
                    // } else if (route.name === 'Chart') {
                    // icon = require('../../../assets/home.png');
                    // } else if (route.name === 'Profile') {
                    // icon = require('../../../assets/home.png');
                }

                if (index === 1) {
                    return (
                        <View style={{ flex: 2, flexDirection: 'row' }} key={index}>
                            <Pressable
                                style={{ flex: 1, alignItems: 'center' }}
                                onPress={onPress}>
                                <View
                                    style={{
                                        backgroundColor: isFocused ? '#FFFFFF' : '#29406C',
                                        width: widthPixel(50),
                                        height: heightPixel(8),
                                        marginBottom: heightPixel(10),
                                        borderRadius: 2,
                                    }}
                                />
                                <Image
                                    style={{
                                        width: widthPixel(28),
                                        height: widthPixel(28),
                                        tintColor: isFocused ? '#FFFFFF' : '#FFFFFF',
                                    }}
                                    source={icon}
                                />
                            </Pressable>

                        </View>
                    );
                } else {
                    return (
                        <Pressable
                            key={index}
                            style={{ flex: 1, alignItems: 'center' }}
                            onPress={onPress}>
                            <View
                                style={{
                                    backgroundColor: isFocused ? '#FFFFFF' : '#29406C',
                                    width: widthPixel(50),
                                    height: heightPixel(8),
                                    marginBottom: heightPixel(10),
                                    borderRadius: 2,
                                }}
                            />
                            <Image
                                style={{
                                    width: widthPixel(28),
                                    height: widthPixel(28),
                                    tintColor: isFocused ? '#FFFFFF' : '#FFFFFF',
                                }}
                                source={icon}
                            />
                        </Pressable>
                    );
                }
            })}
        </View>
    );
}

export default TabBar;
