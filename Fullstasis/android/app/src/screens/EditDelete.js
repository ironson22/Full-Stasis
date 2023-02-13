import { StyleSheet,Text, View, StatusBar } from "react-native";
//This will allow the signed user to edit the events that they have already created
export default function EditDelete() {
    return (
        <View style={styles.container}>
            <TextInput
            placeholder="Event Name">
            </TextInput> <TextInput
            placeholder="Event Data">
            </TextInput> <TextInput
            placeholder="Event Time">
            </TextInput>
            <Button title="Submit Edits" onPress={() => navigation.navigate("Login")} />
            <Button title="Delete" onPress={() => navigation.navigate("Login")} />
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