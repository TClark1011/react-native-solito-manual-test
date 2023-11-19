import { trpcApiRouter } from "@rn-solito-test/trpc/server/app";
import * as trpcNext from "@trpc/server/adapters/next";

export default trpcNext.createNextApiHandler({
	router: trpcApiRouter,
});
