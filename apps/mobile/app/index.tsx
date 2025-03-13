import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function LandingPage() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <StatusBar barStyle="light-content" />

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.logo}>CONNECT</Text>
        <Text style={styles.tagline}>Find your perfect match</Text>
      </View>

      {/* Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/bg.gif")}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.overlay} />
        </View>
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Real Connections</Text>
          <Text style={styles.heroSubtitle}>Beyond the swipe</Text>
        </View>
      </View>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <FeatureCard
          icon="people-outline"
          title="Meaningful Matches"
          about="Our algorithm connects you with people who share your interests and
            values"
        />

        <FeatureCard
          icon="shield-checkmark-outline"
          title="Safe & Secure"
          about="Your privacy matters. All profiles are verified for your safety"
        />

        <FeatureCard
          icon="heart-outline"
          title="Success Stories"
          about="Join thousands who have found their perfect match on our platform"
        />
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Ready to find your match?</Text>
        <View style={styles.ctaButtons}>
          <Link href="/signup" asChild>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Sign up</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/signin" asChild>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Sign in</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © {new Date().getFullYear()} CONNECT
        </Text>
        <Text style={styles.footerText}>Terms & Privacy</Text>
      </View>
    </ScrollView>
  );
}

function FeatureCard({
  icon,
  title,
  about,
}: {
  icon: string;
  title: string;
  about: string;
}) {
  return (
    <View style={styles.featureItem}>
      <View style={styles.feature}>
        <View style={styles.featureIconContainer}>
          <Ionicons name={icon} size={32} color="white" />
        </View>
        <Text style={styles.featureTitle}>{title}</Text>
      </View>

      <Text style={styles.featureDescription}>{about}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  contentContainer: {
    paddingBottom: 40,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 10,
  },
  tagline: {
    fontSize: 16,
    color: "#aaa",
    marginTop: 5,
  },
  heroSection: {
    height: height * 0.5,
    marginTop: 30,
    position: "relative",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  heroContent: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 20,
    color: "#ddd",
  },
  featuresSection: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  feature: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  featureItem: {
    marginBottom: 30,
  },
  featureIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  featureDescription: {
    fontSize: 16,
    paddingLeft: 70,
    color: "#aaa",
    lineHeight: 24,
  },
  ctaSection: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: "#111",
    alignItems: "center",
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  ctaButtons: {
    width: "100%",
  },
  ancher: {
    width: "100%",
  },
  primaryButton: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 15,
    width: "100%",
  },
  primaryButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    width: "100%",
  },
  secondaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#333",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: {
    color: "#666",
    fontSize: 14,
  },
});
