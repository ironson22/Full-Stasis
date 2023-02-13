import { StyleSheet,Text, View, StatusBar, Button } from "react-native";


//This page will be used to allow the users to be able to see and manage some setting for this application
export default function Settings( { navigation } ) {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Full Stasis</Text>
            {/* Show the user.email if signed in with Google account */}

            {/* Show username if the user is using a stored account */}
            
            {/* Allow user to change credentials if they have a stored username and password */}

            {/* Allow the user to sign out */}
            <Button style={styles.sectionButton} title="Sign Out" onPress={() => auth().signOut()} />
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