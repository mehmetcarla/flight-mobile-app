import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Main from "../pages/Main";
import GetStarted from '../components/Get Started/getStarted';
import { useSelector } from "react-redux";
import { Login, Sign, ForgotPassword } from "../pages/Register";
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from "react";

const Stack = createStackNavigator();

export default function MainRoute() {

    const [appAuth, setAuth] = useState(false);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuth(true)
        } else {
            console.log('Auth Error!');
            setAuth(false)
        }
    })

    const getStarted = useSelector(state => state.Started)
    const isAuth = useSelector(state => state.Auth)

    if (appAuth) {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Main" component={Main} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!getStarted && <Stack.Screen name="GetStarted" component={GetStarted} />}
                {!isAuth && (
                    <>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Sign" component={Sign} />
                        <Stack.Screen name="Forgot Password" options={{ presentation: 'modal' }} component={ForgotPassword} />
                    </>
                )}
                <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}