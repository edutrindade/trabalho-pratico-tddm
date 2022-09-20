import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, StatusBar } from 'react-native';

import Input from '../components/Input';
import colors from '../global/colors';

export default function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate("home");
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <StatusBar />
                <Image
                    source={require('../assets/img/sinuca.png')}
                    resizeMode="contain"
                    style={{ width: '60%', height: '40%' }}
                />
                <View style={styles.form}>
                    <Input placeholder="Usuário" keyboardType="email-address" icon="user" />

                    <Input placeholder="Senha" security autoCorrect={false} returnKeyType="go" icon="pass" />

                    <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                        <Text style={styles.textButton}>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors("secondary"),
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        flex: 0.5,
        width: "75%",
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#FFF0B8',
        padding: 10,
        width: '100%',
        borderRadius: 12,
        top: 15
    },
    textButton: {
        fontSize: 20,
        color: '#142F30',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});