"use client";

import {
	createTRPCReact,
	loggerLink,
	unstable_httpBatchStreamLink,
} from "@trpc/react-query";
import {
	getTRPCHandlerUrl,
	type TrpcApiRouter,
	transformer,
} from "@rn-solito-test/trpc/shared";
import { FC, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const api = createTRPCReact<TrpcApiRouter>();

export type TRPCReactProviderProps = {
	children: React.ReactNode;
	headers: Headers;
};

export const TRPCReactProvider: FC<TRPCReactProviderProps> = ({
	children,
	headers,
}) => {
	const [queryClient] = useState(() => new QueryClient({}));

	const [trpcClient] = useState(() =>
		api.createClient({
			transformer,
			links: [
				loggerLink({
					enabled: (op) =>
						process.env.NODE_ENV === "development" ||
						(op.direction === "down" && op.result instanceof Error),
				}),
				unstable_httpBatchStreamLink({
					url: getTRPCHandlerUrl(),
					headers() {
						const heads = new Map(headers);

						return Object.fromEntries(heads);
					},
				}),
			],
		}),
	);

	return (
		<QueryClientProvider client={queryClient}>
			<api.Provider client={trpcClient} queryClient={queryClient}>
				{children}
			</api.Provider>
		</QueryClientProvider>
	);
};
