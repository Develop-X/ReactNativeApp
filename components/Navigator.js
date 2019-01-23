import Login from "./Login";
import Signup from './SignupPage'
import HomePage from './HomePage';

import { createStackNavigator, createAppContainer } from "react-navigation";

const MyNavigator = createStackNavigator(
    {
        login: Login,
        signup: Signup,
        home: HomePage
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