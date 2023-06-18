import { StyleSheet, Text, View, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
import React, { useState } from 'react';

const Login = ({navigation}) => {
    const [fdata, setFdata] = useState({
        email: '',
        password: ''
    });

    const sendToBackend = async () => {
        // if(fdata.email == '') {
        //     ToastAndroid.show('Please Enter Email', ToastAndroid.BOTTOM);
        // }
        // else if(fdata.password == '') {
        //     ToastAndroid.show('Please Enter Password', ToastAndroid.BOTTOM);
        // }
        // else {
        //     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        //     if(reg.test(fdata.email) == true) {
        //         fetch('http://10.0.2.2.:3000/signin', {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify(fdata)
        //         })
        //         .then(res => res.json())
        //         .then(data => {
        //             if(data.error) {
        //                 ToastAndroid.show(`${data.error}`, ToastAndroid.BOTTOM);
        //             }
        //             else {
        //                 console.log(fdata);
        //                 navigation.navigate('MyTabs');
        //                 // navigation.goBack();
        //             }
        //         });
        //     }
        //     else {
        //         ToastAndroid.show('Please Enter A Valid Email', ToastAndroid.BOTTOM);
        //     }
        // }

        navigation.navigate('MyTabs');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to ShopXpress</Text>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#AAAAAA"
                onChangeText={text => setFdata({...fdata, email: text})}
                autoCapitalize="words"
                autoCorrect={false}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#AAAAAA"
                onChangeText={text => setFdata({...fdata, password: text})}
                maxLength={10}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={() => sendToBackend()}> 
                <Text style={styles.buttonTitle}>Log in</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => {navigation.navigate('SignUp')}}>
                    <Text style={styles.footerLink}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#ECF2FF',
        marginTop: 20,
        marginBottom: 10,
        paddingLeft: 16,
        width: '100%',
        fontSize: 16,
    },
    ImagePic: {
        width: 110,
        height: 110,
        borderRadius: 24,
        shadowColor: '#202020',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 5,
    },
    button: {
        backgroundColor: '#E52B50',
        width: '100%',
        height: 48,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    footer: {
        marginTop: 30,
        flexDirection: 'row',
    },
    footerText: {
        color: '#333333',
        fontSize: 16,
    },
    footerLink: {
        color: '#E52B50',
        marginLeft: 5,
        fontSize: 16,
    },
});

export default Login;