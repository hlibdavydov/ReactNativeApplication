import React from 'react';
import {View} from "react-native";
import {Header, Icon, Badge} from "react-native-elements";
import BottomMenu from "./BottomMenu";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import {NamesOfComponents} from "../NamesOfComponents";
import Messages from "./Messages";
import HeaderButtons from "./HeaderButtons";

type props = {
    navigation: any
}

const MainMenu: React.FC<props> = ({navigation}) => {
    const Stack = createStackNavigator();
    const rightComponent = () => {
        return (
                <HeaderButtons navigation={navigation}/>
        )
            ;
    }
    return (
        <>
            <Header
                containerStyle={{backgroundColor: 'white'}}
                leftComponent={{icon: 'menu',}}
                centerComponent={{text: 'MY TITLE',}}
                rightComponent={rightComponent()}/>
            <BottomMenu navigation={navigation}/>
        </>
    );

};

export default MainMenu;
