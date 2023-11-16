import { StyleSheet, Text, View } from "react-native";
import { TextLink } from "solito/link";

export const LandingScreen = () => {
	return (
		<View style={styles.root}>
			<Text>This is the landing page</Text>
			<TextLink href="/query-test">Go to the query test page</TextLink>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: 16,
	},
});
