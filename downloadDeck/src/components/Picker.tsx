import React, { Key } from 'react';

import { StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ColorSet } from '../styles/Color';
import AppStyle from '../styles/AppStyle';
import { screenWidth } from '../styles/ScreenSize';


interface Props {
    label?: string | any;
    value?: string | any;
    labelValue?: string | any;
    options?: Array<string>;
    styleView?: ViewStyle;
    labelStyle?: TextStyle;
    getSelectedValue?: string | any;
}

const PickerComponent: React.FC<Props> = ({
    label,
    options,
    value,
    labelValue,
    getSelectedValue,
}) => {

    const [selectedValue, setSelectedValue] = React.useState('');
    const [isFocused, setIsFocused] = React.useState(false);

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onValueChange = (itemValue: string) => {
        getSelectedValue;
        setSelectedValue(itemValue);
        getSelectedValue(itemValue);
    };

    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <View style={[!isFocused ? styles.pickerContainer : styles.activePicker]}>
                <Picker
                    onFocus={onFocus}
                    onBlur={onBlur}
                    placeholder={selectedValue == '' ? labelValue : selectedValue}
                    mode="dialog"
                    style={styles.picker}
                    dropdownIconColor={ColorSet.black}
                    selectedValue={selectedValue}
                    onValueChange={onValueChange}>
                    <Picker.Item label={isFocused ? labelValue : value} value="" enabled={true} />
                    {options?.map((option: string, index: Key) => {
                        return <Picker.Item key={index} label={option} value={option} />;
                    })}
                </Picker>
            </View>
        </>
    );
};

export default PickerComponent;

const styles = StyleSheet.create({
    pickerContainer: {
        borderWidth: 1,
        borderColor: ColorSet.softGraySecondary,
        borderRadius: 3,
        // width: screenWidth.width90,
        marginHorizontal: 15,
        height: 60,
        backgroundColor: ColorSet.softWhite,
    },
    activePicker: {
        borderWidth: 1,
        borderColor: ColorSet.softGraySecondary,
        borderRadius: 3,
        height: 60,
        // width: screenWidth.width90,
        marginHorizontal: 15

    },
    picker: {
        width: '100%',
        color: ColorSet.black,
        fontSize: 12,
        // fontFamily: FamilySet.regular
        // fontFamily: FamilySet.semiBold,
    },
    label: {

        color: ColorSet.MidGray,
        // fontFamily: FamilySet.regular,
        fontSize: 12
    },
});
