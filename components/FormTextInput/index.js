import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const FormTextInput = ({style, placeholder, ...props}) => {
    return (
        <TextInput  
            style={{...styles.inputText, ...style}}
            placeholder={placeholder}
            placeholderTextColor="#003f5c"
            {...props}
        />
    );
}

Button.propTypes = {
    style: PropTypes.object,
    placeholder: PropTypes.string
}

Button.defaultProps = {
    style: null,
    placeholder: ''
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