import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate("home");
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/img/user.png')}
                resizeMode="contain"
                style={{ width: '50%', height: '30%' }}
            />
            <View style={styles.form}>
                <TextInput
                    placeholder="E-mail"
                    placeholderTextColor="#FFF"
                    keyboardType="email-address"
                    style={styles.input}
                />

                <TextInput
                    placeholder="Senha"
                    placeholderTextColor="#FFF"
                    secureTextEntry
                    autoCorrect={false}
                    returnKeyType="go"
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.textButton}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#142F30',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        flex: 0.5,
        width: "75%",
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderColor: '#FFF0B8',
        color: '#FFF',
        fontSize: 16,
        padding: 4,
        marginBottom: 20
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