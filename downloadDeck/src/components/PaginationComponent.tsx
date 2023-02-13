import React from 'react'

import { StyleSheet, View, ViewStyle } from 'react-native'

import { Pagination } from 'react-native-snap-carousel'
import { ColorSet } from '../styles/Color'

interface Props {
    data: number,
    activeIndex: number,
    style: ViewStyle
}

const PaginationComponent: React.FC<Props> = ({ data, activeIndex, style }: Props) => {
    return (
        <View style={styles.container}>
            <Pagination
                dotsLength={data}
                activeDotIndex={activeIndex}
                dotStyle={[styles.dotStyle, style]}
                inactiveDotStyle={styles.inactiveDotStyle}
                inactiveDotOpacity={0.6}
                inactiveDotScale={0.6}
            />
        </View>
    )
}

export default PaginationComponent

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        // height: 50
    },
    dotStyle: {
        width: 12,
        height: 12,
        borderRadius: 10,
        backgroundColor: ColorSet.MidGray,
        zIndex: 1,

    },
    inactiveDotStyle: {
        width: 15,
        height: 15,
        backgroundColor: ColorSet.white,
        borderRadius: 10,
        borderWidth: 1,
        zIndex: 1,

    }
})