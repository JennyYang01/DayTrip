import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

class LoginScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    state={
        email:"",
        password:""
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>DayTrip</Text>
                <TextInput  
                    style={styles.inputText}
                    placeholder="Email" 
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({email:text})}/>
                <TextInput  
                    style={styles.inputText}
                    placeholder="Password" 
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({password:text})}/>
                <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{...styles.buttonText, marginBottom: 40}}>Forgot your password?</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
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
    logo: {
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
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
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:10
    },
    buttonText:{
      color:"gray"
    }
});