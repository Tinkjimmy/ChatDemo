import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
const image = require("../img/Background.png");

const backgroundColors = {
  a: "#474056",
  b: "#757083",
  c: "#8A95A5",
  d: "#B9C6AE",
};

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState(backgroundColors.d);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text>Hello Screen1!</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.textColorSelector}>Choose background color:</Text>

          <View style={styles.colorSelector}>
            <TouchableOpacity
              style={[
                styles.circle,
                color === backgroundColors.a && styles.selectedCircle,
                { backgroundColor: backgroundColors.a },
              ]}
              onPress={() => setColor(backgroundColors.a)}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.circle,
                color === backgroundColors.b && styles.selectedCircle,
                { backgroundColor: backgroundColors.b },
              ]}
              onPress={() => setColor(backgroundColors.b)}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.circle,
                color === backgroundColors.c && styles.selectedCircle,
                { backgroundColor: backgroundColors.c },
              ]}
              onPress={() => setColor(backgroundColors.c)}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.circle,
                color === backgroundColors.d && styles.selectedCircle,
                { backgroundColor: backgroundColors.d },
              ]}
              onPress={() => setColor(backgroundColors.d)}
            ></TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      <TextInput
        style={styles.nameTextInput}
        onChangeText={setName}
        value={name}
        placeholder="Type here ..."
      />
      <Button
        title="Go to Chat"
        onPress={() => navigation.navigate("Chat", { name, color })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  textInput: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    padding: 15,
  },
  nameTextInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "transparent",
    padding: "6%",
    flexBasis: 160,
  },
  textColorSelector: {
    fontSize: 16,
    fontWeight: "300",
    color: "#8A95A5",
  },
  colorSelector: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 10,
  },
  selectedCircle: {
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  button: {
    alignContent: "center",
    backgroundColor: "#757083",
    padding: 10,
  },
  image: {
    flex: 1,
    justifyContent: "space-between",
    padding: "3%",
    justifyContent: "center",
  },
});

export default Start;
