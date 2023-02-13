import { StyleSheet,Text, View, StatusBar, TextInput, Button } from "react-native";
//This page will allow the signed in user to create an event that will be show in either the weekly or daily calendar
export default function CreateAnEvent() {
    return (
        <View style={styles.container}>
            <TextInput
            placeholder="Event Name">
            </TextInput>

            <TextInput
            placeholder="Event Data">
            </TextInput>

            <TextInput
            placeholder="Event Time">
            </TextInput>

            <Button title="Create" onPress={() => navigation.navigate("Login")} />
        </View>
    );
}
//These are styles that will be applied to this page
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
        alignItems: "center",
        justifyContent: "center"
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "600"
    }
});