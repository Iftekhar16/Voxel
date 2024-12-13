import { config } from "@tamagui/config";
import { createTamagui } from "@tamagui/core";

// you usually export this from a tamagui.config.ts file
export const tamaguiConfig = createTamagui(config);

// TypeScript types across all Tamagui APIs
type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}