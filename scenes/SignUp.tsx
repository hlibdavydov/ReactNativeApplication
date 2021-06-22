import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from "react-native";
import {Input, Text, Card, Button} from "react-native-elements";
import CountryPicker, {Country} from 'react-native-country-picker-modal'
import {NamesOfComponents} from "../NamesOfComponents";

type SignUpProps = {
    navigation: any
}
const SignUp: React.FC<SignUpProps> = ({navigation}) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <ScrollView>
            <View>
                <Text h2 style={{alignSelf: 'center', marginVertical: 20, color: 'grey'}}>
                    User Information
                </Text>
                <Card wrapperStyle={{}}>
                    <View style={{alignItems: 'center'}}>
                        <View style={{display: 'flex', flexDirection: 'column-reverse', alignItems: "center"}}>

                        </View>
                        <Input label={'First Name'} inputStyle={{fontSize: 22}} inputContainerStyle={styles.inputField}
                               placeholder={'First Name'}
                               value={email} onChangeText={setEmail}/>
                        <Input label={'Last Name'} inputStyle={{fontSize: 22}} inputContainerStyle={styles.inputField}
                               placeholder={'Last Name'}
                               value={email} onChangeText={setEmail}/>
                        <Input label={'Email Address'} inputStyle={{fontSize: 22}}
                               inputContainerStyle={styles.inputField} placeholder={'Email Address'}
                               value={email} onChangeText={setEmail}/>
                    </View>
                    <Button title={'Create Account'} buttonStyle={{borderRadius: 10, marginHorizontal: 10, height: 60}}
                            titleStyle={{fontSize: 22}} onPress={() => {
                        navigation.navigate(NamesOfComponents.SignUp)
                    }}>
                    </Button>
                </Card>
            </View>

        </ScrollView>
    );
};

export default SignUp;
const styles = StyleSheet.create({
    inputField: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'grey',
    }
})
