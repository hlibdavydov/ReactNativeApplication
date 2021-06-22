import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {NamesOfComponents} from "../../NamesOfComponents";
import LogIn from "../LogIn";
import {Settings} from "react-native";
import MainMenu from "../MainMenu";
import SignUp from "../SignUp";
import ProfileSelector from "../ProfileSelector";
import Messages from "../Messages";
import SavedJobs from "../SavedJobs";

const LogInNavigation = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator headerMode={'float'} initialRouteName={NamesOfComponents.LogIn}>
            <Stack.Screen name={NamesOfComponents.LogIn} component={LogIn}/>
            <Stack.Screen options={{headerShown:false}} name={NamesOfComponents.MainMenu} component={MainMenu}/>
            <Stack.Screen options={{headerShown: true, headerTitle: 'Back'}} name={NamesOfComponents.Messages} component={Messages}/>
            <Stack.Screen name={NamesOfComponents.SavedJobs} component={SavedJobs}/>
            <Stack.Screen name={NamesOfComponents.ProfileSelector} component={ProfileSelector}/>
            <Stack.Screen name={NamesOfComponents.SignUp} component={SignUp}/>
        </Stack.Navigator>
    );
};

export default LogInNavigation;
