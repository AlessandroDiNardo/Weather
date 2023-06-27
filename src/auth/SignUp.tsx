import React from 'react'
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView} from 'react-native'
import Header from '../components/header'
import Footer from '../components/footer'
import SCREENS from '../screens/screens'

const SignUp = ({navigation}: any) => {
    const goToHome = () => {
        navigation.navigate(SCREENS.HOME);
    };
    return (
        <KeyboardAvoidingView>
            <View style={styles.mainContainer}>
                <Header /> 

                <View style={styles.logContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Inserisci Nome</Text>
                        <TextInput 
                            placeholder='...'
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Inserisci l'email</Text>
                        <TextInput 
                            placeholder='...'
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Inserisci password</Text>
                        <TextInput 
                            placeholder='...'
                            style={styles.input}
                        />
                    </View>

                    <Text 
                        style={styles.btnNavigate}
                        onPress={goToHome}
                    >REGISTRATI</Text>
                </View>

                <Footer />
            </View>
        </KeyboardAvoidingView>
        
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
        marginTop: 50,
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 20
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
        backgroundColor: 'orange',
        paddingVertical: 15,
        textAlign: 'center',
        fontFamily: 'arial',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    }
})

export default SignUp;