import React from 'react'

import { StyleSheet, View, Dimensions } from 'react-native'




import OTPInputView from '@twotalltotems/react-native-otp-input'

import { ColorSet } from '../styles/Color'



const screenSize = Dimensions.get('window')



const otpContainerWidth = screenSize.width * 0.8



interface OtpInputProps {

    code?: string | undefined

    onCodeChanged?: (code: string) => void

    onCodeFilled?: (code: string) => void

}



const OtpInput: React.FC<OtpInputProps> = props => {

    const { code, onCodeChanged, onCodeFilled } = props



    return (

        <View style={styles.container}>

            <OTPInputView

                style={styles.otpContainer}

                pinCount={4}

                code={code}

                autoFocusOnLoad

                codeInputFieldStyle={styles.otp}

                codeInputHighlightStyle={styles.otpHighlighted}

                onCodeChanged={onCodeChanged}

                onCodeFilled={onCodeFilled}

            />

        </View>

    )

}



const styles = StyleSheet.create({
  
    container: {

        // marginTop: 15,

    },

    otpContainer: {

        width: otpContainerWidth,

        alignSelf: 'center',

        height: 70,

    },

    otp: {

        width: otpContainerWidth / 4 - 10,

        height: 56,

        marginHorizontal: 5,

        borderRadius: 8,

        color: ColorSet.black,

        borderWidth: 0.5,

        borderColor: ColorSet.inputBorderColor,

        shadowColor: 'rgba(0,0,0,0.16)',

        shadowOffset: {

            width: 0,

            height: 3,

        },

        shadowOpacity: 0.16,

        shadowRadius: 3.0,

        fontSize: 25,

        elevation: 3,

        backgroundColor: ColorSet.white,

    },

    otpHighlighted: {

        borderColor: ColorSet.brandColor,

    },

})



export default OtpInput

