const config = {
   apiKey: "AIzaSyCls17H4iNTI1YiZYVjS-xgTU7-3v1qqM4",
   authDomain: "quiz-app-4369b.firebaseapp.com",
   projectId: "quiz-app-4369b",
   storageBucket: "quiz-app-4369b.appspot.com",
   messagingSenderId: "1061086161778",
   appId: "1:1061086161778:web:b51fe97ef9b108fc9e8beb",
   measurementId: "G-4YX06MXJ8S"
};

export function getFirebaseConfig() {
   if (!config || !config.apiKey) {
      throw new Error("No Firebase configuration object provided." + "\n" +
      "Add your web app\'s configuration object to firebase-config.ts");
   } else {
      return config;
   }
}