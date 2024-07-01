import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyANPex6E6x9eZaL7VKB0Cu3Ht3ABA1qvOk",
    authDomain: "adilaxmi-1d2bf.firebaseapp.com",
    databaseURL: "https://adilaxmi-1d2bf-default-rtdb.firebaseio.com",
    projectId: "adilaxmi-1d2bf",
    storageBucket: "adilaxmi-1d2bf.appspot.com",
    messagingSenderId: "723624352314",
    appId: "1:723624352314:web:f3b014677bece40f65b303",
    measurementId: "G-7MGDNCV3F2"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
     
export default database;
