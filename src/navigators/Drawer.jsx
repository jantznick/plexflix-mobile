import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Tab } from './BottomTab';
import { Profile } from '../screens/Profile';

const DrawerNav = createDrawerNavigator();

export const Drawer = () => {
	return (
		<DrawerNav.Navigator screenOptions={{ headerShown: false }}>
			<DrawerNav.Screen name="DrawerHome" component={Tab} />
			<DrawerNav.Screen name="Profile" component={Profile} />
		</DrawerNav.Navigator>
	);
}