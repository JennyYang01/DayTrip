import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const buttonType = (title, type, onPress) => {
    const button = {
        tertiary: (
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.tertiary}>{title}</Text>
            </TouchableOpacity>
        ),
        primary: (
            <TouchableOpacity onPress={onPress} style={styles.primary}>
                <Text style={styles.primaryText}>{title}</Text>
            </TouchableOpacity>
        )
    }
    return (button[type])
};

const Button = ({type, title, onPress, style, disabled, ...props}) => {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', ...style }} {...props}>
            {buttonType(title, type, onPress)}
        </View>
    )
};

const styles = StyleSheet.create({
    primary:{
        width:"100%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:10
    },
    primaryText: {
        marginHorizontal: 30,
        color: "white",
        fontWeight:  "bold"
    },
    tertiary:{
        color:"gray",
    }
});

Button.propTypes = {
    type: PropTypes.oneOf(['tertiary', 'primary']),
    title: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.object,
    disabled: PropTypes.bool
}

Button.defaultProps = {
    type: 'primary',
    title: '',
    onPress: null,
    style: null,
    disabled: true
}

export default Button