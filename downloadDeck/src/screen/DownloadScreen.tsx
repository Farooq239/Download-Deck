import React, { useEffect, useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, Platform, Alert } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import { Icons } from '../constants/icon';
import { ColorSet } from '../styles/Color';

import { useFocusEffect } from '@react-navigation/native';
import Input from '../components/input';

import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';

const DownloadScreen: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {

    const [facebookCheck, setFacebookCheck] = useState(route.params?.facebookCheck)
    const [instagramCheck, setInstagramCheck] = useState(route.params?.instagramCheck)
    const [youtubeCheck, setYoutubeCheck] = useState(route.params?.youtubeCheck)


    useEffect(() => {
        console.log(route.params?.facebookCheck, 'Face book check')
        console.log(route.params?.instagramCheck, 'Instagram check')
        console.log(route.params?.youtubeCheck, 'youtub Check')
    }, [])

    const [videoUrl, setVideoUrl] = useState('');
    const [downloadProgress, setDownloadProgress] = useState(0);

    const downloadVideo = (videoUrl: string, fileName: string) => {
        const { config, fs } = RNFetchBlob;
        const videoPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;

        return config({
            fileCache: true,
            path: videoPath,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                title: fileName,
                mime: 'video/mp4',
                description: 'Downloading video',
            },
            background: true,
            progress: (received: number, total: number) => {
                const progress = received / total;
                setDownloadProgress(progress);
            },
        })
            .fetch('GET', videoUrl)
            .then((res: { path: () => any; }) => {
                console.log('The file saved to ', res.path());
                return res.path();
            });
    };

    const handleDownload = () => {
        if (!videoUrl) {
            Alert.alert('Error', 'Please enter a valid video URL.');
            return;
        }

        downloadVideo(videoUrl, 'video.mp4')
            .then(() => {
                setDownloadProgress(0);
                Alert.alert('Success', 'The video was successfully downloaded.');
            })
            .catch((error: any) => {
                console.error(error);
                setDownloadProgress(0);
                Alert.alert('Error', 'There was an error downloading the video.');
            });
    };
    return (
        <View style={[styles.mainContainer]}>
            <Header heading={facebookCheck ? 'Facebook' : instagramCheck ? 'Instagram' : youtubeCheck && 'Youtube '} headingCheck={true} leftIconSource={Icons.ic_back} onPressLeft={() => navigation.goBack()} />
            <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 20 }}>
                <View style={{ width: '80%' }}>
                    <Input
                        setTextValue={setVideoUrl}
                        placeholder={facebookCheck ? 'Paste Facebook Url' : instagramCheck ? 'Paste Instagram Url' : youtubeCheck && 'Paste youtube url '}
                        leftIconSource={Icons.ic_link}
                        inputStyle={{
                            borderRadius: 30,
                            width: '100%',
                            height: 60,
                            borderColor: ColorSet.black
                        }}

                    />
                </View>
                <TouchableOpacity style={{ height: 60, marginLeft: 10, paddingTop: 15, width: '20%', alignItems: 'center', backgroundColor: ColorSet.green, borderRadius: 30 }} onPress={handleDownload}>
                    <Image source={Icons.ic_download} style={{ height: 30, width: 40 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default DownloadScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // alignItems: 'center',
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
