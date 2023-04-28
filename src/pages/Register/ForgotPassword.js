import { Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { Fragment, useState } from 'react'
import { forgotPass } from '../../../assets'
import { TextInput } from 'react-native-paper'
import FilledButton from './../../components/Get Started/filledButton';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../../firebaseConfig';
import DefaultErrorModal from "../../components/DefaultErrorModal";
import PageLoading from '../../components/PageLoading';
import { useNavigation } from '@react-navigation/native';

function ForgotPassword() {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [errModalVisible, setErrModalVisible] = useState(false)
    const [modalVisible, setVisible] = useState(false)

    const handleClose = () => {
        setErrModalVisible(false)
    }

    const handleSend = () => {
        if (!email && !password) {
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setVisible(true);
                setTimeout(() => {
                    navigation.navigate('Login');
                    setVisible(false);
                }, 1800)
            })
            .catch(() => {
                setErrModalVisible(true);
            })
    }
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <DefaultErrorModal modalVisible={errModalVisible} onPress={handleClose} />
            <SafeAreaView style={styles.insider}>
                <PageLoading modalVisible={modalVisible} />
                <View style={styles.close} />
                <View style={styles.imageContainer}>
                    <Image source={forgotPass} style={styles.image} />
                </View>
                <View style={styles.resTextContainer}>
                    <Text style={styles.resetText}>
                        Please enter your email address below. We will send you a link to reset your password.
                    </Text>
                </View>
                <View style={styles.sendContainer}>
                    <TextInput
                        mode="outlined"
                        label="E Mail"
                        outlineColor='#DDD'
                        activeOutlineColor='#10A37F'
                        theme={{
                            roundness: 12
                        }}
                        style={{ marginTop: 16, width: '100%' }}
                        onChangeText={text => setEmail(text)}
                    />
                    <View style={{ width: '100%', marginVertical: 12 }}>
                        <FilledButton onPress={handleSend} style={{ width: '100%', paddingVertical: 14, borderRadius: 12 }} title={"Send"} color={"#10A37F"} />
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    insider: {
        flex: 1,
        width: '85%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',

    },
    close: {
        position: 'absolute',
        top: '2%',
        width: '15%',
        height: 3,
        borderRadius: 100,
        backgroundColor: '#BBB',
        zIndex: 10
    },
    imageContainer: {
        width: '100%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
        paddingVertical: '5%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    resTextContainer: {
        width: '100%'
    },
    resetText: {
        fontSize: 19,
        fontWeight: 300
    },
    sendContainer: {
        flex: .4,
        width: '100%',
        justifyContent: 'space-between'
    }
})