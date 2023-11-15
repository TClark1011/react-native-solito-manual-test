"use client";

import { FC } from "react";
import { api } from "~/react-api-client";

const QueryTestPage: FC = () => {
	const { data, refetch } = api.test.getMessage.useQuery();

	return (
		<div className="w-64 flex flex-col gap-8">
			<pre className="w-full">{data || "Loading..."}</pre>
			<button
				onClick={() => refetch()}
				className="px-4 py-2 bg-blue-500 rounded-sm text-white"
			>
				Refetch
			</button>
		</div>
	);
};

export default QueryTestPage;
