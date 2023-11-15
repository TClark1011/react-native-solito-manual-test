import { testRouter } from "./routers/test-router";
import { router } from "./trpc";

export const trpcApiRouter = router({
	test: testRouter,
});

export type TrpcApiRouter = typeof trpcApiRouter;
