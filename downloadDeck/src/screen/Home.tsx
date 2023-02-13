import React, { useEffect, useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import { Icons } from '../constants/icon';
import { ColorSet } from '../styles/Color';

;


const Home: React.FC<{ navigation: any }> = ({ navigation }) => {

    const [facebookCheck, setFacbookCheck] = useState(false)
    const [instagramCheck, setInstagramCheck] = useState(false)
    const [youtubeCheck, setYoutubeCheck] = useState(false)

    const facebookHandler = () => {
        setFacbookCheck(true)
        navigation.navigate("DownloadScreen", {
            facebookCheck: true, instagramCheck: false, youtubeCheck: false
        })
    }

    const instagramHandler = () => {
        setInstagramCheck(true)
        navigation.navigate("DownloadScreen", {
            facebookCheck: false, instagramCheck: true, youtubeCheck: false
        })

    }

    const youtubeHandler = () => {
        setYoutubeCheck(true)
        navigation.navigate("DownloadScreen", {
            facebookCheck: false, instagramCheck: false, youtubeCheck: true
        })

    }
    return (
        <View style={[styles.mainContainer]}>
            <Header heading={'Social Downloader'} headingCheck={true} leftIconSource={Icons.ic_back} onPressLeft={() => navigation.goBack()} />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 20, justifyContent: 'space-between', marginTop: 20 }}>
                <TouchableOpacity style={{ width: '45%' }} onPress={() => facebookHandler()}>
                    <View style={{ borderColor: ColorSet.black, }}>
                        <View style={{ marginVertical: 5 }}>
                            <Image source={Icons.ic_faceBook} style={{ alignSelf: 'center', width: 80, height: 80 }} />
                        </View>
                        <Text style={{ textAlign: 'center', color: ColorSet.white }}>Facebook</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '45%', }} onPress={() => instagramHandler()}>
                    <View style={{ borderColor: ColorSet.black, }}>
                        <View style={{ marginVertical: 5 }}>
                            <Image source={Icons.ic_instagram} style={{ alignSelf: 'center', width: 70, height: 80, resizeMode: 'contain' }} />
                        </View>
                        <Text style={{ textAlign: 'center', color: ColorSet.white }}>Instagram</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '45%' }} onPress={() => youtubeHandler()}>
                    <View style={{ borderColor: ColorSet.black, marginTop: 20 }}>
                        <View style={{ marginVertical: 5 }} >
                            <Image source={Icons.ic_youtubeIcon} style={{ alignSelf: 'center', width: 80, height: 80 }} />
                        </View>
                        <Text style={{ textAlign: 'center', color: ColorSet.white }}>YouTube</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f37410'
    },
    splashLogo: {
        alignItems: 'center',
        marginBottom: 300
    },
    splashImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    bottomText: {
        width: '100%',
        alignSelf: 'center',
        marginBottom: 10
    },
    bottomImage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100,
    },
    usaidImage: {
        width: 100,
        height: 70,
        resizeMode: 'contain'
    },
    pitcLogo: {
        width: 100,
        height: 70,
        resizeMode: 'contain'
    }
});
