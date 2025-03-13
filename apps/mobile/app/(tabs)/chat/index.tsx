import { StyleSheet, View, Text } from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleContainer}>Chat Room</Text>
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
  titleContainer: {
    fontSize: 25,
    letterSpacing: 45,
  },
});
