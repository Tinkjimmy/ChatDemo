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

  **Database Configuration** <br>
This app utilizes FireStore Database to store the data. You can configure the database by going to https://firebase.google.com/ 
and creating a new project if you dont already have one set up. When setting up the database, make sure to change "allow read, write: if false;" to "allow read, write: if true;" in the rules tab.
Then copy the FireBase configuration from the database and put it in the App.js file

### Android Studio

To utilize features of the app within the android studio emulator install these libraries in your project directory:

```shell
expo install expo-image-picker
expo install react-native-maps
expo install expo-location
expo install expo-media-library
```

