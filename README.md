**REACT NATIVE CHAT APP** <br>
**Key Features** <br>
This application was designed to create a mobile chat app using React Native. This app will include key features that allow a user to 
- Enter a page where users can enter their name and choose a background color for the chat screen
before joining the chat
- A page displaying the conversation, as well as an input field and submit button.
- The chat must provide users with two additional communication features: sending imagesand location data.
- Data gets stored online and offline using Google FireBase.

  ## Technology Utilized

- React Native
- Expo
- React Native Gifted Chat library
- Firebase Cloud Storage (images)
- Google Firebase Authentication
- Google Firestore Database
- AsyncStorage caching (offline usage)
- Expo ImagePicker and Medialibary

  ## Key Features

- A page where users can enter their name and choose a background color for the chat screen
  before joining the chat.
- A page displaying the conversation, as well as an input field and submit button.
- The chat must provide users with two additional communication features: sending images
  and location data.
- Data gets stored online and offline.

## Setting up the Environment

`npx create-expo-app chat_app --template`
New React Native project

`npm install - expo-cli`
Install Expo

`expo start or npm start`
Start Expo

### Setting up Google's Firebase Database

Firebase link -> (https://firebase.google.com/)

- Sign-up or sign in to Firebase
- `npm install firebase` to add firebase connection into your project directory
- Copy the Firebase Config from the project setting tab and paste into you App.js file
- In order to allow read and write access to the database - navigate to the rules tab in the console and change the code from `allow read, write: if false;` to `allow read, write: if true;` then click publish

### Packages to install

```
* npm install --save @react-navigation/native @react-navigation/native-stack
* expo install react-native-screens react-native-safe-area-context
* npm install react-native-gifted-chat --save
* npm install firebase@9.13.0 --save
* expo install @react-native-async-storage/async-storage
* expo install @react-native-community/netinfo
* expo install expo-image-picker
* expo install expo-location
* expo install react-native-maps
```

Using the Chat App
Once the environment and database have been created and configured, you can now use the app. To start the app, navigate to the root folder of the project and use -npm expo start (if using android emmulator, you can also run using -npm expo start --android). Starting the app with -npm expo start --offline with enable offline testing.
Note: Expo only supports Node up to version 16.19.0 so make sure to change the version if you are running a newer version of node (use version manager -nvm use 16.19.0)

### Android Studio

To utilize features of the app within the android studio emulator install these libraries in your project directory:

```shell
expo install expo-image-picker
expo install react-native-maps
expo install expo-location
expo install expo-media-library
```

