import React from 'react';
import { SafeAreaView, ActivityIndicator, StyleSheet, Text } from 'react-native';
import colors from '../../global/colors';

export default function Loading() {
    return (
        <SafeAreaView style={styles.container}>
            <ActivityIndicator size={60} style={styles.loading} />
            <Text style={styles.text}>Aguarde...</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors("secondary"),
    },
    loading: {
        color: colors('white'),
    },
    text: {
        top: 24,
        color: colors('white'),
        fontSize: 18
    }
})