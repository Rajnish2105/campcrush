import { Link } from "expo-router";
import { Dispatch, SetStateAction, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Keyboard,
} from "react-native";

// Custom input component with label on the border
const BorderLabelInput = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  ...props
}: {
  label: string;
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
  secureTextEntry?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  [key: string]: any;
}) => {
  return (
    <View style={styles.borderLabelInputContainer}>
      <TextInput
        style={styles.borderLabelInput}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        {...props}
      />
      <Text style={styles.borderLabel}>{label}</Text>
    </View>
  );
};

export default function SignInPage() {
  const [rollNumber, setRollNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = () => {
    if (!rollNumber || !password) {
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Signing in with:", { rollNumber, password });
      setIsLoading(false);
      // Navigate to next screen or handle authentication
    }, 1500);
  };

  return (
    <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={require("../../assets/bg.gif")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingView}
        >
          <View style={styles.formContainer}>
            <Text style={styles.title}>Sign In!</Text>

            <View style={styles.inputWrapper}>
              <BorderLabelInput
                label="Roll Number"
                value={rollNumber}
                onChangeText={setRollNumber}
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputWrapper}>
              <BorderLabelInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity
              style={[styles.button, isLoading && styles.buttonLoading]}
              onPress={handleSignIn}
              disabled={isLoading}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>
                {isLoading ? "Signing in..." : "Log In"}
              </Text>
            </TouchableOpacity>
            <Link href={"/home"}>home</Link>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  formContainer: {
    width: "95%",
    padding: 25,
    borderRadius: 20,
    backgroundColor: "#fff",
    boxShadow: "0 4px 15px 5px rgba(0,0,0,0.55)",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 25,
    textAlign: "center",
    color: "#8B7E78",
    letterSpacing: 1,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  borderLabelInputContainer: {
    position: "relative",
    marginTop: 5,
  },
  borderLabelInput: {
    width: "100%",
    height: 55,
    borderWidth: 1,
    borderColor: "#8B7E78",
    borderRadius: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
  },
  borderLabel: {
    position: "absolute",
    top: -10,
    left: 15,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    fontSize: 14,
    color: "#8B7E78",
  },
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#8B7E78",
    borderRadius: 15,
    backgroundColor: "#A09D9D",
  },
  buttonLoading: {
    backgroundColor: "#BCBCBC",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
