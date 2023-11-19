declare module "next-compose-plugins" {
	import { NextConfig } from "next";
	type NextConfigWrapper = (nextConfig: NextConfig) => NextConfig;

	export default function composePlugins(
		wrappers: NextConfigWrapper[],
		nextConfig: NextConfig,
	): NextConfig;

	// export default function composePlugins<T>(plugins: T[]): T[];
}
