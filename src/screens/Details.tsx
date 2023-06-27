import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Footer from '../components/footer'
import Header from '../components/header'
import { API_KEY } from '../Api'

const Details = (props: any) => {
    const { name } = props.route.params;
    const [data, setData] = useState("");

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.log(err))
    }, []);

    return (
        <View style={{
            width: '100%',
            height: '100%'
        }}>
            <Header />
            {
                data ? <View>
                    <Text style={{
                        color: 'black',
                        fontSize: 20,
                        fontFamily: 'arial',
                        fontWeight: 'bold',
                    }}>{name}</Text>
                    <Text style={{
                        color: 'black',
                        fontSize: 20,
                        fontFamily: 'arial',
                        fontWeight: 'bold',
                    }}> {data['weather'][0]['main']}</Text>
                </View> : <View>
                    <Text>Città non trovata!</Text>
                </View>
            }

            <Footer />
        </View>

    );
}

const styles = StyleSheet.create({

})

export default Details;