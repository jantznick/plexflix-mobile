import React from 'react';
import { Button, Pressable, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContext } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from "tailwindcss/colors";

const Wrapper = ({ children, showDrawerToggle = true, title = '' }) => {
	const navigation = React.useContext(NavigationContext);

	return (
		<SafeAreaView className="flex grow justify-start items-center h-full w-full bg-red-400">
			<View className="w-full flex items-start">
				<Text>{title}</Text>
				{showDrawerToggle &&
					<Pressable
						onPress={() => navigation.toggleDrawer()}
						className="text-plexYellow pl-2"
					>
						<Ionicons name="menu-outline" size={32} color={colors.plexYellow} />
					</Pressable>
				}
			</View>
			{children}
		</SafeAreaView>
	)
}

export default Wrapper
