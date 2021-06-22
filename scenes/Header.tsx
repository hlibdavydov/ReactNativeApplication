import React, {FC} from 'react';
import {View} from "react-native";
import {Header} from 'react-native-elements';

type HeaderProps = {
    navigation: any
}
const HeaderApp: FC<HeaderProps> = ({navigation}) => {
    return (
        <>
            <Header
                leftComponent={{icon: 'menu', color: '#fff', iconStyle: {color: '#fff'}, onPress: ()=>{
                    navigation.toggleDrawer();
                    }}}
                centerComponent={{text: 'Login', style: {color: '#fff'}}}
            />
        </>
    );
};

export default HeaderApp;
