import { StyleSheet, Text, Platform, Button, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import FilledButton from './Get Started/filledButton'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import DatePickerModal from './DatePickerModal';
import { useDispatch, useSelector } from 'react-redux';
import { dateTimePickerModal } from '../redux/actions';
import { formatDate } from '../util/formatDate';
import PageLoading from './PageLoading';
import { useNavigation } from '@react-navigation/native';
import { getCompatibleTicket } from '../util/getCompatibleTicket';

export default function SearchComponent() {
    const dispatch = useDispatch();
    //const currentDate = new Date().toLocaleDateString();
    const modalOpen = useSelector(state => state.datePickerModal)
    const departure = useSelector(state => state.dateTimePick.departure)
    const returnTime = useSelector(state => state.dateTimePick.returnTime)
    const [forDeparture, setDeparture] = useState(true)
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [loading, setLoading] = useState(false)
    const [passengerCount, setPassengerCount] = useState(1)
    const navigation = useNavigation()
    const handleOpenModal = (event, name) => {
        setDeparture(name === 'departure' ? true : false)
        dispatch(dateTimePickerModal())
    }

    const handlePassengerCount = (type) => {
        if (type === "PLUS") {
            setPassengerCount(passengerCount + 1)
        } else {
            setPassengerCount(passengerCount === 1 ? 1 : (passengerCount > 1 && passengerCount - 1))
        }
    }

    const data = {
        from, to, departure, returnTime, passengerCount
    }

    const searchData = getCompatibleTicket(data)


    const handleSearch = () => {
        if (from && to) {
            setLoading(true)
            navigation.navigate('Search Details', { "data": searchData })
            setTimeout(() => {
                setLoading(false)
            }, 1200)
        }
    }

    const date = new Date()

    const handleRotate = () => {
        const tmp = from;
        setFrom(to);
        setTo(tmp);
    }


    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <PageLoading modalVisible={loading} />
                <TouchableOpacity style={styles.revertBtn} onPress={handleRotate}>
                    <FontAwesome5 name="exchange-alt" size={24} color="#10A37F" />
                </TouchableOpacity>
                <TextInput
                    mode="outlined"
                    label="From"
                    style={styles.input}
                    theme={{
                        roundness: 6
                    }}
                    value={from}
                    onChangeText={(text) => setFrom(text)}
                    activeOutlineColor="#10A37F"
                    outlineColor="#DDD"
                    right={
                        <TextInput.Icon
                            icon={() => (
                                <FontAwesome5 name="plane-departure" size={18} color="#10A37F" />
                            )}

                        />
                    }
                />
                <TextInput
                    mode="outlined"
                    label="To"
                    style={styles.input}
                    theme={{
                        roundness: 6,
                    }}
                    value={to}
                    onChangeText={(text) => setTo(text)}
                    activeOutlineColor="#10A37F"
                    outlineColor="#DDD"
                    right={
                        <TextInput.Icon
                            icon={() => (
                                <FontAwesome5 name="plane-arrival" size={18} color="#10A37F" />
                            )}

                        />
                    }
                />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <TouchableOpacity onPress={(event) => handleOpenModal(event, 'departure')} style={styles.pickerContainer}>
                    <Text style={styles.pickerText}>
                        {formatDate(departure)}
                    </Text>
                    <AntDesign name="calendar" size={24} color="#10A37F" />
                </TouchableOpacity>

                <TouchableOpacity onPress={(event) => handleOpenModal(event, 'return')} style={styles.pickerContainer}>
                    <Text style={styles.pickerText}>
                        {formatDate(returnTime)}
                    </Text>
                    <AntDesign name="calendar" size={24} color="#10A37F" />
                </TouchableOpacity>
            </View>
            <View style={styles.passengerContainer}>
                <TextInput
                    mode="outlined"
                    label="Seat"
                    editable={false}
                    style={styles.passengerInput}
                    theme={{
                        roundness: 6,
                    }}
                    activeOutlineColor="#10A37F"
                    outlineColor="#DDD"
                    left={<TextInput.Affix text="Seat | " />}
                />
                <View style={styles.passengerCount}>
                    <TouchableOpacity style={styles.counterBox} onPress={() => handlePassengerCount("MINUS")}>
                        <AntDesign name="minus" size={20} color="#333" />
                    </TouchableOpacity>
                    <Text>
                        {passengerCount}
                    </Text>
                    <TouchableOpacity style={styles.counterBox} onPress={() => handlePassengerCount("PLUS")}>
                        <AntDesign name="plus" size={20} color="#333" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ width: '100%' }}>
                <FilledButton title={"Search"} onPress={handleSearch} textStyle={{ textTransform: 'none', fontSize: 20, fontWeight: 800 }} color={"#FFA500"} style={{ width: '100%', borderRadius: 12 }} />
            </View>
            {modalOpen && <DatePickerModal departure={forDeparture} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '92.5%',
        flex: .5,
        backgroundColor: '#fff',
        borderRadius: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: "#777",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 5,
        paddingHorizontal: 24,
        paddingVertical: 18
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        gap: 8,
    },
    revertBtn: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#DDD',
        right: '20%'
    },
    input: {
        width: '100%',
        backgroundColor: '#FFFFFE',
        fontSize: 18,
        fontWeight: '500',
        textTransform: 'capitalize'
    },
    halfInput: {
        width: '48%',
        backgroundColor: '#FFFFFE'
    },
    timePicker: {
        backgroundColor: '#FFFFFE',
        borderWidth: 1,
        borderColor: '#DDD',
        width: '48%',
        paddingVertical: 8,
        borderRadius: 6,
    },
    pickerContainer: {
        flexDirection: 'row',
        width: '48%',
        backgroundColor: '#FFFFFE',
        borderWidth: 1,
        borderColor: '#DDD',
        paddingVertical: 12,
        borderRadius: 6,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    pickerText: {
        fontSize: 16,
        fontWeight: '500'
    },
    passengerContainer: {
        width: '100%',
        position: 'relative',
    },
    passengerInput: {
        width: '100%',
        backgroundColor: '#FFFFFE',
        fontSize: 18,
        fontWeight: '500',
        textTransform: 'capitalize'
    },
    passengerCount: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        position: 'absolute',
        top: 15,
        right: 10,
    },
    counterBox: {
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderWidth: .2,
        borderColor: '#DDD',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 6
    }
})