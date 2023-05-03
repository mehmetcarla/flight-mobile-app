import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Search, Reservation, Profile } from './screens';
import HomeStack from './TabScreens/HomeStack';
import { Octicons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Main() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false
            }}>
            <Tab.Screen
                name="Home Stack"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer}>
                            <View style={focused ? styles.activeIcon : null} />
                            <Octicons name="home" size={24} color={focused ? "#10A37F" : "#DDD"} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer}>
                            <View style={focused ? styles.activeIcon : null} />
                            <FontAwesome name="search" size={24} color={focused ? "#10A37F" : "#DDD"} />
                        </View>
                    ),
                }} />
            <Tab.Screen
                name="Reservation"
                component={Reservation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer}>
                            <View style={focused ? styles.activeIcon : null} />
                            <Ionicons name="ios-notifications" size={24} color={focused ? "#10A37F" : "#DDD"} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer}>
                            <View style={focused ? styles.activeIcon : null} />
                            <FontAwesome name="user" size={24} color={focused ? "#10A37F" : "#DDD"} />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: '100%'
    },
    activeIcon: {
        position: 'absolute',
        top: 0,
        backgroundColor: '#10A370',
        width: '50%',
        height: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    }
})