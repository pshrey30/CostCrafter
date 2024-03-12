import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BackBtn from '../Consts/BackBtn'
import Loading from '../Consts/Loading'
import Snackbar from 'react-native-snackbar';
import { useSelector } from 'react-redux';
import { addDoc } from 'firebase/firestore';
import { tripsRef } from '../../Config/firebase';
import { useNavigation } from '@react-navigation/native';

const AddTripScreeen = () => {
    const navigation = useNavigation();
    const [place, setPlace] = useState('')
    const [country, setCountry] = useState('')
    const [loading, setLoading] = useState(false)

    const { user } = useSelector(state => state.user);


    const handleAddTrip = async () => {
        if (place && country) {
            //good good
            setLoading(true);
            let doc = await addDoc(tripsRef, {
                place,
                country,
                userId: user.uid,
            });
            setLoading(false);
            if (doc && doc.id) {
                navigation.goBack();
            }
        } else {
            //Show error here
            Snackbar.show({
                text: 'Place and country is required',
                backgroundColor: 'red'
            });
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: "'#F1F1F1'" }}>
            <ScrollView>


                <View style={styles.topcontainer}>
                    <View>
                        <View style={{ position: 'relative' }}>
                            <View style={styles.backbtn}>
                                <BackBtn />
                            </View>
                            <Text style={styles.triptext}>Add Trip</Text>
                        </View>
                        <View style={styles.imgbanner}>
                            <Image source={require('../Assests/Images/4.png')}
                                style={{
                                    height: 350,
                                    width: 350
                                }}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.txt}>Where on the Earth?</Text>
                            <TextInput
                                value={place}
                                onChangeText={value => setPlace(value)}
                                style={styles.inpt}
                            />
                            <Text style={styles.txt}>Which Country?</Text>
                            <TextInput
                                value={country}
                                onChangeText={value => setCountry(value)}
                                style={styles.inpt}
                            />
                        </View>

                    </View>
                    <View style={styles.Tripbtn}>
                        {
                            loading ? (
                                <Loading />
                            ) : (
                                <TouchableOpacity onPress={handleAddTrip}>
                                    <Text style={styles.btntext}>Add Trip</Text>
                                </TouchableOpacity>
                            )
                        }

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    topcontainer: {
        flex: 1,
        justifyContent: "space-between",
        height: "100%",
    },
    backbtn: {
        height: 30,
        width: 30,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15,
        top: 25,
        left: 15
    },
    triptext: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    imgbanner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    inputContainer: {
        marginTop: 10,
        padding: 30,
    },
    txt: {
        paddingHorizontal: 10,
        marginBottom: 8,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    inpt: {
        paddingHorizontal: 15,
        marginBottom: 25,
        backgroundColor: 'white',
        borderRadius: 40,
    },
    Tripbtn: {
        backgroundColor: "#38b000",
        marginHorizontal: 30,
        padding: 12,
        borderRadius: 20,
        marginBottom: 25,
    },
    btntext: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
        color: 'white'
    }
})


export default AddTripScreeen; 