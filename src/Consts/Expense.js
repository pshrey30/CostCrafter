import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { categoryBG } from '../../Theme/Theme'
import { categoryColors } from '../Consts/Colors'


const Expense = ({ item }) => {
    const backgroundColor = categoryBG[item.category] || '#d0f4de';
    return (
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
            <View>
                <Text style={{ color: 'black', fontWeight: '700', fontSize: 16 }}>{item.title}</Text>
                <Text style={{ color: 'black', fontWeight: '400' }}>{item.category}</Text>
            </View>
            <View>
                <Text style={{ color: 'black', fontWeight: '700' }}>${item.amount}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 15,
        paddingHorizontal: 20,
        marginBottom: 15,
        borderRadius: 15,
        borderWidth: 2
    },
})

export default Expense