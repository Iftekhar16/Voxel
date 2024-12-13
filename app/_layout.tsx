import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

import { TamaguiProvider } from '@tamagui/core';
import "../global.css";
import { PortalProvider } from "@tamagui/portal";
import { tamaguiConfig } from "@/tamagui.config";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <TamaguiProvider config={tamaguiConfig}>
        <GestureHandlerRootView>
          <PortalProvider shouldAddRootHost>
            <Stack>
              <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
              <Stack.Screen name="toDo/[id]" options={{ headerTitle: "To Do" }} />
              <Stack.Screen name="/today" options={{ headerTitle: "Today" }} />
              <Stack.Screen name="/projects" options={{ headerTitle: "Projects" }} />
              <Stack.Screen name="/project" options={{ headerTitle: "Project" }} />
              <Stack.Screen name="/task" options={{ headerTitle: "Task" }} />
            </Stack>
            <StatusBar animated={true} style="auto" />
          </PortalProvider>
        </GestureHandlerRootView>
      </TamaguiProvider>
    </ThemeProvider>
  );
}
