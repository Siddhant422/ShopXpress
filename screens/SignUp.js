import { StyleSheet, Text, View, TouchableOpacity, TextInput, ToastAndroid, } from 'react-native'
import React, { useState } from 'react';

const SignUp = ({navigation}) => {
    const [fdata, setFdata] = useState({
        name: '',
        email: '',
        phoneNo: '',
        password: ''
    });

    const sendToBackend = async () => {
        // if(fdata.name == '') {
        //     ToastAndroid.show('Please Enter Name', ToastAndroid.BOTTOM);
        // }
        // else if(fdata.email == '') {
        //     ToastAndroid.show('Please Enter Email', ToastAndroid.BOTTOM);
        // }
        // else if(fdata.phoneNo == '') {
        //     ToastAndroid.show('Please Enter Phone Number', ToastAndroid.BOTTOM);
        // }
        // else if(fdata.password == '') {
        //     ToastAndroid.show('Please Enter Password', ToastAndroid.BOTTOM);
        // }
        // else {
        //     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        //     if(reg.test(fdata.email) == true) {
        //         if(fdata.phoneNo.length < 10) {
        //             ToastAndroid.show('Please Enter A Valid Phone Number', ToastAndroid.BOTTOM);
        //         }
        //         else {
        //             if(fdata.password.length < 6) {
        //                 ToastAndroid.show('Password must be atleast 6 characters long', ToastAndroid.BOTTOM);
        //             }
        //             else {
        //                 fetch('http://10.0.2.2.:3000/signup', {
        //                     method: 'POST',
        //                     headers: {
        //                         'Content-Type': 'application/json'
        //                     },
        //                     body: JSON.stringify(fdata)
        //                 })
        //                 .then(res => res.json())
        //                 .then(data => {
        //                     if(data.error) {
        //                         ToastAndroid.show(`${data.error}`, ToastAndroid.BOTTOM);
        //                     }
        //                     else {
        //                         // console.log(data.otp);
        //                         navigation.navigate('OtpVerify', {data: fdata, otp: data.otp})
        //                         // alert('Account created Successfully');
        //                         // navigation.navigate;
        //                     }
        //                 });

        //             }
        //         }
        //     }
        //     else {
        //         ToastAndroid.show('Please Enter A Valid Email', ToastAndroid.BOTTOM);
        //     }
        // }

        navigation.navigate('OtpVerify')
    }

    // ToastAndroid.show('Please Enter your email', ToastAndroid.BOTTOM);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create an Account</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#AAAAAA"
                onChangeText={text => setFdata({...fdata, name: text})}
                autoCapitalize="words"
                autoCorrect={false}
            />
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
                placeholder="Phone No."
                placeholderTextColor="#AAAAAA"
                onChangeText={text => setFdata({...fdata, phoneNo: text})}
                maxLength={10}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#AAAAAA"
                onChangeText={text => setFdata({...fdata, password: text})}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={()=>sendToBackend()}>
                <Text style={styles.buttonTitle}>Sign up</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.footerLink}>Log in</Text>
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
        fontSize: 16,
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

export default SignUp;