import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ArrowLeft, ArrowFatLinesRight } from 'phosphor-react-native';
import colors from '../global/colors';

export default function Header({ title }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ArrowLeft size={30} color={colors('white')} />
                <Text style={styles.title}>{title}</Text>
                <ArrowFatLinesRight size={30} color={colors('red')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        padding: 5,
    },
    header: {
        top: 28,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 25,
        color: colors('white')
    }
})