import React from 'react';
import { View, StyleSheet } from 'react-native';
import { widthPixel } from '../../lib/style/adjust';

const DotStepper = ({ position }) => {
    return (
        <View style={styles.container}>
            {[1, 2, 3].map((item, i) => (
                <View
                    key={i}
                    style={[
                        styles.circle,
                        { backgroundColor: position === item ? '#29406C' : '#AAAAAA' },
                    ]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    circle: {
        width: widthPixel(10),
        height: widthPixel(10),
        borderRadius: widthPixel(5),
        backgroundColor: '#AAAAAA',
        marginHorizontal: widthPixel(10),
    },
});

export default DotStepper;
