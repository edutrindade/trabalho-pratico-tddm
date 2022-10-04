import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import colors from '../global/colors';
import fonts from '../global/fonts';

import Header from '../components/header';
import Card from '../components/card';

export default function Home() {
    const navigation = useNavigation();

    const handlePressPlayers = () => {
        navigation.navigate("players");
    }

    return (
        <View style={styles.container}>
            <Header title="Minhas Peladas" backButton={false} />
            <View style={styles.list}>
                <Card title="Peladeiros" type="player" onPress={handlePressPlayers} />
                <Card title="Nova pelada" type="soccer" />
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
    }
})