import React, {useState} from 'react';
import {ScrollView, View} from "react-native";
import {Button, ButtonGroup, Card, CheckBox, Input} from "react-native-elements";
import CountryPicker, {Country} from "react-native-country-picker-modal";
import {NamesOfComponents} from "../NamesOfComponents";

type props = {
    navigation: any
}
const ProfileSelector: React.FC<props> = ({navigation}) => {
    const buttons = ['Hire', 'Find Job',]
    const [index, setIndex] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(false);
    const [country, setCountry] = useState<Country>(null);
    const onSelect = (country: Country) => {
        setCountry(country)
    };
    return (
        <ScrollView>
            <Card>
                <View style={{alignSelf: 'center', alignItems: 'center'}}>

                    <CountryPicker
                        withFilter={true}
                        withCountryNameButton={false}
                        visible={visible}
                        onSelect={onSelect}
                        onClose={() => {
                            setVisible(false)
                        }}
                        countryCode={country == null ? "" : country.cca2}
                        // countryCode={country == null ? "" : country.cca2}
                    />
                    <Button iconRight={true}
                            icon={{name: 'chevron-down', type: 'octicon', iconStyle: {paddingLeft: 20}}}
                            buttonStyle={{width: 300}}
                            titleStyle={{fontSize: 30}}
                            title={country != null ? country.name : 'Choose Country'} type={'outline'}
                            onPress={() => {
                                setVisible(true);
                            }}>
                    </Button>
                    <ButtonGroup buttons={buttons} selectedIndex={index} onPress={setIndex} textStyle={{fontSize: 28}}
                                 containerStyle={{height: 50, width: 300}}/>
                    {returnNickname(index)}


                </View>
            </Card>
            <CheckBox title={'I agree with terms of service'} checked={false}>
            </CheckBox>
            <Button title={'Create Account'} buttonStyle={{borderRadius: 10, marginHorizontal: 10, height: 60}}
                    titleStyle={{fontSize: 22}} onPress={() => {
                navigation.navigate(NamesOfComponents.SignUp)
            }}>
            </Button>

        </ScrollView>
    );
};
const returnNickname = (index: number) => {
    if (index != 0) {
        return <Input
            leftIcon={{name: 'person', type: 'material'}}
            placeholder={'Nickname'} label={'Nickname'}
            containerStyle={{width: 320}}
            inputContainerStyle={{borderWidth: 2}}
        />
    } else {
        return <></>
    }
}

export default ProfileSelector;
