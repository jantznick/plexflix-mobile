import { View, Text, Button } from 'react-native'
import React from 'react'
import Wrapper from './Wrapper';

export const Profile = ({ navigation }) => {
  return (
	<Wrapper showDrawerToggle={false}>
		<View className="flex flex-wrap justify-start">
			<Text className="flex text-center">Profile</Text>
			<Button
				title="Back"
				onPress={() => navigation.goBack()}
			/>
		</View>
	</Wrapper>
  )
}
