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
         lists: TempData,
        //lists: [],
        user: {},
        loading: true
    }
// This function is still in development as firebase implementation is still needed to be written
    // componentDidMount() {
    //         firebase.getLists(lists => {
    //             this.setState({ lists}, () => {
    //                 this.setState({ loading: false });
    //             });
    //         });
    // }
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
        this.setState({ list: [...this.state.lists, { ...list, id: this.state.list.length + 1, events: []}]})
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
        return (
            <View style={styles.container}>
                {/* This is the modal that will be used to create new list */}
                <Modal animationType="slide" visible={this.state.addEventListVisible} onRequestClose={() => this.toggleAddEventListModal()}>
                    <AddEventsModal closeModal={() => this.toggleAddEventListModal()} addList={this.addList} />
                </Modal>
                {/* This is the title of the page */}
                <View style={{ flexDirection: "row"}}>
                    <View style={styles.divider} />
                    <Text style={styles.sectionTitle}>
                        Full<Text style={{ color: colors.blue}}>Stasis</Text>
                    </Text>
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