import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Home page! </Text>
      <Image style={styles.hero} source={require("../../assets/bg.gif")} />
      <View style={styles.info}>
        <View style={styles.about}>
          <Text style={styles.aboutName}>Username</Text>
          <Text style={styles.aboutClass}>
            Guru Jambeshwer University of Science & Technology
          </Text>
        </View>
        <Ionicons name="heart" size={40} style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 100,
    width: "60%",
    margin: "auto",
  },
  title: {
    fontSize: 25,
    letterSpacing: 5,
  },
  hero: {
    borderRadius: 15,
    marginVertical: 5,
    boxShadow: "0 4px 15px 5px rgba(0,0,0,0.55)",
  },
  info: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  about: {
    padding: 3,
  },
  aboutName: {
    fontSize: 25,
    letterSpacing: 3,
  },
  aboutClass: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.6)",
  },
  icon: {},
});
