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
import { AppProvider } from "@rn-solito-test/app/app-provider";
import {
	Inter_900Black,
	Inter_100Thin,
	Inter_200ExtraLight,
	Inter_300Light,
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
	Inter_800ExtraBold,
	useFonts as useInterFonts,
} from "@expo-google-fonts/inter";
import { env } from "../constants/env";
import { SafeAreaView } from "react-native-safe-area-context";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [customFontsLoaded, customFontsError] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		...FontAwesome.font,
	});

	const [interLoaded, interError] = useInterFonts({
		Inter_900Black,
		Inter_100Thin,
		Inter_200ExtraLight,
		Inter_300Light,
		Inter_400Regular,
		Inter_500Medium,
		Inter_600SemiBold,
		Inter_700Bold,
		Inter_800ExtraBold,
	});

	const fontsLoaded = customFontsLoaded && interLoaded;

	const fontsError = useMemo(
		() => interError ?? customFontsError,
		[interError, customFontsError],
	);

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
		<AppProvider>
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
		</AppProvider>
	);
}
