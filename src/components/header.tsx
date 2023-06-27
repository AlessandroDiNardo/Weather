import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
    return (
        <View>
            <LinearGradient 
            style={styles.header} 
            colors={['#ffa500', '#ffa500', '#008000', '#008000']}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <Text style={styles.title}>
                    WEATHER
                </Text>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    title: {
        fontFamily: 'arial',
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black'
    }
})

export default Header;