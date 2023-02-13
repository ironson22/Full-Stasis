import { StyleSheet,Text, View, StatusBar, FlatList, Button } from "react-native";



//Create a function to convert the number day of the week to the word day of the week
var curDate = new Date().getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
 x = 0;
const DATA = [
    {
        id: "1",
        title: daylist[curDate+x]
    },
];
//This is the creation of the element that will represent day of the week with events inside
const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        {/* Add code at a later point to take events from database and place into each event */}
    </View>
);

export default function CalendarWeek( { navigation } ) {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
            {/* Show next button if x is greater is less than 6 */}
            
            {/* Show previous button if x is greater than 0 */}

            {/* Show create event button */}
            <Button title="Create Event" onPress={() => navigation.navigate("CreateAnEvent")} />
            {/* Show edit or delete event button */}
            <Button title="Edit/Delete Event" onPress={() => navigation.navigate("EditDelete")} />
        </View>
    );
}
//These are styles that will be applied to this page
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
        justifyContent: "space-evenly"
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "600"
    },
    title: {
        fontSize: 32,
        paddingTop: 10,
        paddingBottom: 60
    }
});