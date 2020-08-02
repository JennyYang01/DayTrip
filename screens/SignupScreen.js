import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import FormTextInput from '../components/FormTextInput';

class SignupScreen extends Component {
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
                <View style={{ width: "80%" }}>
                    <FormTextInput
                        placeholder="Email" 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({email:text})}
                    />
                    <FormTextInput
                        placeholder="Email" 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({password:text})}
                    />
                    <FormTextInput  
                        style={styles.inputText}
                        placeholder="Confirm Password" 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({password:text})}
                    />
                </View>
                <Button type='primary' title='SIGN UP' onPress={() => this.props.navigation.navigate('Home')} style={{ width:'80%' }}/>
                <View style={{flexDirection: 'row'}}>
                    <Text>Already have an account? </Text><Button type='tertiary' title='Log In' onPress={() => this.props.navigation.navigate('Login')}/>
                </View>
            </View>
        );
    }
}
export default SignupScreen;

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