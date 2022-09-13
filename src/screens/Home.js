import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../global/colors';

import Header from '../components/Header';

export default function Home() {
    return (
        <View style={styles.container}>
            <Header title="Home" backButton={false} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors("secondary"),
    },
    title: {
        fontSize: 25,
        color: colors('white')
    }
})