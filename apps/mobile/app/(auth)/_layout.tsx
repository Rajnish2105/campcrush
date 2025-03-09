import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

export default function AuthLayout() {
  return (
    <View style={styles.container}>
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
          presentation: "modal",
        }}
      >
        <Stack.Screen
          name="signin"
          options={{
            title: "Sign In",
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="signup"
          options={{
            title: "Sign Up",
            animation: "slide_from_right",
          }}
        />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
});
