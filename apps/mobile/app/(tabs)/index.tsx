import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Home page! </Text>
      <Link href={"/signin"}>go to singin</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 100,
  },
  title: {
    fontSize: 25,
    letterSpacing: 5,
  },
});
