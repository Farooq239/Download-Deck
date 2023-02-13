import React from 'react'

import { StyleSheet, Text, View, Image, ViewStyle } from 'react-native'
import { BarChart, LineChart } from 'react-native-chart-kit'
import AppStyle from '../styles/AppStyle'
import { ColorSet } from '../styles/Color'
import { screenHeight, screenWidth } from '../styles/ScreenSize'
import ChartView from 'react-native-highcharts'


interface Props {
    item: {
        title?: string,
        imgUrl?: string,
        children: React.ReactNode
        chartaline?: ViewStyle,
        firstOne: boolean,
        secondOne: boolean,
        thirdOne: boolean
        forthOne: boolean
        fifthOne: boolean
    }
    index: number,
    firstOne: boolean,
    secondOne: boolean
    thirdOne: boolean
}

const SingleSlide: React.FC<Props> = ({ item, index, }: Props) => {

    var config = {
        chart: {
            type: 'column'
        },
        title: null,
        subtitle: null,
        xAxis: {
            categories: [
                '2010',
                '2011',
                '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
                '2020',
                '2021'
            ],
            crosshair: true
        },
        yAxis: {
            title: {
                useHTML: true,
                text: 'Million tonnes CO<sub>2</sub>-equivalents'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Oil and gas extraction',
            data: [13.93, 13.63, 13.73, 13.67, 14.37, 14.89, 14.56,
                14.32, 14.13, 13.93, 13.21, 12.16]

        }, {
            name: 'Manufacturing industries and mining',
            data: [12.24, 12.24, 11.95, 12.02, 11.65, 11.96, 11.59,
                11.94, 11.96, 11.59, 11.42, 11.76]

        }, {
            name: 'Road traffic',
            data: [10.00, 9.93, 9.97, 10.01, 10.23, 10.26, 10.00,
                9.12, 9.36, 8.72, 8.38, 8.69]

        }, {
            name: 'Agriculture',
            data: [4.35, 4.32, 4.34, 4.39, 4.46, 4.52, 4.58, 4.55,
                4.53, 4.51, 4.49, 4.57]

        }]


    }
    const options = {
        global: {
            useUTC: false,
        },
        lang: {
            decimalPoint: ',',
            thousandsSep: '.',
        },
    };
    return (
        <View style={styles.sliderMain}>
            <ChartView
                style={{ height: 100 }}
                config={config}
                options={options}></ChartView>
            {/* <View style={{ marginTop: 10, width: screenWidth.width100 - 30, alignItems: 'center', marginHorizontal: 15 }}>
                {
                    item.firstOne ?
                        <BarChart
                            data={{
                                labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                                datasets: [
                                    {
                                        data: [39, 45, 28, 80, 99, 43, 93, 99, 92, 33, 100, 82],
                                        strokeWidth: 1
                                    }
                                ],
                            }}
                            width={screenWidth.width100 - 30}
                            height={250}
                            yAxisLabel=""
                            yAxisSuffix=""
                            yAxisInterval={1}
                            withInnerLines={false}
                            showBarTops={false}
                            fromZero={true}
                            chartConfig={{
                                backgroundGradientFromOpacity: 0,
                                backgroundGradientToOpacity: 0,
                                color: () => '#333',
                                strokeWidth: 1,
                                barPercentage: 0.5,
                                propsForLabels: {
                                    fontSize: '10',
                                },
                                fillShadowGradient: '#50C878',
                                fillShadowGradientOpacity: 2,

                            }}
                            style={{
                                marginVertical: 8,
                                marginRight: 20,
                                width: screenWidth.width100 - 30
                            }}
                        /> :
                        <></>
                }
                {
                    item.secondOne ?
                        <LineChart
                            data={{
                                labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                                datasets: [
                                    {

                                        data: [39, 45, 28, 80, 99, 43, 93, 99, 92, 33, 100, 82],
                                        strokeWidth: 1
                                    }
                                ],
                            }}
                            width={screenWidth.width100 - 30}
                            height={250}
                            yAxisLabel=""
                            yAxisSuffix=""
                            yAxisInterval={1}
                            withInnerLines={false}
                            // showBarTops={false}
                            fromZero={true}
                            chartConfig={{
                                backgroundGradientFromOpacity: 0,
                                backgroundGradientToOpacity: 0,
                                color: () => '#333',
                                strokeWidth: 1,
                                barPercentage: 0.5,
                                propsForLabels: {
                                    fontSize: '10',
                                },
                                fillShadowGradient: '#50C878',
                                fillShadowGradientOpacity: 2,

                            }}
                            style={{
                                marginVertical: 8,
                                marginRight: 20,
                                width: screenWidth.width100 - 30
                            }}
                        /> :
                        <></>
                }

                {
                    item.thirdOne ?
                        <View style={{ flex: 1 }}>
                            
                        </View>

                        :
                        <></>

                }
                {
                    item.forthOne && <></>

                }
                {
                    item.fifthOne && <></>

                } */}

        </View>
    )
}

export default SingleSlide

const styles = StyleSheet.create({
    sliderMain: {
        'alignItems': 'center',
        // height: screenHeight.height100 - 150,
        justifyContent: 'center',

    },
    main: {
        ...AppStyle.aiCenter,
        ...AppStyle.jcCenter,
        height: screenWidth.width60,
        width: screenWidth.width60
    },
    title: {
        ...AppStyle.taCenter,
        ...AppStyle.asCenter,
        // fontFamily: FamilySet.semibold,
        // ...Fonts.size.xmedium,
        color: ColorSet.brandColor,
        height: screenHeight.height10,
    },
    icon: {
        width: '100%',
        height: '100%',
        borderRadius: 200,
        resizeMode: 'cover'
    },
})