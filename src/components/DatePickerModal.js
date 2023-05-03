import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch } from 'react-redux';
import { dateTimePickerModal, departureChange, returnTimeChange } from '../redux/actions';


export default function DatePickerModal({ departure }) {
    const dispatch = useDispatch();
    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        const time = currentDate.toLocaleTimeString('tr-TR', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        if (departure) {
            dispatch(departureChange(time))
        } else {
            dispatch(returnTimeChange(time))
        }
    }


    const handleClose = () => {
        dispatch(dateTimePickerModal())
    }

    const handleConfirm = (date) => {
        const time = date.toLocaleTimeString('tr-TR', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        if (departure) {
            dispatch(departureChange(time))
        } else {
            dispatch(returnTimeChange(time))
        }
        dispatch(dateTimePickerModal())
    }

    return (
        <View style={styles.container}>
            <Modal visible={true} transparent={true} animationType="fade">
                <TouchableOpacity style={styles.modalBackground} onPress={handleClose}>
                    <View style={styles.modalContainer}>
                        <View style={styles.topBtnContainer}>
                            <TouchableOpacity onPress={handleClose} style={styles.btnStyle}>
                                <Text style={styles.btnText}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleConfirm(date)} style={styles.btnStyle}>
                                <Text style={styles.btnText}>
                                    Confirm
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            is24Hour={true}
                            display={"spinner"}
                            onChange={onChange}
                            accentColor="#10A37F"
                            onConfirm={onChange}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
    textInput: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        backgroundColor: '#111',
        padding: 40,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#333",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .35,
        shadowRadius: 20.5,
    },
    topBtnContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '110%',
    },
    btnStyle: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 6
    },
    btnText: {
        fontSize: 18,
        fontWeight: 600,
        color: '#3B99FF'
    }
});