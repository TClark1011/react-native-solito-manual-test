import { Text, Stack, H1, Button, ContentContainer } from "@rn-solito-test/ui";
import { useLink } from "solito/link";

export const LandingScreen = () => {
	const linkProps = useLink({
		href: "/query-test",
	});
	return (
		<ContentContainer>
			<Stack w="100%" alignItems="center" gap={16}>
				<H1>This is the landing page</H1>
				<Button {...linkProps} theme="blue">
					Go to the query test page
				</Button>
			</Stack>
		</ContentContainer>
	);
};
