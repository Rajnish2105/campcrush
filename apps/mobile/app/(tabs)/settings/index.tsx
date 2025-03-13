import { Link, useRouter } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function SettingsPage() {
  return (
    <View style={styles.container}>
      <View style={styles.account}>
        <Image
          source={require("../../../assets/bg.gif")}
          style={styles.picture}
        />
        <View style={styles.about}>
          <Text style={styles.aboutName}>Rajnish Kumar</Text>
          <Text style={styles.aboutClass}>
            Guru Jambeshwer University of Science & Technology
          </Text>
        </View>
      </View>

      {/* this is the line */}
      <View style={styles.line} />

      {/* the boxes */}
      <Options text={"Past Experince"} />
      <Options text={"Security & Privacy"} />
      <Options text={"Block List"} />
    </View>
  );
}

type SettingsRoute = {
  title: string;
  path: string;
};

const SETTINGS_OPTIONS: SettingsRoute[] = [
  { title: "Past Experience", path: "past_experience" },
  { title: "Security & Privacy", path: "security_and_privacy" },
  { title: "Block List", path: "block_list" },
];

function Options({ text }: { text: string }) {
  const router = useRouter();
  const page = text.toLowerCase().replaceAll(" ", "_");

  const handlePress = () => {
    // Use the proper route structure for tabs
    router.push({
      pathname: "/(tabs)/settings/[slug]",
      params: { slug: page },
    });
  };

  return (
    <TouchableOpacity style={styles.box} onPress={handlePress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    minHeight: "100%",
  },
  account: {
    width: "95%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  picture: {
    width: 90,
    height: 90,
    borderRadius: "50%",
  },
  about: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flex: 1,
  },
  aboutName: {
    fontSize: 25,
    letterSpacing: 5,
  },
  aboutClass: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.66)",
  },
  line: {
    borderWidth: 2,
    width: "95%",
    borderRadius: 5,
    marginVertical: 10,
  },
  box: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "95%",
    minHeight: 30,
    letterSpacing: 1,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
});
