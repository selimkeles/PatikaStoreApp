import React from "react";
import styles from "./SearchBar.style"
import { View, Text, TextInput } from "react-native"

export default function SearchBar(){
    return (
        <View style={styles.container}>
            <TextInput 
            allowFontScaling={false}
            placeholder="Ara..."
            placeholderTextColor={'gray'}
            caretHidden
            enterKeyHint="go"
            returnKeyType="go"
            selectionColor={'lightgray'}
            >
            </TextInput>
        </View>
    );
};