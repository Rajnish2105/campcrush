import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

interface FormField {
  label: string;
  placeholder: string;
  value: string;
  keytype: "default" | "numeric" | "email-address";
  error: string;
}

interface FormState {
  [key: number]: FormField;
}

type User = {
  rollno: number;
  name: string;
  email: string;
  password: string;
  course: string;
  year: number;
  hobbies: string[];
};

export default function SingupPage() {
  const [index, setIndex] = useState<number>(1);
  const [info, setInfo] = useState<FormState>({
    1: {
      label: "Roll Number",
      placeholder: "Enter your University Roll number...",
      value: "",
      keytype: "numeric",
      error: "",
    },
    2: {
      label: "Full Name",
      placeholder: "University registered Name...",
      value: "",
      keytype: "default",
      error: "",
    },
    3: {
      label: "Email Address",
      placeholder: "Enter your email address...",
      value: "",
      keytype: "email-address",
      error: "",
    },
    4: {
      label: "Password",
      placeholder: "********",
      value: "",
      keytype: "default",
      error: "",
    },
    5: {
      label: "Course",
      placeholder: "Enter you Course (ex. B.Tech)",
      value: "",
      keytype: "default",
      error: "",
    },
    6: {
      label: "Year of Study",
      placeholder: "Enter your year (ex. 4)",
      value: "",
      keytype: "numeric",
      error: "",
    },
    7: {
      label: "Hobbies",
      placeholder: "music, singing, etc",
      value: "",
      keytype: "default",
      error: "",
    },
  });

  function handleNext() {
    const currentInfo = info[index];
    let error = "";

    switch (currentInfo.label) {
      case "Roll Number":
        if (currentInfo.value.length !== 12) {
          error = "Please fill in your correct roll no.";
        }
        break;
      case "Year of Study":
        const year = Number(currentInfo.value);
        if (isNaN(year) || year > 4 || year < 1) {
          error = "Please fill in your correct year of study";
        }
        break;
      case "Email Address":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(currentInfo.value)) {
          error = "Please enter a valid email address.";
        }
        break;
      default:
        break;
    }

    if (error) {
      setInfo((prevInfo: any) => ({
        ...prevInfo,
        [index]: {
          ...prevInfo[index],
          error: error,
        },
      }));
      return;
    }

    setInfo((prevInfo: any) => ({
      ...prevInfo,
      [index]: {
        ...prevInfo[index],
        error: "",
      },
    }));

    if (index < 7) {
      setIndex((prev) => prev + 1);
    }
  }

  function handleBack() {
    if (index === 1) return;
    setIndex((prev) => prev - 1);
  }

  function handleSubmit() {
    let data: any = {};
    for (let [, value] of Object.entries(info)) {
      const infoValue = value as { label: string; value: string };
      data[infoValue.label.toLowerCase().replaceAll(" ", "_")] =
        infoValue.value;
    }

    console.log("Our Data", data);
  }

  function handleChange(text: string) {
    if (info[index].keytype === "numeric") {
      if (isNaN(Number(text))) return;
    }

    setInfo((prevInfo: any) => ({
      ...prevInfo,
      [index]: {
        ...prevInfo[index],
        value: text,
      },
    }));
  }

  return (
    <ImageBackground
      source={require("../../assets/bg.gif")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.formContainer}>
        <Text style={styles.label}>{info[index].label}</Text>

        <TextInput
          keyboardType={info[index].keytype}
          style={styles.input}
          value={info[index].value}
          placeholder={info[index].placeholder}
          onChangeText={handleChange}
          secureTextEntry={info[index].label == "Password"}
          autoCorrect={false}
          autoCapitalize="none"
        />

        {info[index].error && (
          <Text style={styles.error}>{info[index].error}</Text>
        )}

        <View style={styles.btnGroup}>
          {index === 1 ? null : (
            <TouchableOpacity style={styles.button} onPress={handleBack}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={
              index == 7 ? [styles.button, styles.submit] : [styles.button]
            }
            onPress={index == 7 ? handleSubmit : handleNext}
          >
            <Text style={styles.buttonText}>
              {index == 7 ? "Submit" : "Next"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundPosition: "center",
  },
  formContainer: {
    width: "90%",
    padding: 20,
    borderWidth: 0,
    borderRadius: 25,
    backgroundColor: "#fff",
    shadowColor: "#272827",
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.56,
    shadowRadius: 5,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: "#8B7E78",
    paddingHorizontal: 5,
    paddingVertical: 10,
    letterSpacing: 2,
  },
  error: {
    margin: 0,
    padding: 1,
    fontSize: 10,
    color: "red",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#8B7E78",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 16,
    color: "#8B7E78",
  },
  btnGroup: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    paddingRight: 10,
    marginTop: 10,
    gap: 10,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#8B7E78",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  submit: {
    backgroundColor: "rgb(62, 245, 45)",
    borderWidth: 0,
    padding: 3,
    color: "rgba(0,0,0,1)",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.56,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: "#8B7E78",
    fontSize: 12,
  },
});
