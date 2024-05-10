import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Settings } from '../screens/Settings'
import { Swiper } from '../screens/Swiper';
import { Main } from '../screens/Main';

const TabNav = createBottomTabNavigator();

export const Tab = () => {
	return (
		<TabNav.Navigator screenOptions={{ headerShown: false }}>
			<TabNav.Screen name="Home" component={Main} />
			<TabNav.Screen name="Swiper" component={Swiper} />
			<TabNav.Screen name="Settings" component={Settings} />
		</TabNav.Navigator>
	);
}