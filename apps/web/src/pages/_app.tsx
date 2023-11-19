import "@tamagui/core/reset.css";
import "@tamagui/font-inter/css/400.css";
import "@tamagui/font-inter/css/700.css";
import "raf/polyfill";

import { NextThemeProvider, useRootTheme } from "@tamagui/next-theme";
import Head from "next/head";
import React from "react";
import type { SolitoAppProps } from "solito";
import { UIProvider, uiConfig } from "@rn-solito-test/ui";
import queries from "~/trpc/client";

if (process.env.NODE_ENV === "production") {
	require("../public/tamagui.css");
}

function MyApp({ Component, pageProps }: SolitoAppProps) {
	return (
		<>
			<Head>
				<title>Tamagui Example App</title>
				<meta name="description" content="Tamagui, Solito, Expo & Next.js" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useRootTheme();

	return (
		<NextThemeProvider
			onChangeTheme={(next) => {
				setTheme(next as any);
			}}
		>
			<UIProvider config={uiConfig} disableRootThemeClass defaultTheme={theme}>
				{children}
			</UIProvider>
		</NextThemeProvider>
	);
}

export default queries.withTRPC(MyApp);
