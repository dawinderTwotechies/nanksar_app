import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, SplashScreen } from '../screens';
import { ScreenHeaders } from '../componets';

const Stack = createNativeStackNavigator();

export default function RootStack() {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={() => ({
                    header: () => <ScreenHeaders/>
                })}
            />

        </Stack.Navigator>
    );
}