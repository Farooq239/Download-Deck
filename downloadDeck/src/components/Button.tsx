import React from 'react';

import {
    Image,
    ImageSourcePropType,
    ImageStyle,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';

import { ColorSet } from '../styles/Color';

interface Props {
    leftIconSource?: ImageSourcePropType;
    rightIconSource?: ImageSourcePropType;
    buttonStyle?: ViewStyle | undefined;
    rightIconStyle?: ImageStyle;
    leftIconStyle?: ImageStyle;
    labelStyle?: TextStyle;
    label?: string;
    passwordSecure?: boolean;
    onPress?: ((val: any) => void) | undefined;
    disabledButton?: boolean;
}

const Button: React.FC<Props> = ({
    label,
    labelStyle,
    onPress,
    buttonStyle,
    leftIconSource,
    rightIconSource,
    rightIconStyle,
    leftIconStyle,
    disabledButton,
}: Props) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                buttonStyle,
                disabledButton && styles.disabledButton,
            ]}
            onPress={onPress}
            disabled={disabledButton}>
            {leftIconSource && (
                <Image
                    style={[styles.leftIcon, leftIconStyle]}
                    source={leftIconSource}
                />
            )}
            <Text style={[styles.label, labelStyle]}>{label}</Text>
            {rightIconSource && (
                <Image
                    style={[styles.rightIcon, rightIconStyle]}
                    source={rightIconSource}
                />
            )}
        </TouchableOpacity>
    );
};

export default Button;
const styles = StyleSheet.create({
    button: {
        backgroundColor: ColorSet.red,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 3,
    },
    label: {
        fontSize: 16,
        color: ColorSet.white,
        // fontFamily: FamilySet.semiBold,
    },
    leftIcon: {
        width: 12,
        height: 12,
        resizeMode: 'contain',
        position: 'absolute',
        left: 30,
    },
    rightIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        position: 'absolute',
        right: 30,
    },
    disabledButton: {
        backgroundColor: ColorSet.MidGray,
    },
});
