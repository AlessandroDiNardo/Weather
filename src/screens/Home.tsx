import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import Header from '../components/header';
import Footer from '../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import SCREENS from './screens';

const Home = (props: any) => {

    const [city, setCity] = useState("");

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.mainContainer}>
                <Text style={{
                    color: 'black',
                    fontSize: 40,
                    fontFamily: 'arial',
                    fontWeight: 'bold',
                }}>HELLO!</Text>
                <Text style={{
                    color: 'black',
                    fontSize: 20,
                    fontFamily: 'arial',
                    fontWeight: 'bold',
                }}>Search city by name!</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={city}
                        onChangeText={val => setCity(val)}
                        placeholder='Search city...'
                        placeholderTextColor='white'
                        style={{
                            fontSize: 20,
                            color: 'white'
                        }}
                    />
                    <TouchableOpacity onPress={() => props.navigation.navigate(SCREENS.DETAILS, {name: city})}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size={20} style={{ color: 'white' }} />
                    </TouchableOpacity>
                </View>
            </View>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        paddingVertical: 20,
        paddingHorizontal: 50,
    },
    inputContainer: {
        borderColor: 'Black',
        backgroundColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
        width: '100%',
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

})

export default Home;