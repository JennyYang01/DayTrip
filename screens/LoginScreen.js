import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

class LoginScreen extends Component {
    state={
        email:"",
        password:""
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>DayTrip</Text>
                <TextInput  
                    style={styles.inputText}
                    placeholder="Email" 
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({email:text})}/>
                <TextInput  
                    style={styles.inputText}
                    placeholder="Password" 
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({email:text})}/>
                <Button
                    onPress={() => this.props.navigation.navigate('Home')}
                    title="Log In"
                />
            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputText: {
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        color:"white"
    }
});