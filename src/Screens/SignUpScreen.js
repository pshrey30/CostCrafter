import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import BackBtn from '../Consts/BackBtn'
import { useNavigation } from '@react-navigation/native'
import Snackbar from 'react-native-snackbar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Config/firebase';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Consts/Loading';
import { setUserLoading } from '../Redux/Slices/user';


const SignUpScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { userLoading } = useSelector(state => state.user);

    const dispatch = useDispatch();

    const handleSignUp = async () => {
        if (email && password) {
            //good good

            try {
                dispatch(setUserLoading(true));
                await createUserWithEmailAndPassword(auth, email, password)
                dispatch(setUserLoading(false));
            } catch (e) {
                dispatch(setUserLoading(false));
                Snackbar.show({
                    text: e.message,
                    backgroundColor: 'red'
                });
            }
        } else {
            //Show error here
            Snackbar.show({
                text: 'Email and password is required',
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
                            <Text style={styles.triptext}>Sign Up</Text>
                        </View>
                        <View style={styles.imgbanner}>
                            <Image source={require('../Assests/Images/signup.png')}
                                style={{
                                    height: 300,
                                    width: 300
                                }}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.txt}>Email</Text>
                            <TextInput
                                value={email}
                                placeholder='Enter your Email'
                                onChangeText={value => setEmail(value)}
                                style={styles.inpt}
                            />
                            <Text style={styles.txt}>Password</Text>
                            <TextInput
                                value={password}
                                placeholder='Enter your password'
                                secureTextEntry
                                onChangeText={value => setPassword(value)}
                                style={styles.inpt}
                            />
                        </View>
                    </View>
                    <View style={styles.Tripbtn}>
                        {
                            userLoading ? (
                                < Loading />
                            ) : (
                                <TouchableOpacity onPress={handleSignUp}>
                                    <Text style={styles.btntext}>Sign Up</Text>
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
        position: 'relative',
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
        marginBottom: 15,
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


export default SignUpScreen;