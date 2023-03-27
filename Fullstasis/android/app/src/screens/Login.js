import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, Modal, Linking } from "react-native";
import auth from "@react-native-firebase/auth";
import firestore, { firebase } from "@react-native-firebase/firestore"
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import colors from "../../../../Colors";
// Configure Google Sign In
// TODO: Encrpt Client Api to protect Application against malicious attempts 
GoogleSignin.configure({
    webClientId: '589949345913-620ulcn99fiqa4khajmae496hohmcqg7.apps.googleusercontent.com',
  });
// Author : Vincent Sanchez
// Purpose : The purpose of this file currently is to allow the user to login with Google and then display their email address, This will later be used to associate a user with their calendar events
// To start application run "npx react-native run-android" in the terminal due to the use of react-native-firebase
// Todo: Take the user Token and Encrypt it using React Native Package
export default function Login( {navigation} ) {
    //set an intializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    //Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    //Create a function to handle the Google Sign In
    onGoogleButtonPress = async () =>{
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken); 
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      }
    // If we are still initializing, show a loading screen
    if (initializing) return null;
    //   If no user is currently logged in, show the login page to allow the user to use the google login or show them the register button to direct them to create an account
    if (!user) {
        return (
            <View style={styles.container}>
            <Text style={styles.sectionTitle}>Please sign in below.</Text>
            <Button title="Google Sign-In" onPress={() => this.onGoogleButtonPress().then(() => console.log('Signed in with Google!'))} />
            <Button title="Register for a Google Account" onPress={() => Linking.openURL('https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp')}/>
            </View>
        );
    }
// if there is a user logged in, show the user's email address
    return (
        <View style={styles.container}>
        <Text style={styles.sectionTitle}>Welcome: {user.email}</Text>
        <Text style={styles.sectionTitle}>Uid:{user.uid}</Text>
        {/* If we have a user allow them to go to CalendarDay */}
        <Button style={styles.sectionButton} title="Daily Calendar" onPress={() => navigation.navigate("CalendarDay", user)} />
        {/* If we have a user allow them to logout */}
        <Button style={styles.sectionButton} title="Sign Out" onPress={() => auth().signOut()} />
        </View>
    );
}
//These are styles that will be applied to this page
const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 15,
        fontWeight: "600",
        paddingBottom: 20,
        color: 'black',
        justifyContent: "center",
        paddingLeft: 50
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
        //alignItems: "center",
        justifyContent: "space-evenly"
    },
    loginTextInput: {
        borderWidth: .5,
        borderColor: 'gray',
        margin: 20,
        paddingBottom: 15
    },
    sectionButton: {
        borderWidth: .5,
        borderColor: 'gray',
    }
});