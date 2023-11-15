import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { trpcApiRouter } from "@rn-solito-test/trpc/server/app";
import { apiEndpoint } from "@rn-solito-test/trpc/shared";

const handler = (req: Request) =>
	fetchRequestHandler({
		endpoint: apiEndpoint,
		req,
		router: trpcApiRouter,
		createContext: () => ({ a: 5 }),
	});

export { handler as GET, handler as POST };
