import EventList from "./EventList";
import EventForm from "./EventForm"
import { createStackNavigator, createAppContainer } from "react-navigation";

const MyNavigator = createStackNavigator(
    {
        list: EventList,
        form: EventForm
    },
    {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#000',
            },
        },
    }
);

const AppContainer = createAppContainer(MyNavigator);

export default AppContainer;