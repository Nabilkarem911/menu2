// firebase-config.js
// 1. استيراد المكتبات من سيرفرات جوجل (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// 2. بيانات مشروعك (أنا نسختها من اللي انت بعته بالظبط)
const firebaseConfig = {
  apiKey: "AIzaSyAHw9aNyLuZZ-_90OK0xIgRZ62SPawEthc",
  authDomain: "ai-menu-28154.firebaseapp.com",
  projectId: "ai-menu-28154",
  storageBucket: "ai-menu-28154.firebasestorage.app",
  messagingSenderId: "438250172534",
  appId: "1:438250172534:web:de6cc1ea07fc7cef8baf57",
  measurementId: "G-GPZR14PB92"
};

// 3. تشغيل الفايربيز
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// 4. تصدير الأدوات عشان باقي الصفحات تشوفها
export { db, auth, doc, getDoc, setDoc, updateDoc, arrayUnion, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut };
