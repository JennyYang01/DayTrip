import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import PropTypes from 'prop-types';

const buttonType = (title, type, onPress) => {
    const button = {
        tertiary: (
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.tertiary}>{title}</Text>
            </TouchableOpacity>
        ),
        primary: (
            <TouchableOpacity onPress={onPress} style={styles.primary}>
                <Text>{title}</Text>
            </TouchableOpacity>
        )
    }
    return (button[type])
};

const Button = ({type, title, onPress, ...props}) => {
    return (
        <View {...props}>
            {buttonType(title, type, onPress)}
        </View>
    )
};

const styles = StyleSheet.create({
    primary:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:10
    },
    tertiary:{
        color:"gray"
    }
});

// Button.propTypes = (
//     type: PropTypes.oneOf(['tertiary, primary'])
// )

export default Button