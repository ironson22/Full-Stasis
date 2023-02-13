import { StyleSheet, Text, View, StatusBar, Button } from "react-native";
//This is the new homescreen of the application as this page will be at the top of the stack
export default function HomeScreen( { navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Hello there!</Text>
            <Text style={styles.sectionText}>Welcome to Full Stasis, Please Sign in</Text>
            <Button style={'paddingTop: 10'}
                title="Go"
                onPress={() => navigation.navigate("Login")}
            />
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
        fontWeight: "600",
        paddingBottom: 250,
        color: 'gray'
    },
    sectionText: {
        color: 'gray',
        paddingBottom: 45
    }
});