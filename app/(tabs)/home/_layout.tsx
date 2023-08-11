import React from 'react';
import { Stack } from 'expo-router';

const StackLayout = () => {
	return (
		<Stack screenOptions={{headerShown:false}}>
			<Stack.Screen name='index'/>
            <Stack.Screen
				name="details"
				options={{ headerShown: false, animation: 'fade' }}
			/>
            <Stack.Screen
				name="popularServices"
				options={{ headerShown: false, animation: 'fade' }}
			/>
		</Stack>
	);
};

export default StackLayout;