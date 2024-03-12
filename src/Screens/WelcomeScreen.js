import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const WelcomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                <View style={styles.imagecontainer}>
                    <Image source={require('../Assests/Images/2811140.jpg')}
                        style={{ height: 380, width: 380, backgroundColor: '#F1F1F1' }}
                    />
                </View>
                <View>
                    <Text style={styles.logotxt}>CostCrafter</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}
                        style={styles.btn}>
                        <Text style={styles.btntext}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}
                        style={styles.btn}>
                        <Text style={styles.btntext}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    imagecontainer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
    logotxt: {
        textAlign: 'center',
        color: 'black',
        fontSize: 24,
        fontStyle: 'italic',
        fontWeight: '700',
        marginBottom: 25
    },
    btn: {
        backgroundColor: "#38b000",
        marginHorizontal: 30,
        padding: 12,
        borderRadius: 25,
        marginBottom: 20,
    },
    btntext: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
        color: 'white'
    }
})

export default WelcomeScreen;