import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useMemo } from "react";
import { useColorScheme } from "react-native";
import { TRPCReactProvider } from "@rn-solito-test/trpc/client";
import { env } from "../constants/env";
import { UIProvider, uiConfig } from "@rn-solito-test/ui";

export { ErrorBoundary } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [fontsLoaded, fontsError] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
		InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.4
	useEffect(() => {
		if (fontsError) throw fontsError;
	}, [fontsError]);

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	return (
		<UIProvider config={uiConfig} defaultTheme={colorScheme ?? undefined}>
			<TRPCReactProvider baseUrl={env.API_ROOT_URL} disableLogging>
				<ThemeProvider
					value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
				>
					<Stack>
						<Stack.Screen name="index" options={{ headerShown: false }} />
						<Stack.Screen name="query-test/index" />
					</Stack>
				</ThemeProvider>
			</TRPCReactProvider>
		</UIProvider>
	);
}
