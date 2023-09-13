// import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";

// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from "firebase/firestore";

// Create the navigator
const Stack = createNativeStackNavigator();
import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect } from "react";
import { LogBox, Alert } from "react-native";
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);
const App = () => {
  ///
  const connectionStatus = useNetInfo();

  ///
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);
  ///
  const firebaseConfig = {
    apiKey: "AIzaSyCVsMMoma6yU4dlDFjufj4OQjtqsRt_rjo",
    authDomain: "chat-app-ae2bd.firebaseapp.com",
    projectId: "chat-app-ae2bd",
    storageBucket: "chat-app-ae2bd.appspot.com",
    messagingSenderId: "874982213904",
    appId: "1:874982213904:web:d493254eeae19f1268bd95",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => (
            <Chat
              isConnected={connectionStatus.isConnected}
              db={db}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
