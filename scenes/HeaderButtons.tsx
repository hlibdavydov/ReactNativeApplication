import React from 'react';
import {View} from "react-native";
import {Badge, Icon, Text} from 'react-native-elements'
import {NamesOfComponents} from "../NamesOfComponents";
type props = {
    navigation: any
}
const Messages: React.FC<props> = ({navigation}) => {
    return (
       <View  style={{display: 'flex', flexDirection: 'row'}}>
           <View>
               <Icon onPress={() => {
                   navigation.navigate(NamesOfComponents.SavedJobs)
               }}
                     iconStyle={{marginHorizontal: 10}} size={30} name={'heart-outline'} type={'ionicon'}
                     color={'grey'}>
               </Icon>
               <Badge
                   value={'99+'}
                   status="success"
                   badgeStyle={{width: 30, height: 20}}
                   containerStyle={{position: 'absolute', right: -8}}
               />
           </View>
           <View>
               <Icon onPress={() => {
                   navigation.navigate(NamesOfComponents.Messages)
               }} iconStyle={{marginHorizontal: 10}} size={30} name={'chatbox-ellipses-outline'}
                     type={'ionicon'}
                     color={'grey'}/>
               <Badge
                   value={'99+'}
                   status="primary"
                   badgeStyle={{width: 30, height: 20}}
                   containerStyle={{position: 'absolute', right: -8}}
               />
           </View>
       </View>
    );
};

export default Messages;
