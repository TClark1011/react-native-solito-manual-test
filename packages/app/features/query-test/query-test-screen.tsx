import { api } from "@rn-solito-test/trpc/client";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const QueryTestScreen = () => {
	const { data, refetch } = api.test.getMessage.useQuery();

	return (
		<View style={styles.root}>
			<Text style={styles.title}>This is the query test page</Text>
			<View style={styles.dataBox}>
				<Text>{data ?? "Loading..."}</Text>
			</View>
			<Pressable style={styles.button} onPress={() => refetch()}>
				<Text style={styles.buttonLabel}>Refetch</Text>
			</Pressable>
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
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	dataBox: {
		padding: 16,
		borderRadius: 8,
		backgroundColor: "#ddd",
	},
	button: {
		backgroundColor: "#0084FF",
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 8,
	},
	buttonLabel: {
		color: "white",
		fontWeight: "bold",
	},
});
