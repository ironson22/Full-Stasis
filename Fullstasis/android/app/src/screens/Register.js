import { StyleSheet,Text, View, StatusBar, TextInput } from "react-native";
//This page will be used to allow for the user to create account that are not google login based
export default function Register( { navigation } ) {
    return (
        <View style={styles.container}>
            <TextInput
            placeholder="Username">
            </TextInput>

            <TextInput
            secureTextEntry={true}
            placeholder="Password">
            </TextInput>

            <StatusBar style="auto" />
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