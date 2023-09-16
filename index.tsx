import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './src/App'

//css
import './src/static/css/fixer.css'
import './src/static/css/main-edge.css'
import './src/static/css/main-node.css'
import './src/static/css/forms.css'
import './src/static/css/graph.css'
import './src/static/css/pattern.css'
import './src/static/css/project.css'
import './src/static/css/info.css'


import '@fortawesome/fontawesome-free/css/all.min.css';



import { persistStore } from 'redux-persist'
import store from './src/store'
import { PersistGate } from 'redux-persist/integration/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA24GVDgUvN-bKW0ntxDeAzyhn02rM68mg",
    authDomain: "project-constructor-aeff5.firebaseapp.com",
    projectId: "project-constructor-aeff5",
    storageBucket: "project-constructor-aeff5.appspot.com",
    messagingSenderId: "134796090145",
    appId: "1:134796090145:web:8a8087b8c3a08347f7bc60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const persistor = persistStore(store);


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    , document.querySelector('#root')
)

