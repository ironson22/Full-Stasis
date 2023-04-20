import HomeScreen from "./android/app/src/screens/HomeScreen";
import Login from "./android/app/src/screens/Login";
import Settings from "./android/app/src/screens/Settings";
import CreateAnEvent from "./android/app/src/screens/CreateAnEvent";
import CalendarWeek from "./android/app/src/screens/CalendarWeek";
import CalendarDay from "./android/app/src/screens/CalendarDay";
import EditDelete from "./android/app/src/screens/EditDelete";
import Register from "./android/app/src/screens/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { LogBox } from "react-native";

//This is only here for the capstone showcase remove after
LogBox.ignoreAllLogs();

//Create a stack for us to use for navigation
const Stack = createNativeStackNavigator();
//In this section we are using React navigation to be able to add each of the pages to a stack that is being to for the button to navigate between
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home"}}/>
                <Stack.Screen name="Login" component={Login} options={{title: "Login"}}/>
                <Stack.Screen name="Settings" component={Settings} options={{title: "User Settings"}}/>
                <Stack.Screen name="CreateAnEvent" component={CreateAnEvent} options={{title: "Create an Event"}}/>
                <Stack.Screen name="CalendarWeek" component={CalendarWeek} options={{title: "Week"}}/>
                <Stack.Screen name="CalendarDay" component={CalendarDay} options={{title: "Daily"}}/>
                <Stack.Screen name="EditDelete" component={EditDelete} options={{title: "Edit an Event"}}/>
                <Stack.Screen name="Register" component={Register} options={{title: "Register a User"}}/>
            </Stack.Navigator>
        </NavigationContainer>
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