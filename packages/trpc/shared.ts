import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import superjson from "superjson";
import { TrpcApiRouter } from "./server/app";

export const transformer = superjson;

export const apiEndpoint = "/api/trpc";

export const getTRPCHandlerUrl = (baseUrl: string) => {
	return baseUrl + apiEndpoint;
};

export type { TrpcApiRouter };

/**
 * Inference helper for inputs.
 *
 * @example type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<TrpcApiRouter>;

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<TrpcApiRouter>;
