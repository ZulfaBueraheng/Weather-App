import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Forecast(props) {
    return (
        <View style={styles.container}>
             <Text style={styles.subtitle}> </Text>
            <MaterialCommunityIcons size={60} name="cloud" color={'#ffffff'} />
            <Text style={styles.main}>{props.main}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <View style={styles.tempContainer}>
                <Text style={styles.temp}>{props.temp}</Text>
                <Text style={styles.tempC}>°C</Text>
            </View>
            <View style={styles.feelsContainer}>
                <Text style={styles.feels}>feels like: </Text>
                <Text style={styles.feels}>{props.feels}</Text>
                <Text style={styles.feels}>°C</Text>
            </View>
            <View style={styles.pressureContainer}>
                <Text style={styles.pressure}>pressure: </Text>
                <Text style={styles.pressure}>{props.pressure}</Text>
            </View>
            <View style={styles.humidityContainer}>
                <Text style={styles.humidity}>humidity: </Text>
                <Text style={styles.humidity}>{props.humidity}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        fontSize: 32,
        color: 'white',
        lineHeight: 70
    },
    description: {
        fontSize: 18,
        color: 'white',
        lineHeight: 70
    },
    tempContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    temp: {
        fontSize: 26,
        color: 'white',
        lineHeight: 70
    },
    tempC: {
        fontSize: 18,
        color: 'white',
        lineHeight: 70
    },
    feelsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    feels: {
        fontSize: 18,
        color: 'white',
        lineHeight: 70
    },
    pressureContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    pressure: {
        fontSize: 18,
        color: 'white',
        lineHeight: 70
    },
    humidityContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    humidity: {
        fontSize: 18,
        color: 'white',
        lineHeight: 70
    },
});