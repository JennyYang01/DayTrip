import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Button from '../components/Button';

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
                <TextInput  
                    style={styles.inputText}
                    placeholder="Confirm Password" 
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({password:text})}/>
                <Button type='primary' title='SIGN UP' onPress={() => this.props.navigation.navigate('Home')} style={{ width:'80%' }}/>
                <View>
                    <Text>Already have an account? </Text><Button type='tertiary' title='Log In' onPress={() => this.props.navigation.navigate('Login')} style={{ width:'80%', marginBottom: 40 }}/>
                </View>
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
    }
});