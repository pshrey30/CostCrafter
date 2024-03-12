import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import RandomImage from '../Assests/RandomImage'
import EmptyList from '../Consts/EmptyList'
import { signOut } from 'firebase/auth'
import { auth, tripsRef } from '../../Config/firebase'
import { useSelector } from 'react-redux'
import { doc, getDocs, query, where } from 'firebase/firestore'
import { useIsFocused } from '@react-navigation/native'


// const items = [
//     {
//         id: 1,
//         place: 'Gujarat',
//         country: 'India',
//     },
//     {
//         id: 2,
//         place: 'Raipur',
//         country: 'India',
//     },
//     {
//         id: 3,
//         place: 'Newark',
//         country: 'United States',
//     },
//     {
//         id: 4,
//         place: 'Toronto',
//         country: 'Canada',
//     },
//     {
//         id: 5,
//         place: 'Newark',
//         country: 'United States',
//     },
//     {
//         id: 6,
//         place: 'Toronto',
//         country: 'Canada',
//     },

// ]
const HomeScreen = ({ navigation }) => {

    const { user } = useSelector(state => state.user);
    const [trips, setTrips] = useState([]);

    const isFocused = useIsFocused();

    const fetchTrips = async () => {
        const q = query(tripsRef, where("userId", "==", user.uid))
        const querySnapShot = await getDocs(q);
        let data = [];
        querySnapShot.forEach(doc => {
            //console.log("document", doc.data());
            data.push({ ...doc.data(), id: doc.id })
        })
        setTrips(data);
    }
    useEffect(() => {
        if (isFocused)
            fetchTrips();
    }, [isFocused])

    const handleLogout = async () => {
        await signOut(auth);
    }


    return (
        <View style={{ flex: 1, backgroundColor: '#F1F1F1' }}>
            <View style={styles.topsection}>
                <Text style={styles.toptext}>CostCrafter</Text>
                <TouchableOpacity onPress={handleLogout} style={styles.btn}>
                    <Text style={{ color: 'black', fontWeight: '500' }}>Logout</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bannercotainer}>
                <Image source={require('../Assests/Images/banner.png')}
                    style={styles.banner}
                />
            </View>
            <View style={{ paddingHorizontal: 5 }}>
                <View style={styles.topsection}>
                    <Text style={styles.triptext}>Recent Trips</Text>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("AddTrip")}>
                        <Text style={{ color: 'black', fontWeight: '500' }}>Add Trip</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginHorizontal: 30, height: 450 }}>
                <FlatList
                    data={trips}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={<EmptyList message={"You haven't recorded any trips yet"} />}
                    keyExtractor={item => item.id}
                    columnWrapperStyle={{
                        justifyContent: 'space-between'
                    }}
                    style={{ marginBottom: 10 }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('TripExpense', { ...item })}
                                style={styles.list}>
                                <Image source={RandomImage()}
                                    style={{ height: 150, width: 150 }}
                                />
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>{item.place}</Text>
                                <Text style={{ color: 'black', fontWeight: '500', fontSize: 12 }}>{item.country}</Text>
                            </TouchableOpacity>
                        )
                    }}

                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topsection: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
    toptext: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    btn: {
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 2,
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    bannercotainer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#bde0fe'

    },
    banner: {
        height: 250,
        width: 250
    },
    triptext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    list: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 15
    }
})

export default HomeScreen;