
var admin = require("firebase-admin");

var serviceAccount = require("./oficina-5d687-firebase-adminsdk-3v475-ae20bdda70.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()

export { db }