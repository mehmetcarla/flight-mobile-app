import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TicketCard = ({ data }) => {
    console.log('Ticket data: ', data)
    return (
        <View style={styles.ticketContainer}>
            <View style={styles.topContainer}>
                <View style={styles.topCenterContainer}>
                    <Text style={styles.subText}>{data.from}</Text>
                    <Text style={styles.subText}>{data.to}</Text>
                </View>
                <View style={styles.topCenterContainer}>
                    <Text style={styles.roadText}>{data.fromLBL}</Text>
                    <Text style={styles.subText}>{data.time}</Text>
                    <Text style={styles.roadText}>{data.toLBL}</Text>
                </View>
                <View style={styles.topCenterContainer}>
                    <Text style={styles.subText}>{data.departureTime}</Text>
                    <Text style={styles.subText}>{data.landingTime}</Text>
                </View>
            </View>
            <View style={styles.botContainer}>
                <Text style={styles.brand}>{data.brand}</Text>
                <Text style={styles.price}>{data.price}</Text>
            </View>
        </View>
    )
}

export default TicketCard

const styles = StyleSheet.create({
    ticketContainer: {
        width: '90%',
    },
    topContainer: {
        width: '100%',
        borderRadius: 20,
        backgroundColor: 'white',
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#DDD',
        paddingVertical: 24,
        zIndex: 5
    },
    botContainer: {
        width: '100%',
        borderRadius: 20,
        borderWidth: 0,
        borderTopWidth: 1,
        borderColor: '#DDD',
        backgroundColor: 'white',
        shadowColor: "#333",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: .15,
        shadowRadius: 12.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 48,
        alignItems: 'center',
        paddingVertical: 12
    },
    price: {
        color: '#10A37F',
        fontSize: 24,
        fontWeight: 800,
        textAlign: 'right',
        paddingHorizontal: 6
    },
    topCenterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
        alignItems: 'center',
        paddingHorizontal: 6,
    },
    roadText: {
        fontSize: 28,
        color: '#333',
        fontWeight: 700,
        paddingVertical: 3
    },
    subText: {
        fontSize: 18,
        color: '#777',
        fontWeight: 400,
        paddingVertical: 3,
        paddingHorizontal: 3
    },
    brand: {
        fontSize: 24,
        color: '#444',
        fontWeight: 600,
        paddingVertical: 3
    }
})