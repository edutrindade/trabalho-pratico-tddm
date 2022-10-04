import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import colors from '../../global/colors';

export default function Card({ title, type, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.cards}>
                <Text style={styles.title}>{title}</Text>
                {type === 'player' && (
                    <Image
                        source={require('../../assets/img/neymar.webp')}
                        resizeMode="contain"
                        style={{ width: '30%' }}
                    />
                )}
                {type === 'soccer' && (
                    <Image
                        source={require('../../assets/img/ball.png')}
                        resizeMode="contain"
                        style={{ width: '20%', right: 10 }}
                    />
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '90%',
        margin: 15
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
        right: 10
    },
    title: {
        fontSize: 20
    }
})