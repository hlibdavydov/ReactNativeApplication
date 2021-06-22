import React from 'react';
import {Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, TextInput, View} from "react-native";
import {Icon, Button, Input, Divider, Text} from "react-native-elements";
import HeaderApp from "./Header";
import {NamesOfComponents} from "../NamesOfComponents";

type LogInProps = {
    navigation: any
}
const LogIn: React.FC<LogInProps> = ({navigation}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <SafeAreaView>
            <ScrollView>
                {/*<HeaderApp navigation={navigation}/>*/}
                <Image
                    source={{uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.monarchballroomdance.com%2Fwp-content%2Fuploads%2F2017%2F02%2Flogo-placeholder.png&f=1&nofb=1'}}
                    style={{
                        width: windowWidth * 0.8,
                        height: windowHeight * 0.2,
                        alignSelf: 'center',
                        marginTop: 100
                    }}
                />
                <View style={styles.logInBox}>
                    <Input placeholder={'Username or Email'} leftIcon={{type: 'material', name: 'email', color: 'grey'}}/>
                    <Input placeholder={'Password'} leftIcon={{type: 'material', name: 'lock', color: 'grey'}}
                           secureTextEntry={true}/>
                    <Button title={'Login'}
                            onPress={()=>{navigation.navigate(NamesOfComponents.MainMenu)}}
                            buttonStyle={{height: 60, borderRadius: 10, margin: 10, backgroundColor: '#00B2CE'}}
                            titleStyle={{textTransform: 'uppercase'}}/>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: "center", marginHorizontal: 15}}>

                        <Divider style={{flexGrow: 1}}
                                 width={2}
                        />
                        <Text style={{marginHorizontal: 10, color: 'grey'}}>
                            Or
                        </Text>
                        <Divider style={{flexGrow: 1}}
                                 width={2}
                        />
                    </View>
                    <Button iconPosition={'left'} icon={{type: 'material', name: 'facebook', color: 'white', size: 30}}
                            title={'Facebook Login'} buttonStyle={{
                        height: 60,
                        borderRadius: 10,
                        margin: 10,
                        backgroundColor: "#3b5998",
                    }}
                            titleStyle={{textTransform: 'uppercase'}}/>
                    <View
                        style={{display: "flex", flexDirection: 'row', alignItems: "center", justifyContent: "center"}}>
                        <Text>
                            Don't have an account?
                        </Text>
                        <Button type={'clear'} title={'sign up'}
                                titleStyle={{textTransform: 'capitalize', fontWeight: 'bold'}}
                                onPress={ () => navigation.navigate(NamesOfComponents.ProfileSelector)}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LogIn;
const styles = StyleSheet.create({
    textInput: {
        marginHorizontal: 30,
        fontSize: 22,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        flexGrow: 1,
    },
    logInBox: {
        marginTop: 100,
        marginHorizontal: 20
    },
    iconText: {
        display: 'flex',
        flexDirection: 'row'
    },
    icon: {}
})
