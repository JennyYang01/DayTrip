import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const buttonType = {

}

const Button = ({style, ...props}) => {
    return (
        <TouchableOpacity>
            <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
    )
}

export default Button