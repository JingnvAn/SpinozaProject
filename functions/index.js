const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// exports.spinozaAPITest = functions.https.onRequest((request, response) => {
//     response.send("Hello this is an API test from Spinoza!");
// });

const app = require('express')();

const {
    getAllQuestions
} = require('./APIs/questions')

app.get('/questions', getAllQuestions);
exports.api = functions.https.onRequest(app);