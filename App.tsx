import React from 'react';
import ReactExample from "./scenes/react_example";
import LogIn from "./scenes/LogIn";
import {SafeAreaView, ScrollView, View} from "react-native";
import {Header} from "react-native-elements";
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native'
import HeaderApp from "./scenes/Header";
import SignUp from "./scenes/SignUp";
import { createStackNavigator } from '@react-navigation/stack';
import ProfileSelector from "./scenes/ProfileSelector";
import {NamesOfComponents} from "./NamesOfComponents";
import BottomMenu from "./scenes/BottomMenu";
import MainMenu from "./scenes/MainMenu";
import HeaderButtons from "./scenes/HeaderButtons";
import Messages from "./scenes/Messages";
import SavedJobs from "./scenes/SavedJobs";
import MainNavigation from "./scenes/Navigations/MainNavigation";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const App = () => {
    return (
        <>
            {/*<NavigationContainer>*/}
            {/*    <Drawer.Navigator initialRouteName="Login">*/}
            {/*        <Drawer.Screen name="Header" component={HeaderApp}/>*/}
            {/*        /!*<Drawer.Screen name={"Settings"} component={LogIn}/>*!/*/}
            {/*        /!*<Drawer.Screen name={"SignUp"} component={SignUp}/>*!/*/}
            {/*    </Drawer.Navigator>*/}
            {/*</NavigationContainer>*/}
            <NavigationContainer>
                <Stack.Navigator headerMode={'none'} initialRouteName={'MainNavigation'}>
                    <Stack.Screen name={'MainNavigation'} component={MainNavigation}/>
                    {/*<Stack.Screen name={NamesOfComponents.SignUp} component={SignUp}/>*/}
                    {/*<Stack.Screen name={NamesOfComponents.LogIn} component={LogIn}/>*/}
                    {/*<Stack.Screen name={NamesOfComponents.ProfileSelector} component={ProfileSelector}/>*/}
                    {/*<Stack.Screen name={NamesOfComponents.BottomMenu} component={BottomMenu}/>*/}
                    {/*<Stack.Screen name={NamesOfComponents.MainMenu} component={MainMenu}/>*/}
                    {/*<Stack.Screen name={NamesOfComponents.HeaderButtons} component={HeaderButtons}/>*/}
                    {/*<Stack.Screen name={NamesOfComponents.Messages} component={Messages}/>*/}
                    {/*<Stack.Screen name={NamesOfComponents.SavedJobs} component={SavedJobs}/>*/}
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default App;
