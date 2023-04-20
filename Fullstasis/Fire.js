import { firebase } from "@react-native-firebase/firestore";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import { useState, useEffect, Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
//This file is still in devlopment as this page will be used to retrieve the data from the firebase firestore database to populate the event list per user that is logged in

//Remove if break file
const firebaseConfig = {
    apiKey: "AIzaSyDVPGMogtN3aFfAZN-OZcxagYLO54tnmSQ",
    authDomain: "full-stasis.firebaseapp.com",
    projectId: "full-stasis",
    storageBucket: "full-stasis.appspot.com",
    messagingSenderId: "589949345913",
    appId: "1:589949345913:web:3a74149fc9ae6876c734a8",
    measurementId: "G-QXC9CDKF0W"
  };

class Fire {
    constructor(callback) {
        this.init(callback);
    }
    init(callback){
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback(null, user)
            }
            else{
                firebase
                .auth()
                .signInAnonymously()
                .catch(error => {
                    callback(error);
                });
            }
        });
    }
   
    getLists(callback) {
        let ref = firebase
        .firestore()
        .collection('users')
        .doc(this.userId)
        .collection("lists")

        this.unsubscribe = ref.onSnapshot(snapshot => {
            lists = []

            snapshot.forEach(doc => {
                lists.push({id: doc.id, ...doc.data()})
            });

            callback(lists);
        });
    }

    get userId() {
        return firebase.auth().currentUser.uid;
    }
}
export default Fire;