import React, { useEffect, useState } from 'react'
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native'
import Footer from '../components/footer'
import Header from '../components/header'
import { getWeather } from '../services/Service'
import ActualWeather from '../models/model'

const Details = (props: any) => {
    const { name } = props.route.params;
    const [data, setData] = useState<ActualWeather>();
    const [isSpinner, setIsSpinner] = useState(false);

    useEffect(() => {
        setIsSpinner(true);
        getWeather(name)
            .then(res => {
                setData(res)
                console.log("---", res.coord)
            })
            .catch(err => console.log(err))
            .finally(() => setIsSpinner(false))
    }, []);

    return (
        <>
            {isSpinner
                ?
                <View style={styles.loading} >
                    <ActivityIndicator size="large" />
                </View>
                :
                <View style={{
                    width: '100%',
                    height: '100%'
                }}>
                    <Header />
                    {data ? <View>
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
                            //   }}> {data['weather'][0]['description']}</Text>
                        }}> {data?.weather[0]?.description}</Text>
                        <Text>
                            TEMPERATURA {(data?.main?.temp - 273).toFixed(2)}&deg; C
                        </Text>
                        <Text>
                            TEMPERATURA MASSIMA {(data?.main?.temp_max - 273).toFixed(2)}&deg; C
                        </Text>
                        <Text>
                            TEMPERATURA MINIMA {(data?.main?.temp_min - 273).toFixed(2)}&deg; C
                        </Text>

                    </View> : <View>
                        <Text>Città non trovata!</Text>
                    </View>}
                    <Footer />
                </View>
            }




        </>

    );
}

const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Details;