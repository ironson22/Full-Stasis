import { firebase } from "@react-native-firebase/firestore";
import firestore from "@react-native-firebase/firestore";
import { useState, useEffect, Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
//This file is still in devlopment as this page will be used to retrieve the data from the firebase firestore database to populate the event list per user that is logged in
class FireBaseApp extends Component {   
constructor(props){
    super(props);
    this.state = {
        lists: [],
    }
    getLists = async () => {
        const lists = await firestore().collection('users').doc(this.UserId).collection("lists").get();
        this.setState({ lists });
    }
}
    UserId = () => {
        return firebase.auth().currentUser.uid;
    }
}
export default FireBaseApp;