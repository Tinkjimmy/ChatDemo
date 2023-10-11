import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Platform } from "react-native";
import { getAuth, signInAnonymously } from "firebase/auth";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#090C08");

  const auth = getAuth();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/Background.png")}
        style={styles.image}
      >
        <Text style={styles.title}>Chat App</Text>
        <View style={styles.innerContainer}>
          {/* Set name and update name state accordingly */}
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Your name"
          />
          {/* Choose color and set state accordingly */}
          <Text style={styles.colorText}>Choose Background Color</Text>
          <View style={styles.colorContainer}>
            <TouchableOpacity
              style={[styles.color, { backgroundColor: "#090C08" }]}
              onPress={() => setColor("#090C08")}
            />
            <TouchableOpacity
              style={[styles.color, { backgroundColor: "#474056" }]}
              onPress={() => setColor("#474056")}
            />
            <TouchableOpacity
              style={[styles.color, { backgroundColor: "#8A95A5" }]}
              onPress={() => setColor("#8A95A5")}
            />
            <TouchableOpacity
              style={[styles.color, { backgroundColor: "#B9C6AE" }]}
              onPress={() => setColor("#B9C6AE")}
            />
          </View>
          {/* Enter the Chat Room Button */}
          <TouchableOpacity
            style={styles.button}
            // Sign in, pass name and color to Chat Screen and enter Chat Room
            onPress={() => {
              signInAnonymously(auth)
                .then((result) => {
                  navigation.navigate("Chat", {
                    userID: result.user.uid,
                    name,
                    color,
                  });
                })
                .catch((error) => {
                  Alert.alert("Unable to sign in, try later again.");
                });
            }}
          >
            <Text style={styles.buttonText}>Start Chatting</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView behavior="padding" />
      ) : null}
    </View>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    width: "88%",
    height: "44%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginBottom: 25,
    overflow: "scroll",
  },
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 25,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
  },
  image: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  colorContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    width: "88%",
    height: 60,
    backgroundColor: "#4803b0",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    backgroundColor: "#757083",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  color: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  colorText: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
  },
  title: {
    fontSize: 45,
    fontWeight: 600,
    color: "#FFFFFF",
    marginTop: "20%",
  },
});

export default Start;
