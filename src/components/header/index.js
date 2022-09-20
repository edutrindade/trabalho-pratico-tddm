import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowLeft, SignOut } from 'phosphor-react-native';
import colors from '../../global/colors';

export default function Header({ title, backButton = true, exitButton = false }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {backButton ? (
                    <TouchableOpacity onPress={() => navigation.navigate('signin')}>
                        <ArrowLeft size={30} color={colors('white')} />
                    </TouchableOpacity>
                ) : <View />}
                <Text style={styles.title}>{title}</Text>
                {exitButton ? (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <SignOut size={28} color={colors('primary')} />
                    </TouchableOpacity>
                ) : <View />}
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
        top: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 25,
        color: colors('white')
    }
})