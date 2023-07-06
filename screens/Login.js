import { StyleSheet, Text, View, TouchableOpacity, TextInput, ToastAndroid, Image } from 'react-native'
import React, { useEffect, useState } from 'react';
import firestore, { firebase } from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';



const Login = ({navigation}) => {
    const [fdata, setFdata] = useState({
        email: '',
        password: ''
    });

    // useEffect(() => {

    // }, []);

    const sendToBackend = async () => {
        if(fdata.email == '') {
            ToastAndroid.show('Please Enter Email', ToastAndroid.BOTTOM);
        }
        else if(fdata.password == '') {
            ToastAndroid.show('Please Enter Password', ToastAndroid.BOTTOM);
        }
        else {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            if(reg.test(fdata.email) == true) {
                fetch('http://10.0.2.2.:3000/signin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(fdata)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.error) {
                        ToastAndroid.show(`${data.error}`, ToastAndroid.BOTTOM);
                    }
                    else {
                        console.log(fdata);
                        navigation.navigate('MyTabs');
                        // navigation.goBack();
                    }
                });
            }
            else {
                ToastAndroid.show('Please Enter A Valid Email', ToastAndroid.BOTTOM);
            }
        }

        // navigation.navigate('MyTabs');
    }

    const loginFirebase = async () => {
        if(fdata.email == '') {
            ToastAndroid.show('Please Enter Email', ToastAndroid.BOTTOM);
        }
        else if(fdata.password == '') {
            ToastAndroid.show('Please Enter Password', ToastAndroid.BOTTOM);
        }
        else {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            if(reg.test(fdata.email) == true) {
                try {
                    const userLogin = await auth().signInWithEmailAndPassword(fdata.email, fdata.password);
                    navigation.navigate('MyTabs');
                }
                catch(err) {
                    console.log(err);
                    ToastAndroid.show('Credentials do not match or User does not Exist', ToastAndroid.BOTTOM);
                }
            }
            else {
                ToastAndroid.show('Please Enter A Valid Email', ToastAndroid.BOTTOM);
            }
        }
    }

    const googleLogin = async () => {
        try {
            GoogleSignin.configure(
                {
                    offlineAccess: false,
                    webClientId : '841661067412-vigvvqq24tiqgddmco9v5thhlt3aogfs.apps.googleusercontent.com',
                    scopes: ['profile', 'email'],
                }
            );
            await GoogleSignin.hasPlayServices();
            const user = await GoogleSignin.signIn();
            const {idToken} = await GoogleSignin.signIn();
            const googleCredentials = auth.GithubAuthProvider.credential(idToken);
            auth().signInWithCredential(googleCredentials);
            console.log(user);
            navigation.navigate('MyTabs');
        } 
        catch (error) {
            console.log(error);
        }
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
            <TouchableOpacity style={styles.button} onPress={() => loginFirebase()}> 
                <Text style={styles.buttonTitle}>Log in</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => {navigation.navigate('SignUp')}}>
                    <Text style={styles.footerLink}>Sign up</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop: 20}}>
                <Text style={{textAlign: 'center', color: '#9DB2BF'}}>--------------- OR ---------------</Text>
                <TouchableOpacity onPress={() => googleLogin()}>
                    <View style={styles.googleBox}>
                        <Image source={require('../assets/google.png')} style={{height: 30, width: 30}} />
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>Sign in with Google</Text>
                    </View>
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
        borderRadius: 15,
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
        borderRadius: 15,
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
    googleBox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 25,
        borderWidth: 1,
        width: '100%',
        paddingVertical: 8,
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 15,
        borderColor: 'grey',
    }
});

export default Login;