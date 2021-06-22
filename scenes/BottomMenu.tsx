import React, {useState} from 'react';
import {View} from "react-native";
import {Tab, TabView, Text, Input, Button} from 'react-native-elements';

type props = {
    navigation: any
}
const BottomMenu: React.FC<props> = ({navigation}) => {
    const [index, setIndex] = useState(0);
    return (
        <View style={{display: 'flex', flex: 1}}>
            <TabView value={index} onChange={setIndex}>
                <TabView.Item style={{ width: '100%'}}>
                    <Text h1 style={{alignSelf: 'center', marginTop: 100}}>Home screen</Text>
                </TabView.Item>
                <TabView.Item style={{ width: '100%'}}>
                    <Text h1 style={{alignSelf: 'center', marginTop: 100}}>Side jobs</Text>
                </TabView.Item>
                <TabView.Item style={{ width: '100%'}}>
                    <Text h1 style={{alignSelf: 'center', marginTop: 100}}>Jobs</Text>
                </TabView.Item>
                <TabView.Item style={{ width: '100%'}}>
                    <Text h1 style={{alignSelf: 'center', marginTop: 100}}>Alerts</Text>
                </TabView.Item>
            </TabView>
            <View>
                <Tab value={index} onChange={setIndex} variant={'primary'} style={{backgroundColor: 'black'}}>
                    <Tab.Item containerStyle={{backgroundColor: 'white'}}  buttonStyle={{backgroundColor: 'white'}} titleStyle={{color: 'grey', fontSize: 10}} title="Home"
                              icon={{name: 'home-outline', type: 'ionicon'}}/>
                    <Tab.Item containerStyle={{backgroundColor: 'white'}} buttonStyle={{backgroundColor: 'white'}} titleStyle={{color: 'grey', fontSize: 10}} title="Side Job"
                              icon={{name: 'time-outline', type: 'ionicon'}}/>
                    <Tab.Item containerStyle={{backgroundColor: 'white'}} buttonStyle={{backgroundColor: 'white'}} titleStyle={{color: 'grey', fontSize: 10 }} title="Jobs"
                              icon={{name: 'search-outline', type: 'ionicon'}}/>
                    <Tab.Item containerStyle={{backgroundColor: 'white'}} buttonStyle={{backgroundColor: 'white'}} titleStyle={{color: 'grey', fontSize: 10 }} title="Alerts"
                              icon={{name: 'notifications-outline', type: 'ionicon'}}/>
                </Tab>
            </View>
        </View>
    );
};

export default BottomMenu;
