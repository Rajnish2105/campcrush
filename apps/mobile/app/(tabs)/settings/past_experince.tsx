import { StyleSheet, Text, View } from "react-native";

export default function Past() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Past Experience page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    letterSpacing: 5,
  },
});
