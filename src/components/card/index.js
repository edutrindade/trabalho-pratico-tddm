import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SoccerBall } from 'phosphor-react-native';
import colors from '../../global/colors';

export default function Card() {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.cards}>
                <View style={styles.asideLeft}>
                    <Text style={styles.title}>Nova pelada</Text>
                </View>
                <View style={styles.asideRight}>
                    <SoccerBall color={colors('black')} size={50} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '90%',
        margin: 10
    },
    cards: {
        alignItems: 'center',
        height: 80,
        width: '85%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors('white'),
        borderRadius: 10,
    },
    asideLeft: {

    },
    asideRight: {

    },
    title: {
        fontSize: 20
    }
})