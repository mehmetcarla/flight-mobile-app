import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TicketDetails = () => {
    return (
        <View style={styles.container}>
            <Text>TicketDetails</Text>
        </View>
    )
}

export default TicketDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})