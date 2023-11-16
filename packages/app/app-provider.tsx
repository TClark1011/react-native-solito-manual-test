"use client";

import { FC, ReactNode } from "react";
import { TamaguiProvider } from "tamagui";
import { tamaguiConfig } from "./utils/tamagui-config";

export const AppProvider: FC<{ children?: ReactNode }> = ({ children }) => (
	<TamaguiProvider config={tamaguiConfig}>{children}</TamaguiProvider>
);
