
var admin = require("firebase-admin");

var serviceAccount = require("./oficina-firebase-adminsdk.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()

export { db }