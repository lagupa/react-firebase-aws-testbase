const functions = require("firebase-functions");

exports.sayHello = functions.https.onCall((data, context) => {
  const { name } = data;
  return `Hello, ${name}`;
});
