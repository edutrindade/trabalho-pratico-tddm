import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ArrowLeft } from 'phosphor-react-native';
import colors from '../global/colors';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import SignIn from '../screens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    paddingHorizontal: 10,
                    paddingBottom: 5,
                    backgroundColor: colors('white'),
                },
                headerShown: false,
                tabBarActiveTintColor: colors('black'),
                inactiveTintColor: colors('grey'),
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ size, color }) => (
                    <ArrowLeft size={size} color={color} />
                ),
            }} />
            <Tab.Screen name="Perfil" component={Profile} />
        </Tab.Navigator>
    );
}

export default function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="signin" component={SignIn} />
            <Screen name="home" component={Tabs} />
        </Navigator>
    )
}