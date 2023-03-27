import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button, FlatList, KeyboardAvoidingView, TextInput, Keyboard } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../../Colors';
// This function is used to show the list of task and the button and the way that the task can be modified
export default class EventModal extends React.Component {
    // this state is used to keep track of the new task that is being added
    state = {
        newEvent: ""
    }
    // This function is used to toggle the completed state of the task
    toggleEventCompleted = index => {
        let list = this.props.list;
        list.events[index].completed = !list.events[index].completed;
        this.props.updateList(list);
    }
    // This function is used to add a new task to the list
    addEvent = () => {
        let list = this.props.list;
        list.events.push({title: this.state.newEvent, completed: false});
        this.props.updateList(list);
        this.setState({newEvent: ""});
        Keyboard.dismiss();
    }
    // This function is used to render the task with special css that will change the item based off if the event is marked completed or not
    renderEvent = (event, index) => {
        return (
        <View style={styles.eventContainer}>
            <TouchableOpacity>
            {/* Create a sqaure using a button */}
                <Button 
                    title=''
                    size={24}
                    color={event.completed ? colors.gray: colors.white}
                    borderRadius={1}
                    borderColor={colors.gray}
                    style={{height: 10, width: 10}}
                    onPress={() => this.toggleEventCompleted(index)}
                />
            </TouchableOpacity>
            <Text style={[styles.event, {textDecorationLine: event.completed ? "line-through" : "none", color: event.completed ? colors.gray : colors.black}]}>{event.title}</Text>
        </View>
        )
    }
    // This render function hold all of the function of code that are used to create buttons, text and the exit button
  render() {
    //These are the variables that are used to keep track of the list and the amount of task that are completed and the amount of task that are left
    const list = this.props.list;
    const taskCount = list.events.length;
    const completedCount = list.events.filter(event => event.completed).length;
    return (
        // This is the button to be used to exit the model by setting the state back to is default
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={{ position: 'absolute', top: 64, right: 32, zIndex: 10}}>
        <Button
            name='close'
            size={24}
            color='#000000'
            title="X"
            onPress={this.props.closeModal}
            />
        </TouchableOpacity>
        {/* This is the section that will be used to display the name of the list and the amount of task that are completed and the amount of task that are left */}
        <View style={[styles.section, styles.header, {borderBottomColor: list.color}]}>
            <View>
                <Text style={styles.title}>{list.name}</Text>
                <Text style={styles.taskCount}>
                    {completedCount}  of {taskCount} Events
                </Text>
            </View>
        </View>
        {/* This is the section that will be used to display the list of task */}
        <View style={[styles.section, {flex: 3}]}>
            <FlatList
                data={list.events}
                renderItem={({ item, index }) => this.renderEvent(item, index)}
                keyExtractor={item => item.title}
                contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 64 }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="always"
            />
        </View>
        {/* This is the section that will be used to add a new task to the list using text input */}
        <View style={[styles.section, styles.footer]}>
            <TextInput style={[styles.input, {borderColor: list.color}]} placeholder='Add Event' onChangeText={text => this.setState({ newEvent: text})} value={this.state.newEvent}></TextInput>
            <TouchableOpacity style={[styles.addEvent, {backgroundColor: list.color}]}>
            <Button
                title="Add Event"
                onPress={() => this.addEvent()}
                />
            </TouchableOpacity>
        </View>
      </SafeAreaView>
      </KeyboardAvoidingView>
    )
  }
}
// This is the css that is used for this element
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    section: {
        flex: 1,
        alignSelf: "stretch"
    },
    header: {
        justifyContent: "flex-end",
        marginLeft: 64,
        borderBottomWidth: 3
    },
    title: {
        fontSize: 30,
        fontWeight: "800",
        color: colors.black
    },
    taskCount: {
        marginTop: 4,
        marginBottom: 16,
        color: colors.gray,
        fontWeight: "600"
    },
    footer: {
        paddingHorizontal: 32,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        flex: 1,
        height: 48,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        marginRight: 8,
        paddingHorizontal: 8,
        color: colors.black
    },
    addEvent: {
        borderRadius: 4,
        padding: 16,
        alignItems: "center",
        justifyContent: "center"
    },
    eventContainer: {
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center"
    },
    event: {
        color: colors.black,
        fontWeight: "700",
        fontSize: 16,
        marginLeft: 16,
    }
});
