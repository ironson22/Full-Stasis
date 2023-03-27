import React from "react";
import { StyleSheet, Text, View, StatusBar, Button, TouchableOpacity, Modal } from "react-native";
import colors from "../../../../Colors";
import EventModal from "./EventModal";
// This class is used to create a event list item that are show on the CalendarDay file
export default class EventList extends React.Component {
    state = {
        ShowList: false
    }
    // This function will be used to toggle the modal to show the list of events
    toggleShowList(){
        this.setState({ ShowList: !this.state.ShowList });
    }
    render() {
        // These are the list that is being passed in from the CalendarDay.js file
        // In this particular section we are going to show the amount of event complete versus what is left
        const list = this.props.list;
        const completedCount = list.events.filter(event => event.completed).length;
        const remainingCount = list.events.length - completedCount;
        return (
            <View>
                {/* This is the modal that will show the list for what is part of a specific event list */}
                <Modal animationType="slide" visible={this.state.ShowList} onRequestClose={() => this.toggleShowList()}>
                    <EventModal list={list} closeModal={() => this.toggleShowList()} updateList={this.props.updateList}/>
                </Modal>
            {/* This is the section that will be used to show the name of the event list and the color of the event list */}
                <TouchableOpacity style={[styles.listContainer, { backgroundColor: list.color}]} onPress={() => this.toggleShowList()}>
                <Text style={styles.listTitle} numberOfLines={1}>
                    {list.name}
                </Text>
                {/* This is the section that will be used to show the total number left and how many are completed */}
                <View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.count}>{remainingCount}</Text>
                        <Text style={styles.subtitle}>Remaining Events</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.count}>{completedCount}</Text>
                        <Text style={styles.subtitle}>Completed</Text>
                    </View>
                </View>
            </TouchableOpacity>
            </View>
        )
    };
}
// These are the styles that are applied to the element
const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: "center",
        width: 200
    },
    listTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: colors.white,
        marginBottom: 18
    },
    count: {
        fontSize: 48,
        fontWeight: "200",
        color: colors.white
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "700",
        color: colors.white
    }
});