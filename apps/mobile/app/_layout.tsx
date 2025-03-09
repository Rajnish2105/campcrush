import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function LandingPageLayout() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" translucent />
      <Stack
        screenOptions={{
          headerShown: false,
          statusBarTranslucent: true,
          statusBarStyle: "light",
          contentStyle: {
            backgroundColor: "transparent",
          },
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
}
