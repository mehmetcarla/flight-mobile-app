import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

const SearchDetailHeader = ({ data }) => {

    return (
        <View style={styles.container}>
            <View style={styles.topCenterContainer}>
                <Text style={styles.roadText}>{data[0].fromLBL}</Text>
                <FontAwesome5 name="plane-departure" size={24} color="white" />
                <Text style={styles.roadText}>{data[0].toLBL}</Text>
            </View>
            <View style={styles.botCenterContainer}>
                <Text style={styles.bottomText}>{data[0].departureTime}</Text>
                <Ionicons name="ios-arrow-forward-outline" size={24} color="white" />
                <Text style={styles.bottomText}>{data[0].time}</Text>
                <Ionicons name="ios-arrow-forward-outline" size={24} color="white" />
                <Text style={styles.bottomText}>{data[0].landingTime}</Text>

            </View>
        </View>
    )
}

export default SearchDetailHeader

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#055340',
        paddingVertical: '5%',
        paddingTop: '15%',
        shadowColor: "#333",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .35,
        shadowRadius: 20.5,
        zIndex: 999,
    },
    topCenterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '85%',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 6
    },
    roadText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 700
    },
    botCenterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '85%',
        alignItems: 'center',
        paddingHorizontal: 8,
        marginTop: 6
    },
    bottomText: {
        fontSize: 18,
        color: '#FFFFFE',
        fontWeight: 400
    }
})