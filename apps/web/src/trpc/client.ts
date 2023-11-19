import { createTRPCNext } from "@trpc/next";
import { httpBatchLink, loggerLink } from "@trpc/client";
import superjson from "superjson";
import { TrpcApiRouter } from "@rn-solito-test/trpc/shared";

const getBaseUrl = () => {
	if (typeof window !== "undefined")
		// browser should use relative path
		return "";
	if (process.env.VERCEL_URL)
		// reference for vercel.com
		return `https://${process.env.VERCEL_URL}`;
	if (process.env.RENDER_INTERNAL_HOSTNAME)
		// reference for render.com
		return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
	// assume localhost
	return `http://localhost:${process.env.PORT ?? 3000}`;
};

const queries = createTRPCNext<TrpcApiRouter>({
	config: () => ({
		links: [
			loggerLink({
				enabled: () => process.env.NODE_ENV === "development",
			}),
			httpBatchLink({
				url: `${getBaseUrl()}/api/trpc`,
			}),
		],
		transformer: superjson,
	}),
	ssr: false,
});

export default queries;
