import React from 'react'

import { StyleSheet, TouchableOpacity, Image, View } from 'react-native'

import ActionSheet from 'react-native-actions-sheet'
import { Icons } from '../constants/icon'
import { ColorSet } from '../styles/Color'
import { screenWidth } from '../styles/ScreenSize'

interface BottomSheetProps {
    bottomSheetRef: React.Ref<ActionSheet> | undefined
    overlayOpacity?: number | undefined
    bottomCloseBtn?: Boolean | undefined
    closeOnTouchBackdrop?: Boolean | undefined
    gestureEnabled?: Boolean | undefined
    indicatorColor?: String | undefined
}

const BottomSheet: React.FC<BottomSheetProps> = props => {

    const { bottomSheetRef, overlayOpacity, bottomCloseBtn, closeOnTouchBackdrop, gestureEnabled, indicatorColor } = props

    return (
        <ActionSheet
            gestureEnabled={gestureEnabled ? true : false}
            bounceOnOpen={true}
            elevation={23}
            statusBarTranslucent={false}
            indicatorColor={indicatorColor ? indicatorColor : '#ccc'}
            closeOnPressBack={true}
            closeOnTouchBackdrop={closeOnTouchBackdrop == undefined ? false : true}
            openAnimationSpeed={5}
            overlayColor={'#000'}
            defaultOverlayOpacity={
                overlayOpacity == undefined ? 0.84 : overlayOpacity
            }
            containerStyle={{
                width:
                    bottomCloseBtn !== false
                        ? screenWidth.width100 - 40
                        : screenWidth.width100,
                zIndex: 9999,
            }}
            ref={bottomSheetRef}>
            <View style={styles.contentContainer}>{props.children}</View>
            {bottomCloseBtn !== false && (
                <TouchableOpacity style={appStyle.asCenter} onPress={onPressClose}>
                    <Image source={Icons.cnic_icon} style={styles.closeIcon} />
                </TouchableOpacity>
            )}
        </ActionSheet>
    )
}

const styles = StyleSheet.create({

    contentContainer: {
        paddingBottom: 25,
        paddingHorizontal: 20,
        paddingTop: 15,
        backgroundColor: ColorSet.white,
        borderRadius: 16,
    },

    closeIcon: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
        marginTop: 20,
        marginBottom: 20,
    },
})



export default BottomSheet