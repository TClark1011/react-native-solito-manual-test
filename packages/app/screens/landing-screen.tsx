import { Text, Stack } from "@rn-solito-test/ui";
import { TextLink } from "solito/link";

export const LandingScreen = () => {
	return (
		<Stack alignItems="center" gap={16}>
			<Text>This is the landing page</Text>
			<TextLink href="/query-test">Go to the query test page</TextLink>
		</Stack>
	);
};
