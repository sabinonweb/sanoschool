import { View, StyleSheet, Pressable, Image,Text } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';
import image from '../assets/images/sheldon.jpeg';
import Animated from 'react-native-reanimated';
const IMAGE = Image.resolveAssetSource(image).uri;

const index = () => {
	return (
		<View style={styles.container}>
            <Animated.Image
						sharedTransitionTag="sharedTag"
						source={{ uri: IMAGE }}
						style={styles.image}
					/>
				<Pressable onPress={()=>router.push('/modal')}>
					<Text>Hi</Text>
				</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignContent: 'center',
		justifyContent: 'center',
		marginTop: 20
	},
	image: {
		width: '100%',
		height: 200,
		resizeMode: 'contain'
	}
});

export default index;