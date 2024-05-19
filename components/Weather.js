import React, { useEffect, useState } from 'react';
import Forecast from './Forecast';
import { Text, ImageBackground, StyleSheet, View } from 'react-native';


export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
        feels: 0,
        pressure: 0,
        humidity: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=22a87e427066796f9593b06b11ea8826`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        feels: json.main.feels_like,
                        pressure: json.main.pressure,
                        humidity: json.main.humidity
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.background}>
                <View style={styles.zipCodecontainer}>
                    <Text style={styles.title}>Zip code is </Text>
                    <Text style={styles.zipCode}>{props.zipCode}</Text>
                </View>
                <Forecast {...forecastInfo} />
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    backdrop: {
        width: '100%',
        height: '100%'
    },
    background: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    zipCodecontainer: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 18,
        color: 'white',
        lineHeight: 70

    },
    zipCode: {
        fontSize: 18,
        color: 'white',
        lineHeight: 70
    }
});
