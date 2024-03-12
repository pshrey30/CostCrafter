import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EmptyList = ({ message }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../Assests/Images/empty.png')}
                style={{ height: 230, width: 230, }} />
            <Text style={styles.text}>{message || 'Data not found'}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    text: {
        fontSize: 15,
        fontWeight: '400',
        color: 'gray',
    }
})


export default EmptyList;