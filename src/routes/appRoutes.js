import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House, IdentificationBadge } from 'phosphor-react-native';
import colors from '../global/colors';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import Players from '../screens/Players';
import Settings from '../screens/Settings';

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
                    <House size={size} color={color} />
                ),
            }} />
            <Tab.Screen name="Configurações" component={Settings} options={{
                tabBarIcon: ({ size, color }) => (
                    <IdentificationBadge size={size} color={color} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="signin" component={SignIn} />
            <Screen name="home" component={Tabs} />
            <Screen name="players" component={Players} />
        </Navigator>
    )
}