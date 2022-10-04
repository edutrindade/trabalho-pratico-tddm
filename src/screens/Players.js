import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../global/colors';
import fonts from '../global/fonts';

import Header from '../components/header';
import Card from '../components/card';

export default function Players() {
    return (
        <View style={styles.container}>
            <Header title="Peladeiros" backButton={true} />
            <View style={styles.list}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors("secondary"),
    },
    list: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors('white')
    }
})