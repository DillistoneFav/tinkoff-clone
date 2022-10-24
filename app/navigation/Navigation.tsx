import React, {FC} from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {useAuth} from "../hooks/useAuth";

import Auth from "../components/Screens/Auth";
import Home from "../components/Screens/Home";
import Profile from "../components/Screens/Profile";
import More from "../components/Screens/More";
import Services from "../components/Screens/Services";
import Support from "../components/Screens/Support";
import Payments from "../components/Screens/Payments";

const Stack = createNativeStackNavigator()

const Navigation: FC = () => {
    const {user} = useAuth()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {user ?
                    <>
                        <Stack.Screen name={'Home'} component={Home}/>
                        <Stack.Screen name={'More'} component={More}/>
                        <Stack.Screen name={'Payments'} component={Payments}/>
                        <Stack.Screen name={'Profile'} component={Profile}/>
                        <Stack.Screen name={'Services'} component={Services}/>
                        <Stack.Screen name={'Support'} component={Support}/>
                    </>
                    :
                    <Stack.Screen name={'Auth'} component={Auth}/>
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
