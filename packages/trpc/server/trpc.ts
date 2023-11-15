import { initTRPC } from "@trpc/server";
import { transformer } from "../shared";

export const t = initTRPC.create({
	transformer,
});

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
