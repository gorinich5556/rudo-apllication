import React from "react";
import Accunt from "./components/accunt";
import Work from "./components/work";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen
                name="Accunt"
                component={Accunt}
                options = {{title: 'Аккаунти', headerShown: false }}
                
                
                />
            <Stack.Screen
                name="Work"
                component={Work}
                options = {{title: 'Work' , headerShown: false }}
                />
        </Stack.Navigator>
    </NavigationContainer>;
}