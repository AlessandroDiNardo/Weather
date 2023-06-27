import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/header';
import Footer from '../components/footer'

const Home = () => {

    return (
        <View style={styles.mainContainer}>
            <Header />
            <View>
                <Text>Luogo</Text>
                <Text>Gradi</Text>
                <View>
                    <Text> Precipotazione fino a un ora</Text>
                    <View>
                        <Text>Temperatura dei giorni successivi</Text>
                    </View>
                </View>
                <View>
                    <Text>Temperatura dei prossimi giorni fino ad una settimana</Text>
                </View>
            </View>

            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%', 
    }
})

export default Home;