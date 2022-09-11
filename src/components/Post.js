import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { height, width } from '../consts/Dimentions';
import DeviceW from '../consts/DeviceWIndentificator';
import { OS } from '../consts/consts';


export default function Posts(props) {

    let img;
    if (OS === 'iOS') {
        img = props.data.url
    } else {
        img = props.data.url + '.jpeg'
    }

    return (

        <View style={styles.wrap} >
            <Image source={{ uri: img }} style={styles.photo} />
            <View style={{ flexDirection: 'row', marginLeft: width / 40 }}>
                <Text style={styles.title} >Author: </Text>
                <Text style={styles.text} >{props.data.name}</Text>
            </View>

            <View style={{ flexDirection: 'row', marginLeft: width / 40, marginTop: height / 20 }}>
                <Text style={styles.title} >Company: </Text>
                <Text style={styles.text} >{props.data.company.name}</Text>
            </View>

            <View style={{ flexDirection: 'row', marginLeft: width / 40, marginTop: height / 20 }}>
                <Text style={styles.title} >title: </Text>
                <Text style={styles.text} >{props.data.title}</Text>
            </View>
            <Text style={styles.body} >{props.data.body}</Text>
        </View>
    );
}

const styles = DeviceW ? StyleSheet.create({
    wrap: {
        height: height / 3,
        width: width / 1.1,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#27569C',
        justifyContent: 'center',
        marginTop: height / 30
    },
    title: {
        fontSize: width / 22,
        fontWeight: 'bold',
    },
    text: {
        fontSize: width / 22,
        width: width / 1.35,
        marginLeft: width / 50,
        fontWeight: 'bold',
    },
    body: {
        display: 'none'
    },
    photo: {
        display: 'none'
    }
}) : StyleSheet.create({
    wrap: {
        height: height / 2,
        width: width / 2.1,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#27569C',
        marginTop: height / 50,
        margin: width / 180
    },
    title: {
        fontSize: width / 45,
        fontWeight: 'bold',
    },
    text: {
        fontSize: width / 45,
        width: width / 3,
        marginLeft: width / 50,
        fontWeight: 'bold',
    },
    body: {
        fontSize: width / 45,
        marginTop: height / 80,
        marginLeft: width / 50,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    photo: {
        display: 'flex',
        height: height / 7,
        width: height / 7,
        margin: width / 40,
    }
})
