import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../global/colors';
import fonts from '../global/fonts';

import Header from '../components/header';
import Card from '../components/card';

export default function Home() {
    return (
        <View style={styles.container}>
            <Header title="Minhas Peladas" backButton={false} />
            <View style={styles.list}>
                <Card />
            </View>
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
        color: colors('white'),
    },
    list: {
        alignItems: 'center'
    }
})