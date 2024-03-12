import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import LeftArrow from '../Assests/SvgComponents/LeftArrow'

const BackBtn = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <LeftArrow color="black" />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({})

export default BackBtn;