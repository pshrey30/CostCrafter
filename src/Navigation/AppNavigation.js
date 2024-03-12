import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import HomeScreen from '../Screens/HomeScreen'
import AddTripScreeen from '../Screens/AddTripScreeen';
import AddExpenseScreen from '../Screens/AddExpenseScreen';
import TripExpenseScreen from '../Screens/TripExpenseScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';

//auth
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, getReactNativePersistence } from 'firebase/auth';
import { auth } from '../../Config/firebase';
import { setUser } from '../Redux/Slices/user';

const Stack = createStackNavigator();

const AppNavigation = () => {
    const { user } = useSelector(state => state.user);

    const dispatch = useDispatch();
    onAuthStateChanged(auth, u => {
        console.log('got user', u);
        dispatch(setUser(u));
    })
    if (user) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
                    <Stack.Screen options={{ headerShown: false }} name="AddTrip" component={AddTripScreeen} />
                    <Stack.Screen options={{ headerShown: false }} name="AddExpense" component={AddExpenseScreen} />
                    <Stack.Screen options={{ headerShown: false }} name="TripExpense" component={TripExpenseScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Welcome'>
                    <Stack.Screen options={{ headerShown: false, presentation: 'modal' }} name="SignIn" component={SignInScreen} />
                    <Stack.Screen options={{ headerShown: false, presentation: 'modal' }} name="SignUp" component={SignUpScreen} />
                    <Stack.Screen options={{ headerShown: false, }} name="Welcome" component={WelcomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

}


const styles = StyleSheet.create({})

export default AppNavigation;