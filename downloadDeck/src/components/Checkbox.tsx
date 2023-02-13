import React from 'react';

import { Image, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

import { Icons } from '../constants/icon'
import { ColorSet } from '../styles/Color';
import { screenWidth } from '../styles/ScreenSize';
interface Props {
    isChecked?: boolean;
    onPress?: ((val: any) => void) | undefined;
    textCheckBox?: boolean;
    checkView?: ViewStyle
}

const CheckBox: React.FC<Props> = ({
    onPress,
    isChecked,
    textCheckBox,
    checkView
}: Props) => {
    return (
        <TouchableOpacity
            style={[styles.checkBox, checkView, isChecked && styles.isCheckedCheckBox]}
            onPress={onPress}>
            {isChecked && <Image style={styles.tick} source={Icons.ic_tick} />}
        </TouchableOpacity>
    );
};

export default CheckBox;

const styles = StyleSheet.create({
    checkBox: {
        alignItems: 'center',
        height: 20,
        width: 20,
        borderRadius: 3,
        borderWidth: 1,
        backgroundColor: ColorSet.white,
        borderColor: ColorSet.grayMidLight,
        flexDirection: 'row',

        justifyContent: 'space-between',
    },
    isCheckedCheckBox: {
        backgroundColor: ColorSet.theme,
        borderWidth: 0,
        resizeMode: 'contain',
        width: 20,
    },
    tick: {
        width: 10,
        height: 10,
        resizeMode: 'contain',
        tintColor: ColorSet.white,
        marginLeft: 5,
    },
    termsConditions: {
        fontSize: 12,
        color: ColorSet.MidGray,
        // fontFamily: FamilySet.regular,
        width: screenWidth.width100,
        marginLeft: 20,
    },
    mainView: {
        flex: 1,
        flexDirection: 'row',
    },
});
