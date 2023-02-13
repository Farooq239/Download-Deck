import React, { useEffect } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import { Screen } from 'react-native-screens';
import Button from '../components/Button';
import Header from '../components/Header';
import { Icons } from '../constants/icon';
import { ColorSet } from '../styles/Color';



const LandingScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

    const getStartedHandler = () => {
        navigation.navigate('Home')
    }
    return (
        <View style={[styles.mainContainer]}>
            <Header heading={'Support'} headingCheck={true} />
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 14,color : ColorSet.white }}>Very Fast and 100% free</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 50, color: ColorSet.green }}>Multiple</Text>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ fontSize: 50, color: ColorSet.white, fontWeight: '600' }}>Source</Text>
                    </View>
                </View>
                <View style={{ width: '100%', marginTop: 15 }}>
                    <Text style={{ fontSize: 15, color: ColorSet.white }}>Download Deck is the easiest application to download videos from Facebook,Instagram and youtube</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity>
                        <Button label='Get Started' rightIconSource={Icons.ic_rightIcons} labelStyle={{ color: ColorSet.white, paddingRight: 30, fontSize: 18 }} buttonStyle={{ width: '50%', borderRadius: 50, height: 70, backgroundColor: ColorSet.green }} onPress={getStartedHandler} rightIconStyle={{ tintColor: ColorSet.white }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LandingScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f37410'
    },
});
