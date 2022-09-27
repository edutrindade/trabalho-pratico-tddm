import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default function Line() {
    return (
        <View style={styles.line} />
    );
}

const styles = StyleSheet.create({
    line: {
        width: '50%',
        borderBottomWidth: 1,
        borderColor: colors('white'),
    }
})