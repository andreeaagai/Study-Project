import express from 'express';
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const app = express();

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

const firebaseConfig = {
  apiKey: "AIzaSyDzBvOhN9jV2fTJ1enrYFrvRwmwwY-O-5M",
  authDomain: "your-auth-domain.firebaseapp.com", 
  projectId: "sample-firebase-a-7b771",
  storageBucket: "your-storage-bucket.appspot.com", 
  messagingSenderId: "your-sender-id", 
  appId: "571931393501",
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export { messaging, getToken, onMessage };


app.listen(3000, () => {
  console.log('Serverul rulează pe http://localhost:3000');
});
