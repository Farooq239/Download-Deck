import React, { useEffect } from 'react';

import { View,  StyleSheet, Image } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons } from '../constants/icon';


const SplashScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    useEffect(() => {
        splashHanler();
    }, []);

    const splashHanler = async () => {
        return new Promise(resolve =>
            setTimeout(async () => {
                navigation.replace('Dashboard');
            }, 3000),
        );
    };

    return (
        <View style={[styles.mainContainer]}>
            <SafeAreaView>
                <View style={styles.splashLogo}>
                    <View>
                        <Image
                            source={Icons.ic_appIcon}
                            style={styles.splashImage}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
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
