import { StyleSheet, Text, View, StatusBar, Button } from "react-native";
import colors from "../../../../Colors";
//This is the new homescreen of the application as this page will be at the top of the stack
export default function HomeScreen( { navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row"}}>
                <View style={styles.divider} />
                <Text style={styles.sectionTitle}>
                    Full<Text style={{ color: colors.blue}}>Stasis</Text>
                </Text>
            </View>

            <View style={{marginVertical: 38}}>
                <Button style={'paddingTop: 10'}
                    title="Go"
                    onPress={() => navigation.navigate("Login")}
                />
            </View>
            
            <StatusBar style="auto" />
        </View>
    ); 
}
//These are styles that will be applied to this page
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center"
    },
    sectionTitle: {
        fontSize: 38,
        fontWeight: "800",
        color: colors.black,
        paddingHorizontal: 64
    },
    sectionText: {
        color: 'gray',
        paddingBottom: 45
    },
    divider: {
        backgroundColor: colors.lightBlue,
        height: 1,
        flex: 1,
        alignSelf: "center"
    }
});