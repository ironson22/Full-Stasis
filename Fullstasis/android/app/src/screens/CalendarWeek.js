import { StyleSheet,Text, View, StatusBar, FlatList } from "react-native";


//Sample data that will be replaced when firebase database is connect to hold data
const DATA = [
    {
        id: "1",
        title: "Monday"
    },
    {
        id: "2",
        title: "Tuesday"
    },
    {
        id: "3",
        title: "Wednesday"
    },
    {
        id: "4",
        title: "Thursday"
    },
    {
        id: "5",
        title: "Friday"
    },
    {
        id: "6",
        title: "Saturday"
    },
    {
        id: "7",
        title: "Sunday"
    },
];
//This is the creation of the element that will represent day of the week with events inside
const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        {/* Add code at a later point to take events from database and place into each event */}
    </View>
);
//This is the view that hold the page and dynamically lays out each of them
export default function CalendarWeek( { navigation } ) {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
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