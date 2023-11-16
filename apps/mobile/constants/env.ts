import { z } from "zod";

const envSchema = z.object({
	API_ROOT_URL: z.string(),
});

type Env = z.infer<typeof envSchema>;

const envInput: Record<keyof Env, string | undefined> = {
	API_ROOT_URL: process.env.EXPO_PUBLIC_API_ROOT_URL,
};

export const env = envSchema.parse(envInput);
