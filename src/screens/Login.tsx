import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/header'
import SCREENS from './screens'

const Login = ({navigation}: any) => {
    return (
        <View>
            <Header /> 

            <View style={styles.logContainer}>
                <Text 
                style={styles.btnRegister}
                onPress={() => navigation.navigate(SCREENS.SIGNUP)}>REGISTRATI</Text>
                
                <Text 
                style={styles.btnAccess}
                onPress={() => navigation.navigate(SCREENS.SIGNIN)}>ACCEDI</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
    },
    logContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 50,
        marginTop: 50,
    },
    btnRegister: {
        width: 300,
        backgroundColor: 'orange',
        paddingVertical: 15,
        textAlign: 'center',
        fontFamily: 'arial',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    btnAccess: {
        width: 300,
        backgroundColor: 'green',
        paddingVertical: 15,
        textAlign: 'center',
        fontFamily: 'arial',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
})

export default Login;