import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const FormTextInput = ({style, ...props}) => {
    return (
        <TextInput  
            style={{...styles.inputText, ...style}}
            placeholder="Email" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}
        />
    );
}

const styles = StyleSheet.create({
    inputText: {
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        color:"white"
    }
});

export default FormTextInput;