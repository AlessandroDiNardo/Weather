import React from 'react'
import SCREENS from '../screens/screens'
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPersonWalkingArrowLoopLeft } from '@fortawesome/free-solid-svg-icons'
import LinearGradient from 'react-native-linear-gradient';



const ReturnLogin = ()=> {

    const navigation = useNavigation();

    const goToLogin = () => {
        navigation.navigate(SCREENS.LOGIN);
    };

    return (
        <View style={styles.container}>
            <LinearGradient 
            style={styles.footer} 
            colors={['#ffa500', '#ffa500', '#008000', '#008000']}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <Text style={styles.btnFooter} onPress={goToLogin}>
                    <FontAwesomeIcon icon={faPersonWalkingArrowLoopLeft} size={30}/>
                </Text>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        height: '100%',
        width: '100%',
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        gap: 20,
        flexDirection: 'row', 
        backgroundColor: 'orange',
        padding: 10
    },
    btnFooter: {
        fontSize: 15,
        fontFamily: 'arial',
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 100,
        textAlign: 'center'
    },
})

export default ReturnLogin;