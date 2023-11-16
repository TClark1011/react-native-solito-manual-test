"use client";

import { createTRPCReact, httpBatchLink, loggerLink } from "@trpc/react-query";
import { getTRPCHandlerUrl, type TrpcApiRouter, transformer } from "../shared";
import { FC, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const api = createTRPCReact<TrpcApiRouter>();

export type TRPCReactProviderProps = {
	children: React.ReactNode;
	headers?: Headers;
	baseUrl: string;
	disableLogging?: boolean;
};

export const TRPCReactProvider: FC<TRPCReactProviderProps> = ({
	children,
	headers,
	baseUrl,
	disableLogging = false,
}) => {
	const [queryClient] = useState(() => new QueryClient({}));

	const [trpcClient] = useState(() =>
		api.createClient({
			transformer,
			links: [
				loggerLink({
					enabled: (op) =>
						!disableLogging &&
						(process.env.NODE_ENV === "development" ||
							(op.direction === "down" && op.result instanceof Error)),
				}),
				httpBatchLink({
					url: getTRPCHandlerUrl(baseUrl),
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
