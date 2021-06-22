import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {NamesOfComponents} from "../../NamesOfComponents";
import LogIn from "../LogIn";
import {Settings} from "react-native";

const SignUpNavigation = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name={NamesOfComponents.SignUp} component={LogIn} />
        </Stack.Navigator>
    );
};

export default SignUpNavigation;
