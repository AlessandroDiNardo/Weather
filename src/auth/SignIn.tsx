import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Pressable, ScrollView, Alert } from 'react-native'
import Header from '../components/header'
import Footer from '../components/footer'
import SCREENS from '../screens/screens'

const SignIn = ({navigation}: any) => {
    
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // check email
    const [emailInput, setEmailInput] = useState('');
    const emailPredefinita = 'admin@example.com';
    const confrontaEmail = () => {
      if (emailInput === emailPredefinita) {
        return true;
      } else {
        return false;
      }
    };
    
    // check password
    const [passwordInput, setPasswordInput] = useState('');
    const passwordPredefinita = 'Admin123?';
    const confrontaPassword = () => {
      if (passwordInput === passwordPredefinita) {
        return true;

      } else {
        return false;
      }
    };

    const goToHome = () => {
        navigation.navigate(SCREENS.HOME);
    };

    //funziona che checka che l'input rispetti la regex, se è falso return un alert, se è vero controlla l'email e la password con quella predefinita e mi fa entrare nella home
    const Check = () => {
        if (!regexEmail.test(emailInput)) {
            Alert.alert(
                'EMAIL ERRATA',
                'Controlla le credenziali inserite',
                [
                    {
                        text: 'OK!',
                    },
                ],
            );

        } else if (!regexPwd.test(passwordInput)) {
            Alert.alert(
                'PASSWORD ERRATA',
                'Controlla le credenziali inserite',
                [
                    {
                        text: 'OK!',
                    },
                ],
            );
        }

        confrontaEmail();
        confrontaPassword();
        
        if(confrontaEmail() && confrontaPassword()){
            return goToHome();
        }else{
           return navigation.navigate(SCREENS.LOGIN);
        }
    }

    return (
        <View style={styles.mainContainer}>
            <Header /> 
                <View style={styles.logContainer}>
                    <ScrollView style={{
                        padding: 20
                    }}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Inserisci l'email</Text>
                        <TextInput 
                            placeholder='...'
                            style={styles.input}
                            value={emailInput}
                            onChangeText={setEmailInput}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Inserisci password</Text>
                        <TextInput 
                            placeholder='...'
                            style={styles.input}
                            value={passwordInput}
                            onChangeText={setPasswordInput}
                        />
                    </View>
                    <Text 
                    style={styles.btnNavigate}
                    onPress={() => {
                        Check();
                    }}>ACCEDI</Text>
                    </ScrollView>
                </View>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%'
    },
    logContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 50,
        marginTop: 100,
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 20,
        marginBottom: 50
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        flex: 1,
    },
    confirmContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20,
        marginTop: 20
    },
    input: {
        borderWidth: 1,
        borderStyle: 'solid',
        paddingVertical: 5,
        paddingHorizontal: 50,
        width: 300,
        height: 50,
        textAlign: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    btnNavigate: {
        width: 300,
        backgroundColor: 'green',
        paddingVertical: 15,
        textAlign: 'center',
        fontFamily: 'arial',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    }
})

export default SignIn;