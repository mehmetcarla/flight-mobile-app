import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { background } from '../../../../assets'
import SearchComponent from '../../../components/SearchComponent'
import Flights from '../../../components/Flights'
import { FontAwesome } from '@expo/vector-icons';

export default function Home({ navigation }) {

    const handleRouteProfile = () => {
        navigation.navigate('Profile')
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={background} style={styles.imageContainer} resizeMode='cover'>
                <SafeAreaView style={styles.pageHeader}>
                    <Text style={styles.headerText}>
                        Lets find your{"\n"}flight 👋
                    </Text>
                    <TouchableOpacity style={styles.avatar} onPress={handleRouteProfile}>
                        <FontAwesome name="user" size={30} color="#FFA500" />
                    </TouchableOpacity>
                </SafeAreaView>
                <SearchComponent />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    pageHeader: {
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: .15
    },
    headerText: {
        fontSize: 32,
        color: '#EEE',
        fontWeight: 600
    },
    avatar: {
        backgroundColor: '#EEE',
        width: 48,
        height: 48,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flights: {
        width: '85%',
        flex: .4,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 24
    }
})