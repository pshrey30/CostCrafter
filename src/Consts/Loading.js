import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = () => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20
        }}>
            <ActivityIndicator size='large' color='white' />
        </View>
    )
}


const styles = StyleSheet.create({})


export default Loading