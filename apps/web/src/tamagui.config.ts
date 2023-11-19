// don't import from here, that's handled already
// instead this is just setting types for this folder

import { tamaguiConfig } from "@rn-solito-test/ui";

type Conf = typeof tamaguiConfig;

declare module "tamagui" {
	interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig;
