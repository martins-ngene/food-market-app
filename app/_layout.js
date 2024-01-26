import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerBackVisible: false,
        headerShadowVisible: false,
      }}
    />
  );
}
