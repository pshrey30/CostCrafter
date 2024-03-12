import { Image, StyleSheet, TextInput, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Snackbar from 'react-native-snackbar'
import BackBtn from '../Consts/BackBtn'
import { useNavigation } from '@react-navigation/native'
import { categories } from '../Consts/Categories'
import Loading from '../Consts/Loading'
import { addDoc } from 'firebase/firestore'
import { expensesRef } from '../../Config/firebase'

const AddExpenseScreen = (props) => {
    let { id } = props.route.params;
    const navigation = useNavigation();

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [loading, setLoading] = useState(false)

    const handleAddExpense = async () => {
        if (title && amount && category) {
            //good good
            //navigation.goBack();
            setLoading(true);
            let doc = await addDoc(expensesRef, {
                title,
                amount,
                category,
                tripId: id
            })
            setLoading(false);
            if (doc && doc.id)
                navigation.goBack();
        } else {
            //Show error here
            Snackbar.show({
                text: 'Please fill all the fields',
                backgroundColor: 'red'
            });
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#F1F1F1" }}>
            <ScrollView>
                <View style={styles.topcontainer}>
                    <View>
                        <View style={{ position: 'relative' }}>
                            <View style={styles.backbtn}>
                                <BackBtn />
                            </View>
                            <Text style={styles.triptext}>Add Expense</Text>
                        </View>
                        <View style={styles.imgbanner}>
                            <Image source={require('../Assests/Images/expenseBanner.png')}
                                style={{
                                    height: 250,
                                    width: 250
                                }}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.txt}>For what?</Text>
                            <TextInput
                                value={title}
                                onChangeText={value => setTitle(value)}
                                style={styles.inpt}
                            />
                            <Text style={styles.txt}>How much?</Text>
                            <TextInput
                                value={amount}
                                onChangeText={value => setAmount(value)}
                                style={styles.inpt}
                            />
                        </View>
                        <View style={{ paddingHorizontal: 30, marginTop: 10 }}>
                            <Text style={styles.txt}>Category</Text>
                            <View style={styles.catcontainer}>
                                {
                                    categories.map(cat => {
                                        return (
                                            <TouchableOpacity onPress={() => setCategory(cat.value)}
                                                key={cat.value}
                                                style={[
                                                    styles.catbtn,
                                                    category === cat.value && { backgroundColor: '#ff99c8' }
                                                ]}
                                            >
                                                <Text style={{ color: 'black' }}>{cat.title}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        </View>

                    </View>
                    <View style={styles.Expensebtn}>
                        {
                            loading ? (
                                <Loading />
                            ) : (
                                <TouchableOpacity onPress={handleAddExpense}>
                                    <Text style={styles.btntext}>Add Expense</Text>
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
        marginTop: 20,
        paddingHorizontal: 30,
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
    Expensebtn: {
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
    },
    catcontainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginRight: 10,

    },
    catbtn: {
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderRadius: 25,
    }
})

export default AddExpenseScreen;
