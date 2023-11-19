import { FC, PropsWithChildren } from "react";
import { View, styled } from "tamagui";

export const ContentContainer: FC<PropsWithChildren> = ({ children }) => (
	<View width="100%" justifyContent="center" display="flex">
		<View maxWidth={800} width="100%">
			{children}
		</View>
	</View>
);
