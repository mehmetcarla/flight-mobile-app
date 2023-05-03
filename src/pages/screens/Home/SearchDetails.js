import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import NotFoundTicket from '../../../components/NotFoundTicket'
import SearchDetailHeader from '../../../components/SearchDetailHeader'
import TicketCard from '../../../components/TicketCard'
import { useNavigation } from '@react-navigation/native'

export default function SearchDetails({ route, ...props }) {
    const inComingData = route?.params?.data
    const emptyArr = []
    const [data, setData] = useState(inComingData);
    const navigation = useNavigation()
    const handleRoute = () => {
        navigation.navigate('Ticket Details')
    }

    return (
        <View style={styles.container}>
            {data && data.length === 0 ?
                <View style={{ width: '100%' }}>
                    <NotFoundTicket data={inComingData} />
                </View>
                :
                <View style={styles.container}>
                    <SearchDetailHeader data={data} />
                    <ScrollView style={styles.scrollStyle} contentContainerStyle={{
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: 8,
                        paddingBottom: 20
                    }}>
                        {data && data.map((flight, key) => {
                            return (
                                <TouchableOpacity onPress={handleRoute} key={key} style={styles.ticketContainer}>
                                    <TicketCard data={flight} />
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    ticketContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 24,
    },
    notFoundText: {
        width: '90%',
        fontWeight: 500,
        fontSize: 16,
        textAlign: 'center',
    },
    scrollStyle: {
        marginTop: 140,
    }
})