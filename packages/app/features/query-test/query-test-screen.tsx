import { api } from "@rn-solito-test/trpc/client";
import { Button, Stack, Text, View } from "tamagui";

export const QueryTestScreen = () => {
	const { data, refetch } = api.test.getMessage.useQuery();

	return (
		<Stack gap="$3">
			<Text fontWeight="bold" fontSize={20}>
				This is the query test page
			</Text>
			<View padding="$3" backgroundColor="$gray6" borderRadius="$3">
				<Text>{data ?? "Loading..."}</Text>
			</View>
			{/* <Pressable style={styles.button} onPress={() => refetch()}>
				<Text style={styles.buttonLabel}>Refetch</Text>
			</Pressable> */}
			<Button onPress={() => refetch()} theme="blue_active">
				<Text>Refetch</Text>
			</Button>
		</Stack>
	);
};
