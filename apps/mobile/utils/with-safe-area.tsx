import { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const withSafeAreaView =
	<Props,>(Component: FC<Props>): FC<Props> =>
	(props) =>
		(
			<SafeAreaView>
				<Component {...(props as any)} />
			</SafeAreaView>
		);
