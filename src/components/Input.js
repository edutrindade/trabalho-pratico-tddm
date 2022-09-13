import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import colors from '../global/colors';

export default function Input({ placeholder, security = false, keyboardType, autoCorrect = true, returnKeyType = "next" }) {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={colors("white")}
            secureTextEntry={security}
            keyboardType={keyboardType}
            autoCorrect={autoCorrect}
            returnKeyType={returnKeyType}
            style={styles.input}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderColor: colors("primary"),
        color: colors("white"),
        fontSize: 16,
        padding: 4,
        marginBottom: 20
    },
});