"use client";

import { FC, ReactNode } from "react";
import { UIProvider, uiConfig } from "@rn-solito-test/ui";

export const AppProvider: FC<{ children?: ReactNode }> = ({ children }) => (
	<UIProvider config={uiConfig}>{children}</UIProvider>
);
