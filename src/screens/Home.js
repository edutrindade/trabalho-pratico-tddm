import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../global/colors';

import Header from '../components/Header';

export default function Home() {
    return (
        <View style={styles.container}>
            <Header title="Home" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors('black')
    },
    title: {
        fontSize: 25,
        color: colors('white')
    }
})