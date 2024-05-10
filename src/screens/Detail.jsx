import React from 'react'
import { View, Text, Button } from 'react-native'

export const Detail = ({ navigation }) => {
	return (
		<View>
			<Text>Detail</Text>
			<Button
				title="Back"
				onPress={() => navigation.goBack()}
			/>
		</View>
	)
}
