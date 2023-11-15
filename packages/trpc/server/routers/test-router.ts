import { publicProcedure, router } from "../trpc";

export const testRouter = router({
	getMessage: publicProcedure.query(
		() => `Query was handled at ${new Date().toLocaleTimeString()}`,
	),
});
