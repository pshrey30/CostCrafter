import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import EmptyList from '../Consts/EmptyList'
import BackBtn from '../Consts/BackBtn'
import Expense from '../Consts/Expense'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { getDocs, query, where } from 'firebase/firestore'
import { expensesRef } from '../../Config/firebase'


const items = [
    {
        id: 1,
        title: 'ate sandwitch',
        amount: 50,
        category: 'food',
    },
    {
        id: 2,
        title: 'bought sneakers',
        amount: 5000,
        category: 'shopping',
    },
    {
        id: 3,
        title: 'watched a movie',
        amount: 200,
        category: 'entertainment',
    },
    {
        id: 4,
        title: 'watched a movie',
        amount: 200,
        category: 'entertainment',
    },
    {
        id: 5,
        title: 'watched a movie',
        amount: 200,
        category: 'commute',
    },
    {
        id: 6,
        title: 'watched a movie',
        amount: 200,
        category: 'food',
    },
    {
        id: 7,
        title: 'watched a movie',
        amount: 200,
        category: 'food',
    },
]


const TripExpenseScreen = (props) => {
    const navigation = useNavigation();
    // console.log('props:', props);
    const { id, place, country } = props.route.params;
    const isFocused = useIsFocused();
    const [expenses, setExpenses] = useState([]);


    const fetchExpenses = async () => {
        const q = query(expensesRef, where("tripId", "==", id))
        const querySnapShot = await getDocs(q);
        let data = [];
        querySnapShot.forEach(doc => {
            //console.log("document", doc.data());
            data.push({ ...doc.data(), id: doc.id })
        })
        setExpenses(data);
    }
    useEffect(() => {
        if (isFocused)
            fetchExpenses();
    }, [isFocused])


    return (
        <View style={{ flex: 1, backgroundColor: '#F1F1F1' }}>
            <View style={styles.topcontainer}>
                <View>
                    <View style={{ position: 'relative' }}>
                        <View style={styles.backbtn}>
                            <BackBtn />
                        </View>
                        <Text style={styles.triptext}>{place}</Text>
                        <Text style={styles.triptext2}>{country}</Text>
                    </View>
                    <View style={styles.imgbanner}>
                        <Image source={require('../Assests/Images/7.png')}
                            style={{
                                height: 270,
                                width: 270
                            }}
                        />
                    </View>
                    <View style={styles.topsection}>
                        <Text style={styles.expensetext}>Expenses</Text>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("AddExpense", { id, place, country })}>
                            <Text style={{ color: 'black', fontWeight: '500' }}>Add Expense</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: 15, height: 440 }}>
                        <FlatList
                            data={expenses}
                            showsVerticalScrollIndicator={false}
                            scrollEnabled={true}
                            ListEmptyComponent={<EmptyList message={"You haven't recorded any expenses yet"} />}
                            keyExtractor={item => item.id}
                            style={{ marginBottom: 10 }}
                            renderItem={({ item }) => {
                                return (
                                    <Expense item={item} />
                                )
                            }}

                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topcontainer: {
        flex: 1,
        justifyContent: "space-between",
        height: "100%",
    },
    topsection: {
        paddingHorizontal: 25,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
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
    triptext2: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        color: 'black'
    },
    imgbanner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 10,
    },
    expensetext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    btn: {
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 2,
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    list: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 15
    }
})

export default TripExpenseScreen;