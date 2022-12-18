import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '589949345913-620ulcn99fiqa4khajmae496hohmcqg7.apps.googleusercontent.com',
  });

export default function App() {
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


    if (initializing) return null;

    if (!user) {
        return (
            <View style={styles.container}>
            <Text style={styles.sectionTitle}>Full Stasis</Text>
            <Text>Login</Text>
            <Button title="Google Sign-In" onPress={() => this.onGoogleButtonPress().then(() => console.log('Signed in with Google!'))} />
            </View>
        );
    }


    return (
        <View style={styles.container}>
        <Text style={styles.sectionTitle}>Full Stasis</Text>
        <Text>Welcome {user.email}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        fontWeight: "600"
    },
    container: {
        flex: 1,
        backgroundColor: "lightblue",
        alignItems: "center",
        justifyContent: "center"
    }
});

