import { StyleSheet,Text, View, StatusBar, FlatList, Button, TouchableOpacity, Modal, ActivityIndicator } from "react-native";
import colors from "../../../../Colors";
import TempData from "../../../../TempData";
import EventList from "../components/EventList";
import AddEventsModal from "../components/AddEventsModal";
import React, { useState } from "react";
import { firebase } from "@react-native-firebase/firestore";
import Fire from "../../../../Fire";
//Create a function to convert the number day of the week to the word day of the week
var curDate = new Date().getDay();
export default class CalendarWeek extends React.Component {
    state = {
        addEventListVisible: false,
        //Sample Data(Uncomment this and comment firebase data to use the sample data file)
        //lists: TempData,
        //Firebase data(uncomment this and comment SampleData to use the firebase collection)
        lists: [],
        //User data
        user: {},
        loading: true
    }
// This function is used for firebase data retrieval(comment out this function if using sample data)
     componentDidMount() {
        //This might be another way to do this action---
        //let user = firebase.auth().currentUser;
        //let ref = firebase.firestore().collection('users').doc(user.uid).collection("lists");
        //this.unsubscribe = ref.onSnapshot(this.onCollectionUpdate);
        // this.setState({ user: user, list: list, loading: false });

        fire2 = new Fire((error, user) => {
            if (error) {
                return alert("Something went wrong");
            }

            //set state for both the list array and the user state
        fire2.getLists(lists => {
                this.setState({ lists, user}, () => {
                    this.setState({loading: false}) 
                });
            }
        )

            //Set the user state to the user that is logged in
            this.setState({ user });
        });

     }
    //This will set the state to show the pop up to be able to create a event list
    toggleAddEventListModal() {
        this.setState({ addEventListVisible: !this.state.addEventListVisible });
    }
    //This function will allow us to modify our list with the updatelist fuction
    renderList = list => {
        return <EventList list={list} updateList={this.updateList} />
    }
    //This function will allow us to add a event event list list
    addList = list => {
        this.setState({ lists: [...this.state.lists, { ...list, id: this.state.lists.length + 1, events: []}]})
    }
    //This function will allow us to update the list with the new event
    updateList = list => {
        this.setState({
            lists: this.state.lists.map(item => {
                return item.id === list.id ? list : item;
            }
        )});
    }
    render(){
        //Loading screen
        if (this.state.loading) {
            return(
                <View style={styles.container}>
                    <ActivityIndicator size="large" color={colors.blue} />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                {/* This is the modal that will be used to create new list */}
                <Modal animationType="slide" visible={this.state.addEventListVisible} onRequestClose={() => this.toggleAddEventListModal()}>
                    <AddEventsModal closeModal={() => this.toggleAddEventListModal()} addList={this.addList} />
                </Modal>
                {/* Testing code ____________________________________________________________________________ */}
                
                {/* This is the title of the page */}
                <View style={{ flexDirection: "row"}}>
                    <View style={styles.divider} />
                    <Text style={styles.sectionTitle}>
                        Full<Text style={{ color: colors.blue}}>Stasis</Text>
                    </Text>
                    <View>
                    <Text style={{color: colors.black}}>User: {this.state.user.uid}</Text>
                    </View>
                    <View style={styles.divider} />
                </View>
                {/* This is the button to be used to click to add event list to the page */}
                <View style={{marginVertical: 48}}>
                    <TouchableOpacity style={styles.addEventList}>
                        <Button
                            title="Add Event List"
                            onPress={() => this.toggleAddEventListModal()}
                        />
                    </TouchableOpacity>
                </View>
                {/* This is the section that will be used to display the event lists */}
                <View style={{height: 275, paddingLeft: 32}}>
                    <FlatList
                        data={this.state.lists}
                        keyExtractor={item => item.name}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => this.renderList(item)}
                    />
                </View>
            </View>
        );
    }
}
//These are styles that will be applied to this page
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center"
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "600"
    },
    title: {
        fontSize: 38,
        fontWeight: "800",
        color: colors.black,
        paddingHorizontal: 64
    },
    sectionTitle: {
        fontSize: 38,
        fontWeight: "800",
        color: colors.black,
        paddingHorizontal: 64
    },
    divider: {
        backgroundColor: colors.lightBlue,
        height: 1,
        flex: 1,
        alignSelf: "center"
    },
    addEventList: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 4,
        padding: 16,
        alignItems: "center",
        justifyContent: "center"
    },
});