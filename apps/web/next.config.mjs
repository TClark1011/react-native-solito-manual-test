import { withTamagui as createWithTamagui } from "@tamagui/next-plugin";
import withPlugins from "next-compose-plugins";

/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: [
		"solito",
		"react-native-web",
		"expo-linking",
		"expo-constants",
		"expo-modules-core",
	],
	typescript: {
		ignoreBuildErrors: true,
	},
	headers: async () => [
		{
			// Allow CORS requests on the API for the mobile app
			source: "/api/:path*", // matching all API routes
			headers: [
				{ key: "Access-Control-Allow-Credentials", value: "true" },
				{ key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
				{
					key: "Access-Control-Allow-Methods",
					value: "GET,DELETE,PATCH,POST,PUT",
				},
				{
					key: "Access-Control-Allow-Headers",
					value:
						"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
				},
			],
		},
	],
};

const withTamagui = createWithTamagui({
	config: "./src/tamagui.config.ts",
	components: ["tamagui", "@rn-solito-test/ui"],
	importsWhitelist: ["constants.js", "colors.js"],
	outputCSS:
		process.env.NODE_ENV === "production" ? "./public/tamagui.css" : null,
	// logTimings: true,
	// disableExtraction: process.env.NODE_ENV === "development",
	// shouldExtract: (path) => {
	// 	if (path.includes(join("packages", "app"))) {
	// 		return true;
	// 	}
	// },
	// excludeReactNativeWebExports: [
	// 	// We use alternative UI components to these, so we want to make sure
	// 	// they don't get included in the bundle.
	// 	"Switch",
	// 	"ProgressBar",
	// 	"Picker",
	// 	"CheckBox",
	// 	"Touchable",
	// ],
});

const finalConfig = withPlugins([withTamagui], nextConfig);

export default finalConfig;
