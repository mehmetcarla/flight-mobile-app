import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { notFoundTicket } from '../../assets'

const NotFoundTicket = ({ data }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Image source={notFoundTicket} style={{ width: '85%', resizeMode: 'contain', marginTop: -80 }} />
            <Text style={styles.notFoundText}>
                Sorry, no flights were found matching your criteria.{"\n"}Please try again by selecting a different date,{"\n"}destination or departure place.
            </Text>
        </SafeAreaView>
    )
}

export default NotFoundTicket

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    notFoundText: {
        width: '90%',
        fontWeight: 500,
        fontSize: 16,
        textAlign: 'center',
        marginTop: -48
    }
})