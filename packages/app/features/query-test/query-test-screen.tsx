import { api } from "@rn-solito-test/trpc/client";
import { ContentContainer } from "@rn-solito-test/ui";
import { Button, Stack, Text, View, H1, Paragraph } from "tamagui";

export const QueryTestScreen = () => {
	const { data, refetch } = api.test.getMessage.useQuery();

	return (
		<ContentContainer>
			<Stack w="100%" gap="$3" alignItems="center">
				<H1>Query Test Page</H1>
				<View w="100%" padding="$3" backgroundColor="$gray6" borderRadius="$3">
					<Paragraph>{data ?? "Loading..."}</Paragraph>
				</View>
				<Button onPress={() => refetch()} theme="blue" w="max-content">
					Refetch
				</Button>
			</Stack>
		</ContentContainer>
	);
};
