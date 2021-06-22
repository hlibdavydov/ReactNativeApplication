import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {NamesOfComponents} from "../../NamesOfComponents";
import {Settings} from "react-native";
import LogIn from "../LogIn";
import LogInNavigation from "./LogInNavigation";
import SignUpNavigation from "./SignUpNavigation";

const MainNavigation = () => {
    const Stack = createStackNavigator();
    return (
            <Stack.Navigator headerMode="none">
                <Stack.Screen name={'LogInNavigation' } component={LogInNavigation}/>
                <Stack.Screen name={'SignUpNavigation'} component={SignUpNavigation}/>
            </Stack.Navigator>
    );
};

export default MainNavigation;
