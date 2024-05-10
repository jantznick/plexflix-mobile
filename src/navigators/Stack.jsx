import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Detail } from '../screens/Detail';
import { Main } from '../screens/Main';

const StackNav = createNativeStackNavigator();

export const Stack = () => {
	return (
		<StackNav.Navigator screenOptions={{ headerShown: false }}>
			<StackNav.Screen name="StackHome" component={Main} />
			<StackNav.Screen name="Detail" component={Detail} />
		</StackNav.Navigator>
	)
}