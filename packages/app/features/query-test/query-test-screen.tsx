import { api } from "@rn-solito-test/trpc/client";
import { Button, Stack, Text, View, H1, Paragraph } from "tamagui";

export const QueryTestScreen = () => {
	const { data, refetch } = api.test.getMessage.useQuery();

	return (
		<Stack gap="$3">
			<H1>Query Test Page</H1>
			<View padding="$3" backgroundColor="$gray6" borderRadius="$3">
				<Paragraph>{data ?? "Loading..."}</Paragraph>
			</View>
			<Button onPress={() => refetch()} theme="blue">
				Refetch
			</Button>
		</Stack>
	);
};
