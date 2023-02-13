import React from 'react';

import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import { Icons } from '../constants/icon'
import { ColorSet } from '../styles/Color';

interface Props {
    isChecked?: boolean;
    onPressLeft?: ((val: any) => void) | undefined;
    textCheckBox?: boolean;
    checkView?: ViewStyle;
    leftIconSource?: ImageSourcePropType;
    middleIconSource?: ImageSourcePropType;
    rightIconSource?: ImageSourcePropType;
    heading?: String;
    headingCheck?: boolean;


}

const Header: React.FC<Props> = ({
    leftIconSource,
    rightIconSource,
    middleIconSource,
    onPressLeft,
    checkView,
    heading,
    headingCheck
}: Props) => {
    return (
        <View style={[styles.mepcoView, headingCheck && styles.heading]}>
            <TouchableOpacity onPress={onPressLeft}>
                <Image source={leftIconSource} style={styles.backIcon} />
            </TouchableOpacity>
            {
                headingCheck ? <Text style={{ color: ColorSet.white, fontSize: 24, fontWeight: '600' }}>{heading}</Text> :
                    <Image source={middleIconSource} style={styles.mepcoImage} />
            }
            <Image source={rightIconSource} style={styles.rightImage} />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    mepcoView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,


    },
    heading: {
        marginVertical: 20

    },
    mepcoImage: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
        alignSelf: 'center',

    },
    backIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: ColorSet.white
    },
    rightImage: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    }
});
