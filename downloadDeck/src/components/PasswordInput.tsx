import React from 'react';

import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TextInput,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import { Icons } from '../constants/icon'

import AppStyle from '../styles/AppStyle';
import { ColorSet } from '../styles/Color'
// import { H5 } from '../Typography';
// import Strings from '../../assets/localization';

interface Props {
    leftIconSource?: ImageSourcePropType;
    inputStyle?: ViewStyle;
    image?: boolean;
    labelStyle?: TextStyle;
    lable?: string;
    placeholder?: string;
    placeHolderTextColor?: ViewStyle | any;
    keyboardType?: any;
    value?: any;
    onChangeText?: ((value: string) => void) | undefined;
    onPressAdd?: (() => void) | undefined;
    isTagsAdd?: boolean;
    multiline?: boolean;
    passwordSecure?: boolean;
    text?: string;
    isSecurePassword?: boolean | undefined;
    errorText?: any;
    mainViewInput?: ViewStyle;
    maxLength?: number | undefined;
    setTextValue: Function;
    passwordIconSource?: ImageSourcePropType;
}

const PasswordInput: React.FC<Props> = ({
    lable,
    inputStyle,
    placeholder,
    value,
    setTextValue,
    onChangeText,
    keyboardType,
    leftIconSource,
    labelStyle,
    multiline,
    placeHolderTextColor,
    isTagsAdd,
    onPressAdd,
    passwordSecure,
    errorText,
    mainViewInput,
    maxLength,
    passwordIconSource,
    image
}: Props) => {

    const [isSecure, setIsSecure] = React.useState<boolean>(true);
    const [isActive, setIsActive] = React.useState<boolean>(false);
    const [isFocused, setIsFocused] = React.useState(false);

    const onSetIsSecure = () => {
        setIsSecure(!isSecure);
    };

    const onFocus = () => {
        setIsActive(true);
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsActive(false);
        setIsFocused(false);
    };
    const changeHandler = (InputText: string) => {
        if (onChangeText) onChangeText(value);
        setTextValue(InputText);
    };

    return (
        <View style={[mainViewInput ? mainViewInput : AppStyle.mt0]}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ paddingTop: 14, marginRight: 2 }}>
                    {image &&
                        <Image style={{ width: 20, height: 12, resizeMode: 'contain' }} source={passwordIconSource} />}
                </View>
                {lable && <Text style={[styles.lable, labelStyle]}>{lable}</Text>}
            </View>

            <View style={[styles.input, inputStyle, isActive && styles.activeInput]}>
                {leftIconSource && (
                    <Image style={styles.leftIcon} source={leftIconSource} />
                )}
                <TextInput
                    onBlur={onBlur}
                    onFocus={onFocus}
                    style={[
                        styles.inputStyle,
                        inputStyle,
                        multiline ? styles.textarea : null,
                        isFocused ? styles.active : styles.inActive,
                    ]}
                    onChangeText={changeHandler}
                    value={value}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={isSecure}
                    multiline={multiline}
                    placeholderTextColor={placeHolderTextColor}
                    maxLength={maxLength}
                />
                {passwordSecure && (
                    <TouchableOpacity onPress={onSetIsSecure}>
                        <Text style={styles.showHide}>
                            {isSecure && isSecure ? <Image style={{ margin: 5, height: 12, width: 12, alignItems: 'center', }} source={Icons.ic_eye} /> : <Image style={{
                                margin: 5, height: 12, width: 12,
                                alignItems: 'center',
                            }} source={Icons.ic_eyeDisable} />}
                        </Text>
                    </TouchableOpacity>
                )}

                {isTagsAdd && (
                    <TouchableOpacity onPress={onPressAdd}>
                        <Text style={styles.showHide}>
                            {/* {Strings['app.add.button.text']} */}
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
            {errorText && errorText ? (
                <View style={[AppStyle.pt5, { width: '90%'}]}>
                    <Text style={styles.errorText}>{errorText}</Text>
                </View>
            ) : null}
        </View>
    );
};

export default PasswordInput;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: ColorSet.softGraySecondary,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 3,
        backgroundColor: ColorSet.softWhite,
    },
    inputStyle: {
        flex: 1,
        fontSize: 14,
        // fontFamily: FamilySet.regular,
        color: ColorSet.black,
        height: 50,
    },
    lable: {
        fontSize: 15,
        color: ColorSet.grayMedium,
        marginTop: 10
        // fontFamily: FamilySet.regular,
    },
    showHide: {
        fontSize: 12,
        color: ColorSet.grayMedium,
        marginLeft: 10,
    },
    leftIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 20,
    },
    activeInput: {
        borderColor: ColorSet.theme,
    },
    textarea: {
        height: 135,
        paddingTop: 15,
        textAlignVertical: 'top',
    },
    inActive: {
        borderColor: ColorSet.inputBorderColor,
    },
    active: {
        borderColor: ColorSet.black,
    },
    inputBtn: {
        position: 'absolute',
        top: 10,
        right: 20,
    },
    icon: {
        width: 40,
        height: 30,
        backgroundColor: ColorSet.white,
        color: ColorSet.MidGray,
    },
    showLabel: {
        color: ColorSet.MidGray,
    },
    hidelabel: {
        color: ColorSet.MidGray,
    },
    errorText: {
        fontSize: 12,
        color: ColorSet.redcolor,
    },
});
